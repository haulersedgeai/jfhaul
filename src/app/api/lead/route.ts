import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const PHONE_RE = /^[+()\d\s.\-]{7,}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(v: string) {
  return v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  console.log("[lead] route hit");

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    console.warn("[lead] invalid json body");
    return NextResponse.json(
      { success: false, message: "Invalid request." },
      { status: 400 }
    );
  }

  const botcheck = Boolean(body.botcheck);
  const hpUrl = String(body.hp_url ?? "").trim();
  if (botcheck || hpUrl) {
    console.warn("[lead] honeypot tripped", { botcheck, hpUrl });
    return NextResponse.json({ success: true });
  }

  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const email = String(body.email ?? "").trim();
  const service = String(body.service ?? "").trim();
  const address = String(body.address ?? "").trim();
  const message = String(body.message ?? "").trim();
  const source = String(body.source ?? "site").trim();

  if (!name) {
    console.warn("[lead] validation fail: name");
    return NextResponse.json(
      { success: false, message: "Name is required." },
      { status: 400 }
    );
  }
  if (!phone) {
    console.warn("[lead] validation fail: phone (empty)");
    return NextResponse.json(
      { success: false, message: "Phone is required." },
      { status: 400 }
    );
  }
  if (!PHONE_RE.test(phone)) {
    console.warn("[lead] validation fail: phone (format)");
    return NextResponse.json(
      { success: false, message: "That doesn't look like a valid phone." },
      { status: 400 }
    );
  }
  if (email && !EMAIL_RE.test(email)) {
    console.warn("[lead] validation fail: email (format)");
    return NextResponse.json(
      { success: false, message: "Please enter a valid email." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.LEAD_FROM_EMAIL;
  const to = process.env.LEAD_TO_EMAIL;

  if (!apiKey || !from || !to) {
    console.error("[lead] missing env", {
      hasKey: Boolean(apiKey),
      hasFrom: Boolean(from),
      hasTo: Boolean(to),
    });
    return NextResponse.json(
      { success: false, message: "Email service is not configured." },
      { status: 500 }
    );
  }

  const textLines = [
    `Name: ${name}`,
    `Phone: ${phone}`,
    email ? `Email: ${email}` : null,
    service ? `Service: ${service}` : null,
    address ? `Address / area: ${address}` : null,
    "",
    "Message:",
    message || "(no message)",
    "",
    `Source: ${source}`,
    `Submitted: ${new Date().toISOString()}`,
  ]
    .filter((v): v is string => v !== null)
    .join("\n");

  const row = (label: string, value: string) =>
    `<tr><td style="padding:6px 12px 6px 0;color:#6b7280;font-weight:600;vertical-align:top">${escapeHtml(label)}</td><td style="padding:6px 0;color:#111827">${escapeHtml(value)}</td></tr>`;

  const html = `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#111827">
      <h2 style="margin:0 0 12px 0">New quote request</h2>
      <table style="border-collapse:collapse;font-size:14px">
        ${row("Name", name)}
        ${row("Phone", phone)}
        ${email ? row("Email", email) : ""}
        ${service ? row("Service", service) : ""}
        ${address ? row("Address", address) : ""}
        ${row("Source", source)}
      </table>
      <h3 style="margin:20px 0 6px 0;font-size:14px">Message</h3>
      <div style="white-space:pre-wrap;font-size:14px;color:#111827">${escapeHtml(message || "(no message)")}</div>
    </div>
  `.trim();

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email || undefined,
      subject: "New quote request — J&F Haul and Deliver",
      text: textLines,
      html,
    });

    if (error) {
      console.error("[lead] resend error", error);
      return NextResponse.json(
        { success: false, message: "Could not send your request." },
        { status: 502 }
      );
    }

    console.log("[lead] sent ok", { to, from, source });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[lead] resend threw", err);
    return NextResponse.json(
      { success: false, message: "Could not send your request." },
      { status: 502 }
    );
  }
}
