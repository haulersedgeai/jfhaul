export type Attribution = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
};

export const ATTRIBUTION_STORAGE_KEY = "jf_attribution";

export const ATTRIBUTION_KEYS = ["utm_source", "utm_medium", "utm_campaign"] as const;

/**
 * Read first-touch UTMs captured by <AttributionCapture />. SSR-safe and never
 * throws — sessionStorage can be blocked entirely (private mode, cookie
 * settings), in which case a lead simply carries no attribution.
 */
export function getAttribution(): Attribution {
  if (typeof window === "undefined") return {};

  try {
    const raw = window.sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY);
    if (!raw) return {};

    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return {};

    const record = parsed as Record<string, unknown>;
    const out: Attribution = {};
    for (const key of ATTRIBUTION_KEYS) {
      const value = record[key];
      if (typeof value === "string" && value) out[key] = value;
    }
    return out;
  } catch {
    return {};
  }
}
