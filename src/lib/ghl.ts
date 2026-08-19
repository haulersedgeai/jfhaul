export type GHLLeadPayload = {
  first_name: string;
  last_name: string;
  email?: string;
  phone?: string;
  lead_source: string;
  page?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  service?: string;
  city?: string;
  message?: string;
  form: string;
};

const TIMEOUT_MS = 5000;

/** "Jacorie" -> first only. "Mary Ann Smith" -> first "Mary", last "Ann Smith". */
export function splitName(name: string): { first_name: string; last_name: string } {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return { first_name: "", last_name: "" };
  if (parts.length === 1) return { first_name: parts[0], last_name: "" };
  return { first_name: parts[0], last_name: parts.slice(1).join(" ") };
}

type AttemptResult =
  | { ok: true }
  | { ok: false; retryable: boolean; error: unknown };

async function postOnce(url: string, payload: GHLLeadPayload): Promise<AttemptResult> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    if (res.ok) return { ok: true };
    // 5xx is worth a second shot; 4xx means GHL rejected the payload, so retrying
    // would just fail identically.
    return { ok: false, retryable: res.status >= 500, error: `HTTP ${res.status}` };
  } catch (error) {
    // Network failure or the 5s abort — both retryable.
    return { ok: false, retryable: true, error };
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Fire the lead at the GHL inbound webhook. Never throws — a CRM outage must not
 * cost us the lead or the visitor-facing success response.
 */
export async function forwardToGHL(payload: GHLLeadPayload): Promise<void> {
  const url = process.env.GHL_WEBHOOK_URL;
  if (!url) return;

  const fail = (error: unknown) =>
    console.error("[GHL_FORWARD_FAIL]", {
      form: payload.form,
      phone: payload.phone,
      error,
    });

  try {
    const first = await postOnce(url, payload);
    if (first.ok) return;
    if (!first.retryable) {
      fail(first.error);
      return;
    }

    const second = await postOnce(url, payload);
    if (second.ok) return;
    fail(second.error);
  } catch (error) {
    fail(error);
  }
}
