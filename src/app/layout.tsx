import type { Metadata, Viewport } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { business } from "@/data/site";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { StickyCallBar } from "@/components/site/StickyCallBar";
import { OrganizationSchema } from "@/components/site/StructuredData";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: `${business.name} — ${business.tagline}`,
    template: `%s — ${business.name}`,
  },
  description:
    "J&F Haul and Deliver is a family + woman-owned junk removal team serving Birmingham, Trussville, Hoover, and Vestavia Hills, AL. Same-day service. Licensed & insured. Call 205-624-0731 for a free upfront quote.",
  applicationName: business.name,
  keywords: [
    "junk removal Birmingham AL",
    "junk removal near me",
    "estate cleanouts Birmingham",
    "hoarder cleanouts Birmingham",
    "eviction cleanouts",
    "hot tub removal",
    "furniture removal",
    "appliance removal",
    "Trussville",
    "Hoover",
    "Vestavia Hills",
  ],
  authors: [{ name: business.legalName }],
  openGraph: {
    type: "website",
    siteName: business.name,
    title: `${business.name} — ${business.tagline}`,
    description:
      "Family + woman-owned junk removal in Birmingham, AL and nearby cities. Same-day service, upfront pricing.",
    url: business.siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} — ${business.tagline}`,
    description: "Junk removal in Birmingham, AL. Family + woman-owned. 205-624-0731.",
  },
  alternates: { canonical: business.siteUrl },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0f5d6b",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[var(--color-cream-100)] text-ink-800">
        <OrganizationSchema />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCallBar />
      </body>
    </html>
  );
}
