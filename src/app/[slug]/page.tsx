import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { business, locationPages, serviceBySlug } from "@/data/site";
import { LocationLanding } from "@/components/site/LocationLanding";

/**
 * Static catch-all for every exact SEO path in locationPages.
 * Any path not returned by generateStaticParams 404s (dynamicParams=false).
 */
export const dynamicParams = false;
export const dynamic = "force-static";

export function generateStaticParams() {
  return locationPages.map((p) => ({ slug: p.path.slice(1) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = locationPages.find((p) => p.path === `/${slug}`);
  if (!page) return {};
  const service = serviceBySlug(page.service);
  const title = `${service?.name ?? page.title} in ${page.city}, AL`;
  const description = `${service?.name ?? "Junk removal"} in ${page.city}, Alabama by J&F Haul and Deliver. Family + woman-owned. Same-day service, licensed & insured, free upfront quotes. Call ${business.phone}.`;
  const url = `${business.siteUrl}${page.path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: business.name,
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function LandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = locationPages.find((p) => p.path === `/${slug}`);
  if (!page) notFound();
  return <LocationLanding page={page} />;
}
