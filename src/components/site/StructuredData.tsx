import { business, cities, faqs, serviceAreas, socials } from "@/data/site";
import { reviewStats } from "@/data/reviews";

/**
 * Organization / LocalBusiness JSON-LD injected in the root layout.
 * Rendered as a server component -> ships as static <script> in HTML.
 */
export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MovingCompany"],
    "@id": `${business.siteUrl}/#business`,
    name: business.legalName,
    alternateName: business.name,
    url: business.siteUrl,
    telephone: `+1-${business.phone}`,
    email: business.email,
    image: `${business.siteUrl}/images/logo.png`,
    logo: `${business.siteUrl}/images/logo.png`,
    priceRange: "$$",
    description:
      "Family + woman-owned junk removal serving Birmingham and nearby cities in Alabama. Licensed & insured. Same-day service.",
    address: {
      "@type": "PostalAddress",
      addressLocality: business.addressCity,
      addressRegion: business.addressState,
      addressCountry: business.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.lat,
      longitude: business.geo.lng,
    },
    areaServed: [
      ...cities.map((c) => ({ "@type": "City", name: `${c.name}, ${c.state}` })),
      ...serviceAreas.map((a) => ({ "@type": "City", name: `${a.name}, ${a.state}` })),
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: reviewStats.rating,
      reviewCount: reviewStats.count,
      bestRating: 5,
      worstRating: 1,
    },
    openingHoursSpecification: business.hoursStructured.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    sameAs: [socials.facebook, socials.instagram, socials.youtube, socials.tiktok],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FAQSchema({ items = faqs }: { items?: { q: string; a: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ServiceSchema({
  serviceName,
  areaServed,
  url,
  description,
}: {
  serviceName: string;
  areaServed: string;
  url: string;
  description: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: serviceName,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${business.siteUrl}/#business`,
      name: business.legalName,
      telephone: `+1-${business.phone}`,
    },
    areaServed: { "@type": "City", name: areaServed },
    url,
    description,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
