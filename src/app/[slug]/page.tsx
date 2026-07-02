import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  business,
  locationPages,
  serviceAreaPath,
  serviceAreas,
  serviceBySlug,
} from "@/data/site";
import { LocationLanding } from "@/components/site/LocationLanding";
import { TownHub } from "@/components/site/TownHub";

/**
 * Static catch-all for every exact SEO path in locationPages + every town hub
 * page under /junk-removal-[town]-al. Any path not returned by
 * generateStaticParams 404s (dynamicParams=false).
 */
export const dynamicParams = false;
export const dynamic = "force-static";

export function generateStaticParams() {
  const legacy = locationPages.map((p) => ({ slug: p.path.slice(1) }));
  const towns = serviceAreas.map((a) => ({ slug: serviceAreaPath(a.slug).slice(1) }));
  return [...legacy, ...towns];
}

function findTown(slug: string) {
  return serviceAreas.find((a) => serviceAreaPath(a.slug) === `/${slug}`);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const town = findTown(slug);
  if (town) {
    const url = `${business.siteUrl}${serviceAreaPath(town.slug)}`;
    const title = `Junk Removal in ${town.name}, AL — ${business.name}`;
    const description = `Junk removal in ${town.name}, AL by J&F Haul and Deliver. Family + woman-owned, licensed & insured. Same-day when we can. Free upfront quotes. Call ${business.phone}.`;
    return {
      title,
      description,
      alternates: { canonical: url },
      openGraph: { title, description, url, type: "website", siteName: business.name },
      twitter: { card: "summary_large_image", title, description },
    };
  }

  const page = locationPages.find((p) => p.path === `/${slug}`);
  if (!page) return {};
  const service = serviceBySlug(page.service);
  const title = `${service?.name ?? page.title} in ${page.city}, AL`;
  const description = `${service?.name ?? "Junk removal"} in ${page.city}, AL by J&F Haul and Deliver. Family + woman-owned. Same-day service, licensed & insured, free upfront quotes. Call ${business.phone}.`;
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

  const town = findTown(slug);
  if (town) return <TownHub area={town} />;

  const page = locationPages.find((p) => p.path === `/${slug}`);
  if (!page) notFound();
  return <LocationLanding page={page} />;
}
