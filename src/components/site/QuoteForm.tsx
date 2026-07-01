"use client";

import { useActionState } from "react";
import { submitQuote, type QuoteState } from "@/app/actions/quote";
import { services, business } from "@/data/site";

const initial: QuoteState = { status: "idle" };

export function QuoteForm({
  variant = "card",
  heading = "Get a free upfront quote",
  intro = "Tell us what needs to go. We usually reply within an hour during business hours.",
  defaultService,
  defaultCity,
  source = "homepage",
}: {
  variant?: "card" | "plain";
  heading?: string;
  intro?: string;
  defaultService?: string;
  defaultCity?: string;
  source?: string;
}) {
  const [state, formAction, pending] = useActionState(submitQuote, initial);

  const wrapper =
    variant === "card"
      ? "rounded-3xl bg-white p-6 md:p-8 shadow-[var(--shadow-lift)] border border-black/[0.04]"
      : "";

  if (state.status === "success") {
    return (
      <div className={wrapper}>
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-emerald-100 text-emerald-700 grid place-items-center">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <div className="text-lg font-semibold text-ink-800">Request received</div>
            <div className="text-ink-500 text-sm">{state.message}</div>
          </div>
        </div>
        <div className="mt-5 text-sm text-ink-500">
          Need us today?{" "}
          <a href={business.telHref} className="text-accent-600 font-semibold hover:underline">
            Call {business.phone}
          </a>{" "}
          — we'll answer.
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} className={wrapper} noValidate>
      {(heading || intro) && (
        <div className="mb-5">
          {heading && <h3 className="text-2xl font-bold text-ink-800">{heading}</h3>}
          {intro && <p className="mt-1 text-sm text-ink-500">{intro}</p>}
        </div>
      )}

      <input type="hidden" name="source" value={source} />
      {/* honeypot */}
      <div className="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Your name" name="name" required error={state.fieldErrors?.name} />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          inputMode="tel"
          error={state.fieldErrors?.phone}
        />
        <Field
          label="Email (optional)"
          name="email"
          type="email"
          autoComplete="email"
          error={state.fieldErrors?.email}
        />
        <div>
          <label className="block text-sm font-semibold text-ink-700 mb-1">Service</label>
          <select
            name="service"
            defaultValue={defaultService ?? ""}
            className="w-full rounded-xl border border-ink-100 bg-white px-4 py-3 text-ink-800 focus:border-brand-500"
          >
            <option value="">What do you need done?</option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
        <Field
          label="Address or area"
          name="address"
          defaultValue={defaultCity ? `${defaultCity}, AL` : ""}
          className="md:col-span-2"
          placeholder="Street or neighborhood in Birmingham, Trussville, Hoover, or Vestavia Hills"
        />
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-ink-700 mb-1">Tell us what's going</label>
          <textarea
            name="message"
            rows={4}
            placeholder="e.g. Old couch and mattress in a 2nd-floor apartment, need it gone this week."
            className="w-full rounded-xl border border-ink-100 bg-white px-4 py-3 text-ink-800 focus:border-brand-500 resize-y"
          />
        </div>
      </div>

      {state.status === "error" && state.message && (
        <div className="mt-4 rounded-xl bg-accent-50 text-accent-800 border border-accent-100 px-4 py-3 text-sm">
          {state.message}
        </div>
      )}

      <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3.5 shadow-[var(--shadow-soft)] disabled:opacity-60"
        >
          {pending ? "Sending…" : "Get my free quote"}
        </button>
        <a
          href={business.telHref}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-100 hover:border-brand-300 text-brand-800 font-semibold px-6 py-3.5"
        >
          Or call {business.phone}
        </a>
      </div>
      <p className="mt-3 text-xs text-ink-400">
        By submitting you agree to be contacted about your request. No spam, ever.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  error,
  className = "",
  placeholder,
  autoComplete,
  inputMode,
  defaultValue,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
  className?: string;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: "text" | "tel" | "email" | "numeric" | "decimal" | "search" | "url";
  defaultValue?: string;
}) {
  return (
    <div className={className}>
      <label className="block text-sm font-semibold text-ink-700 mb-1">
        {label}
        {required && <span className="text-accent-500"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        defaultValue={defaultValue}
        aria-invalid={error ? true : undefined}
        className={`w-full rounded-xl border bg-white px-4 py-3 text-ink-800 focus:border-brand-500 ${
          error ? "border-accent-400" : "border-ink-100"
        }`}
      />
      {error && <div className="mt-1 text-xs text-accent-700">{error}</div>}
    </div>
  );
}
