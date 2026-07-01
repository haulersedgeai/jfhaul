"use server";

import { business } from "@/data/site";

export type QuoteState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<"name" | "phone" | "email" | "message" | "service", string>>;
};

const PHONE_RE = /^[+()\d\s.\-]{7,}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitQuote(_prev: QuoteState, formData: FormData): Promise<QuoteState> {
  const honeypot = String(formData.get("website") ?? "");
  if (honeypot) {
    return { status: "success", message: "Thanks! We'll be in touch shortly." };
  }

  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const address = String(formData.get("address") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const source = String(formData.get("source") ?? "site").trim();

  const fieldErrors: QuoteState["fieldErrors"] = {};
  if (!name) fieldErrors.name = "Please enter your name.";
  if (!phone) fieldErrors.phone = "We need a phone number to quote you.";
  else if (!PHONE_RE.test(phone)) fieldErrors.phone = "That doesn't look like a valid phone.";
  if (email && !EMAIL_RE.test(email)) fieldErrors.email = "Please enter a valid email.";

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted fields and try again.",
      fieldErrors,
    };
  }

  const subject = `New quote request from ${name}`;
  const lines = [
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
    .filter(Boolean)
    .join("\n");

  const resendKey = process.env.RESEND_API_KEY;
  const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;

  try {
    if (resendKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM || "J&F Website <onboarding@resend.dev>",
          to: [business.email],
          reply_to: email || undefined,
          subject,
          text: lines,
        }),
        cache: "no-store",
      });
      if (!res.ok) {
        const text = await res.text().catch(() => "");
        console.error("Resend failed:", res.status, text);
        throw new Error("send-failed");
      }
    } else if (web3formsKey) {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: web3formsKey,
          subject,
          from_name: `${business.name} website`,
          replyto: email || undefined,
          name,
          phone,
          email,
          service,
          address,
          message,
          source,
        }),
        cache: "no-store",
      });
      if (!res.ok) {
        const text = await res.text().catch(() => "");
        console.error("Web3Forms failed:", res.status, text);
        throw new Error("send-failed");
      }
    } else {
      // No key configured — log & succeed so the site never breaks in dev.
      console.warn("No RESEND_API_KEY or WEB3FORMS_ACCESS_KEY set. Quote request:", lines);
    }
  } catch {
    return {
      status: "error",
      message: `Something went wrong sending your request. Please call us at ${business.phone}.`,
    };
  }

  return {
    status: "success",
    message: "Thanks! We got your request and will call or text you shortly.",
  };
}
