import Link from "next/link";
import Image from "next/image";
import { business, cities, services, socials, locationPages } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink-800 text-ink-100 mt-24">
      <div className="container-x py-14 md:py-20">
        <div className="grid gap-10 md:gap-12 md:grid-cols-4">
          <div>
            <Image
              src="/images/logo.png"
              alt={`${business.name} logo`}
              width={200}
              height={64}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="mt-4 text-sm text-ink-200 leading-relaxed max-w-xs">
              Family + woman-owned junk removal proudly serving Birmingham and the surrounding cities. Licensed, insured, and same-day whenever we can be.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <SocialLink href={socials.facebook} label="Facebook">
                <FacebookIcon />
              </SocialLink>
              <SocialLink href={socials.instagram} label="Instagram">
                <InstagramIcon />
              </SocialLink>
              <SocialLink href={socials.youtube} label="YouTube">
                <YouTubeIcon />
              </SocialLink>
              <SocialLink href={socials.tiktok} label="TikTok">
                <TikTokIcon />
              </SocialLink>
              <SocialLink href={socials.googleSearch} label="Find us on Google">
                <GoogleIcon />
              </SocialLink>
            </div>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-4">Services</h3>
            <ul className="space-y-2">
              {services.slice(0, 10).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/#service-${s.slug}`}
                    className="text-ink-200 hover:text-white text-sm"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-4">Service areas</h3>
            <ul className="space-y-2">
              {cities.map((c) => {
                const cityPages = locationPages.filter((p) => p.citySlug === c.slug);
                const first = cityPages[0]?.path ?? "/contact";
                return (
                  <li key={c.slug}>
                    <Link href={first} className="text-ink-200 hover:text-white text-sm">
                      {c.name}, {c.state}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={business.telHref} className="text-white text-lg font-semibold hover:text-accent-300">
                  {business.phone}
                </a>
                <div className="text-ink-300 text-xs">Call or text — same number</div>
              </li>
              <li>
                <a href={business.emailHref} className="text-ink-200 hover:text-white">
                  {business.email}
                </a>
              </li>
              <li className="text-ink-200">
                <div className="font-medium text-white">Hours</div>
                <div>{business.hours}</div>
              </li>
              <li className="text-ink-200">
                <div className="font-medium text-white">Based in</div>
                <div>{business.addressCity}, {business.addressState}</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-ink-300">
          <div>© {year} {business.legalName}. All rights reserved.</div>
          <div>Licensed &amp; insured · Family + woman-owned · Birmingham, AL</div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="h-10 w-10 rounded-full bg-white/10 hover:bg-accent-500 flex items-center justify-center transition"
    >
      {children}
    </a>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13 22v-8h2.7l.4-3.1H13V8.9c0-.9.3-1.5 1.6-1.5H16V4.6c-.3 0-1.3-.1-2.5-.1-2.4 0-4.1 1.5-4.1 4.1v2.3H7v3.1h2.4V22H13z"/>
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/>
    </svg>
  );
}
function YouTubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.5s-.2-1.5-.9-2.2c-.9-.9-1.8-.9-2.3-1C17 3 12 3 12 3s-5 0-8.3.3c-.5.1-1.5.1-2.3 1-.7.7-.9 2.2-.9 2.2S.3 8.3.3 10v2c0 1.7.2 3.5.2 3.5s.2 1.5.9 2.2c.9.9 2.1.9 2.6 1 1.9.2 8 .3 8 .3s5 0 8.3-.3c.5-.1 1.4-.1 2.3-1 .7-.7.9-2.2.9-2.2s.2-1.8.2-3.5v-2c0-1.7-.2-3.5-.2-3.5zM9.7 14.4V7.9l6 3.3-6 3.2z"/>
    </svg>
  );
}
function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.6 6.3a5.5 5.5 0 0 1-3.4-1.2 5.5 5.5 0 0 1-2.1-3.6h-3v13.6a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.4a5.7 5.7 0 1 0 4.8 5.6V9.2a8.6 8.6 0 0 0 5.5 1.9v-3c0-.5 0-1.1 0-1.8z"/>
    </svg>
  );
}
function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.35 11.1H12v2.8h5.35c-.23 1.4-1.62 4.1-5.35 4.1-3.2 0-5.82-2.65-5.82-5.9s2.62-5.9 5.82-5.9c1.83 0 3.05.78 3.75 1.45l2.55-2.45C16.55 3.6 14.5 2.7 12 2.7 6.9 2.7 2.75 6.85 2.75 12S6.9 21.3 12 21.3c6.9 0 9.5-4.85 9.5-8.6 0-.55-.05-1.1-.15-1.6z"/>
    </svg>
  );
}
