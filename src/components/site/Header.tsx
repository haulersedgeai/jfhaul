"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import {
  birminghamPathForService,
  business,
  cities,
  primaryPathForCity,
  services,
} from "@/data/site";

type MenuKey = "services" | "areas" | null;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<MenuKey>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  useEffect(() => {
    if (!menu) return;
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenu(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenu(null);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [menu]);

  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-[0_2px_20px_rgba(15,93,107,0.08)] py-2"
          : "bg-white/70 py-3"
      }`}
    >
      <div className="container-x flex items-center justify-between gap-4">
        <Wordmark />

        <nav
          ref={menuRef}
          className="hidden lg:flex items-center gap-1"
          aria-label="Primary"
        >
          <NavDropdown
            label="Services"
            open={menu === "services"}
            onToggle={() => setMenu(menu === "services" ? null : "services")}
          >
            <div className="p-3 min-w-[560px] grid grid-cols-2 gap-1">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={birminghamPathForService(s.slug)}
                  onClick={() => setMenu(null)}
                  className="px-3 py-2 rounded-lg text-sm text-ink-700 hover:bg-brand-50 hover:text-brand-800"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </NavDropdown>

          <NavDropdown
            label="Service Areas"
            open={menu === "areas"}
            onToggle={() => setMenu(menu === "areas" ? null : "areas")}
          >
            <div className="p-3 min-w-[260px] flex flex-col gap-1">
              {cities.map((c) => (
                <Link
                  key={c.slug}
                  href={primaryPathForCity(c.slug)}
                  onClick={() => setMenu(null)}
                  className="px-3 py-2 rounded-lg text-sm text-ink-700 hover:bg-brand-50 hover:text-brand-800"
                >
                  {c.name}, {c.state}
                </Link>
              ))}
            </div>
          </NavDropdown>

          <NavLink href="/about" onClick={() => setMenu(null)}>
            About
          </NavLink>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={business.telHref}
            className="inline-flex items-center gap-2 text-ink-800 font-semibold hover:text-brand-800"
            aria-label={`Call ${business.phone}`}
          >
            <Phone size={16} aria-hidden="true" />
            {business.phone}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent-500 hover:bg-accent-600 px-5 py-2.5 text-white font-semibold shadow-[var(--shadow-soft)] transition"
          >
            Get a Quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-full bg-brand-50 text-brand-800"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-drawer"
        >
          <Menu size={22} aria-hidden="true" />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-drawer"
        className={`fixed inset-0 z-50 lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-ink-900/40 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[86%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-ink-100">
            <Wordmark size="sm" onClick={() => setOpen(false)} />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="h-10 w-10 rounded-full bg-ink-50 text-ink-800 grid place-items-center"
              aria-label="Close menu"
            >
              <X size={18} aria-hidden="true" />
            </button>
          </div>
          <div className="p-5 overflow-y-auto h-[calc(100%-64px)] pb-24">
            <MobileNav onNavigate={() => setOpen(false)} />
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={business.telHref}
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 text-ink-800 font-semibold border border-ink-100 rounded-full px-5 py-3"
              >
                <Phone size={16} aria-hidden="true" />
                Call {business.phone}
              </a>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-5 py-3 text-white font-semibold"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Wordmark({
  size = "md",
  onClick,
}: {
  size?: "sm" | "md";
  onClick?: () => void;
}) {
  const cls =
    size === "sm"
      ? "text-lg md:text-xl"
      : "text-xl md:text-[1.4rem]";
  return (
    <Link
      href="/"
      onClick={onClick}
      className={`font-display font-black tracking-tight text-ink-800 hover:text-brand-800 ${cls}`}
      aria-label={`${business.name} — home`}
    >
      J<span className="text-accent-500">&</span>F Haul{" "}
      <span className="text-ink-500 font-semibold">& Deliver</span>
    </Link>
  );
}

function NavLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="px-3 py-2 rounded-full text-ink-700 hover:text-brand-800 hover:bg-brand-50 font-semibold text-[0.95rem] transition"
    >
      {children}
    </Link>
  );
}

function NavDropdown({
  label,
  open,
  onToggle,
  children,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={onToggle}
        className="inline-flex items-center gap-1 px-3 py-2 rounded-full text-ink-700 hover:text-brand-800 hover:bg-brand-50 font-semibold text-[0.95rem] transition"
      >
        {label}
        <ChevronDown
          size={14}
          aria-hidden="true"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        role="menu"
        className={`absolute left-0 top-full pt-2 transition-all ${
          open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="bg-white rounded-2xl shadow-[var(--shadow-lift)] border border-ink-100">
          {children}
        </div>
      </div>
    </div>
  );
}

function MobileNav({ onNavigate }: { onNavigate: () => void }) {
  return (
    <nav aria-label="Mobile primary" className="space-y-1">
      <details className="group px-3 py-2 rounded-xl bg-cream-50">
        <summary className="cursor-pointer list-none flex items-center justify-between font-bold text-ink-800 text-lg">
          Services
          <ChevronDown size={16} className="transition group-open:rotate-180" aria-hidden="true" />
        </summary>
        <ul className="mt-2 space-y-1 pl-1">
          {services.map((s) => (
            <li key={s.slug}>
              <Link
                href={birminghamPathForService(s.slug)}
                onClick={onNavigate}
                className="block px-3 py-2 rounded-lg text-ink-700 hover:bg-brand-50 hover:text-brand-800 text-[0.95rem]"
              >
                {s.name}
              </Link>
            </li>
          ))}
        </ul>
      </details>

      <details className="group px-3 py-2 rounded-xl bg-cream-50">
        <summary className="cursor-pointer list-none flex items-center justify-between font-bold text-ink-800 text-lg">
          Service Areas
          <ChevronDown size={16} className="transition group-open:rotate-180" aria-hidden="true" />
        </summary>
        <ul className="mt-2 space-y-1 pl-1">
          {cities.map((c) => (
            <li key={c.slug}>
              <Link
                href={primaryPathForCity(c.slug)}
                onClick={onNavigate}
                className="block px-3 py-2 rounded-lg text-ink-700 hover:bg-brand-50 hover:text-brand-800"
              >
                {c.name}, {c.state}
              </Link>
            </li>
          ))}
        </ul>
      </details>

      <Link
        href="/about"
        onClick={onNavigate}
        className="block px-4 py-3 rounded-xl bg-cream-50 font-bold text-ink-800 text-lg hover:bg-brand-50 hover:text-brand-800"
      >
        About
      </Link>
    </nav>
  );
}
