"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { business, cities, locationPages, services } from "@/data/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-[0_2px_20px_rgba(15,93,107,0.08)] py-2"
          : "bg-white/60 py-3"
      }`}
    >
      <div className="container-x flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label={`${business.name} — home`}>
          <Image
            src="/images/logo.png"
            alt={`${business.name} logo`}
            width={220}
            height={72}
            fetchPriority="high"
            className={`h-10 md:h-12 w-auto transition-all duration-300`}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          <NavLink href="/">Home</NavLink>
          <ServiceAreasMenu />
          <NavLink href="/#services">Services</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={business.telHref}
            className="inline-flex items-center gap-2 rounded-full bg-accent-500 hover:bg-accent-600 px-5 py-2.5 text-white font-semibold shadow-[var(--shadow-soft)] transition"
          >
            <PhoneIcon />
            <span>{business.phone}</span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-full bg-brand-50 text-brand-800"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-drawer"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-drawer"
        className={`fixed inset-0 z-50 lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-ink-900/40 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[86%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-ink-100">
            <Image src="/images/logo.png" alt="" width={140} height={44} className="h-9 w-auto" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="h-10 w-10 rounded-full bg-ink-50 text-ink-800"
              aria-label="Close menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mx-auto" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
          <div className="p-5 overflow-y-auto h-[calc(100%-64px)] pb-24">
            <MobileNav onNavigate={() => setOpen(false)} />
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={business.telHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-5 py-3 text-white font-semibold"
                onClick={() => setOpen(false)}
              >
                <PhoneIcon /> Call {business.phone}
              </a>
              <a
                href={business.smsHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white border border-brand-100 text-brand-800 px-5 py-3 font-semibold"
                onClick={() => setOpen(false)}
              >
                Text us
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="px-3 py-2 rounded-full text-ink-700 hover:text-brand-800 hover:bg-brand-50 font-medium transition"
    >
      {children}
    </Link>
  );
}

function ServiceAreasMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="inline-flex items-center gap-1 px-3 py-2 rounded-full text-ink-700 hover:text-brand-800 hover:bg-brand-50 font-medium transition"
      >
        Service Areas
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <div
        role="menu"
        className={`absolute left-1/2 -translate-x-1/2 top-full pt-2 transition-all ${
          open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="bg-white rounded-2xl shadow-[var(--shadow-lift)] border border-ink-100 p-3 min-w-[520px] grid grid-cols-2 gap-2">
          {cities.map((c) => {
            const pages = locationPages.filter((p) => p.citySlug === c.slug);
            return (
              <div key={c.slug} className="p-3">
                <div className="text-xs font-semibold uppercase tracking-widest text-accent-600 mb-2">
                  {c.name}, AL
                </div>
                <ul className="space-y-1.5">
                  {pages.slice(0, 5).map((p) => {
                    const svc = services.find((s) => s.slug === p.service);
                    return (
                      <li key={p.path}>
                        <Link
                          href={p.path}
                          className="text-sm text-ink-700 hover:text-brand-800 hover:underline"
                        >
                          {svc?.name ?? p.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function MobileNav({ onNavigate }: { onNavigate: () => void }) {
  return (
    <nav aria-label="Mobile primary" className="space-y-2">
      <MobileLink href="/" onClick={onNavigate}>Home</MobileLink>
      <MobileLink href="/#services" onClick={onNavigate}>Services</MobileLink>
      <MobileLink href="/contact" onClick={onNavigate}>Contact</MobileLink>
      <div className="pt-4">
        <div className="text-xs font-semibold uppercase tracking-widest text-accent-600 px-3 mb-2">Service areas</div>
        {cities.map((c) => (
          <details key={c.slug} className="group px-3 py-2 rounded-xl">
            <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-ink-800">
              {c.name}, AL
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition group-open:rotate-180" aria-hidden="true">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </summary>
            <ul className="mt-2 space-y-1.5 pl-1">
              {locationPages.filter((p) => p.citySlug === c.slug).map((p) => {
                const svc = services.find((s) => s.slug === p.service);
                return (
                  <li key={p.path}>
                    <Link
                      href={p.path}
                      onClick={onNavigate}
                      className="block px-3 py-1.5 rounded-lg text-ink-700 hover:bg-brand-50 hover:text-brand-800"
                    >
                      {svc?.name ?? p.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </details>
        ))}
      </div>
    </nav>
  );
}

function MobileLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-3 py-3 rounded-xl text-lg font-semibold text-ink-800 hover:bg-brand-50 hover:text-brand-800"
    >
      {children}
    </Link>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
