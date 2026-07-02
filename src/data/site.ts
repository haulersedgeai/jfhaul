export type Service = {
  slug: string;
  name: string;
  blurb: string;
  icon: string;
};

export type LocationPage = {
  /** exact URL path — MUST NOT be changed (SEO). */
  path: string;
  service: string;
  city: string;
  citySlug: string;
  title: string;
};

export type FAQ = { q: string; a: string };
export type Step = { title: string; body: string };

export const business = {
  legalName: "J&F Haul and Deliver LLC",
  name: "J&F Haul and Deliver",
  shortName: "J&F Haul",
  tagline: "Same-day junk removal in Birmingham, AL",
  owners: "Jacorie & Felicia",
  founded: "family-owned, woman-owned",
  phone: "205-624-0731",
  phoneDigits: "2056240731",
  telHref: "tel:2056240731",
  smsHref: "sms:2056240731",
  email: "jnf@jfhaul.com",
  emailHref: "mailto:jnf@jfhaul.com",
  hours: "Mon–Sat, 7am–6pm",
  hoursShort: "Mon–Sat 7a–6p",
  hoursStructured: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "07:00", closes: "18:00" },
  ],
  addressCity: "Birmingham",
  addressState: "AL",
  addressCountry: "US",
  geo: { lat: 33.5186, lng: -86.8104 },
  siteUrl: "https://www.jfhaul.com",
} as const;

export const trustPoints = [
  "Licensed & insured",
  "Family + woman-owned",
  "Free upfront quotes",
  "Same-day service",
  "Eco-friendly disposal",
  "Locally owned — not a franchise",
] as const;

export const socials = {
  facebook: "https://www.facebook.com/profile.php?id=61559172516284",
  instagram: "https://www.instagram.com/jf_hauljunk/",
  youtube: "https://www.youtube.com/@jnfjunkremoval",
  tiktok: "https://www.tiktok.com/@jnfjunkremoval",
  googleSearch: "https://www.google.com/search?q=J%26F+Junk+removal",
} as const;

export const cities = [
  { slug: "birmingham", name: "Birmingham", state: "AL" },
  { slug: "trussville", name: "Trussville", state: "AL" },
  { slug: "hoover", name: "Hoover", state: "AL" },
  { slug: "vestavia-hills", name: "Vestavia Hills", state: "AL" },
] as const;

export const services: Service[] = [
  { slug: "junk-removal", name: "Junk Removal", blurb: "Big or small, we clear away unwanted items quickly and safely.", icon: "/images/icon-junk-removal.png" },
  { slug: "furniture-removal", name: "Furniture Removal", blurb: "Old couches, recliners, dressers — out the door they go.", icon: "/images/icon-furniture-removal.png" },
  { slug: "mattress-removal", name: "Mattress Removal", blurb: "Say goodbye to that lumpy mattress without straining your back.", icon: "/images/icon-mattress-removal.png" },
  { slug: "appliance-removal", name: "Appliance Removal", blurb: "Fridges, washers, dryers — hauled away and disposed of responsibly.", icon: "/images/icon-furniture-removal.png" },
  { slug: "hot-tub-removal", name: "Hot Tub Removal", blurb: "We safely dismantle and haul away hot tubs of any size.", icon: "/images/icon-hot-tub-removal.png" },
  { slug: "shed-removal", name: "Shed Removal", blurb: "We tear down and remove old sheds, start to finish.", icon: "/images/icon-house-cleanouts.png" },
  { slug: "property-cleanouts", name: "Property Cleanouts", blurb: "For landlords, property managers, and realtors prepping for the next tenant.", icon: "/images/icon-property-cleanouts.png" },
  { slug: "house-cleanouts", name: "House Cleanouts", blurb: "Moving, downsizing, or just need a fresh start? We'll clear it all.", icon: "/images/icon-house-cleanouts.png" },
  { slug: "garage-cleanouts", name: "Garage Cleanouts", blurb: "Reclaim your parking space or workshop area.", icon: "/images/icon-garage-cleanouts.png" },
  { slug: "estate-cleanouts", name: "Estate Cleanouts", blurb: "We handle sensitive situations with care and respect.", icon: "/images/icon-estate-cleanouts.png" },
  { slug: "hoarder-cleanouts", name: "Hoarder Cleanouts", blurb: "Compassionate and discreet service to help restore livable spaces.", icon: "/images/icon-hoarder-cleanouts.png" },
  { slug: "eviction-cleanouts", name: "Eviction Cleanouts", blurb: "Fast, thorough turnovers so you can re-list the unit.", icon: "/images/icon-property-cleanouts.png" },
  { slug: "apartment-cleanouts", name: "Apartment Cleanouts", blurb: "Complete unit clear-outs for tenants and managers.", icon: "/images/icon-house-cleanouts.png" },
  { slug: "office-cleanouts", name: "Office Cleanouts", blurb: "Clear out furniture, equipment, and clutter with minimal disruption.", icon: "/images/icon-property-cleanouts.png" },
  { slug: "valet-trash", name: "Valet Trash", blurb: "Doorstep valet trash service for apartment complexes.", icon: "/images/icon-valet-trash.png" },
];

export const howItWorks: Step[] = [
  { title: "You contact us", body: "Call, text, or book online — whichever's easiest." },
  { title: "Free upfront quote", body: "No hidden fees. You'll know the price before we start." },
  { title: "We show up on time", body: "On-time arrival, professional crew, ready to work." },
  { title: "We do the heavy lifting", body: "Your only job is pointing. We handle the rest." },
  { title: "We haul it away", body: "Donate, recycle, or dispose responsibly — always." },
  { title: "You enjoy your clean space", body: "Cleared out, swept up, and ready to enjoy." },
];

export const faqs: FAQ[] = [
  {
    q: "How much does junk removal cost in Birmingham, AL?",
    a: "Pricing depends on how much space your items take up in our truck. We'll always give you a clear, upfront price before we start.",
  },
  {
    q: "Do I need to move my junk to the curb?",
    a: "Nope! Our team handles all the lifting and loading.",
  },
  {
    q: "What items can you take?",
    a: "Almost anything: furniture, appliances, mattresses, electronics, yard waste. The only things we can't take are hazardous materials.",
  },
  {
    q: "Can you do same-day service?",
    a: "Yes! When our schedule allows, we can often be there the same day you call.",
  },
  {
    q: "Do you recycle or donate items?",
    a: "Absolutely. We work with local charities and recycling centers to keep as much out of the landfill as possible.",
  },
  {
    q: "How do I book a pickup?",
    a: "Easy! Just call, text, or fill out our online form.",
  },
];

/**
 * EXACT existing URLs — recreate character-for-character.
 * DO NOT change any path here; SEO history depends on them.
 */
export const locationPages: LocationPage[] = [
  { path: "/junk-removal-birmingham-al", service: "junk-removal", city: "Birmingham", citySlug: "birmingham", title: "Junk Removal in Birmingham, AL" },
  { path: "/furniture-removal-birmingham--al", service: "furniture-removal", city: "Birmingham", citySlug: "birmingham", title: "Furniture Removal in Birmingham, AL" },
  { path: "/appliance-removal-birmingham--al", service: "appliance-removal", city: "Birmingham", citySlug: "birmingham", title: "Appliance Removal in Birmingham, AL" },
  { path: "/hot-tub-removal-birmingham--al", service: "hot-tub-removal", city: "Birmingham", citySlug: "birmingham", title: "Hot Tub Removal in Birmingham, AL" },
  { path: "/shed-removal-birmingham--al", service: "shed-removal", city: "Birmingham", citySlug: "birmingham", title: "Shed Removal in Birmingham, AL" },
  { path: "/garage-cleanouts-birmingham--al", service: "garage-cleanouts", city: "Birmingham", citySlug: "birmingham", title: "Garage Cleanouts in Birmingham, AL" },
  { path: "/hoarder-cleanouts-birmingham--al", service: "hoarder-cleanouts", city: "Birmingham", citySlug: "birmingham", title: "Hoarder Cleanouts in Birmingham, AL" },
  { path: "/eviction-cleanouts-birmingham--al", service: "eviction-cleanouts", city: "Birmingham", citySlug: "birmingham", title: "Eviction Cleanouts in Birmingham, AL" },
  { path: "/estate-cleanouts-birmingham-al", service: "estate-cleanouts", city: "Birmingham", citySlug: "birmingham", title: "Estate Cleanouts in Birmingham, AL" },
  { path: "/apartment-cleanouts-birmingham--al", service: "apartment-cleanouts", city: "Birmingham", citySlug: "birmingham", title: "Apartment Cleanouts in Birmingham, AL" },
  { path: "/office-cleanout-birmingham-al", service: "office-cleanouts", city: "Birmingham", citySlug: "birmingham", title: "Office Cleanouts in Birmingham, AL" },

  { path: "/estate-cleanouts-in-trussville-al", service: "estate-cleanouts", city: "Trussville", citySlug: "trussville", title: "Estate Cleanouts in Trussville, AL" },
  { path: "/junk-removal-in-trussville-al", service: "junk-removal", city: "Trussville", citySlug: "trussville", title: "Junk Removal in Trussville, AL" },

  { path: "/hot-tub-removal", service: "hot-tub-removal", city: "Birmingham", citySlug: "birmingham", title: "Hot Tub Removal" },

  { path: "/junk-removal-in-hoover-al", service: "junk-removal", city: "Hoover", citySlug: "hoover", title: "Junk Removal in Hoover, AL" },
  { path: "/estate-cleanouts-in-hoover-al", service: "estate-cleanouts", city: "Hoover", citySlug: "hoover", title: "Estate Cleanouts in Hoover, AL" },
  { path: "/office-cleanout-Hoover-AL", service: "office-cleanouts", city: "Hoover", citySlug: "hoover", title: "Office Cleanouts in Hoover, AL" },
  { path: "/eviction-cleanouts-hoover-al", service: "eviction-cleanouts", city: "Hoover", citySlug: "hoover", title: "Eviction Cleanouts in Hoover, AL" },

  { path: "/eviction-cleanouts-vestavia-hills-al", service: "eviction-cleanouts", city: "Vestavia Hills", citySlug: "vestavia-hills", title: "Eviction Cleanouts in Vestavia Hills, AL" },
  { path: "/junk-removal-vestavia-hills-al", service: "junk-removal", city: "Vestavia Hills", citySlug: "vestavia-hills", title: "Junk Removal in Vestavia Hills, AL" },
  { path: "/estate-cleanouts-Vestavia-Hills-AL", service: "estate-cleanouts", city: "Vestavia Hills", citySlug: "vestavia-hills", title: "Estate Cleanouts in Vestavia Hills, AL" },
];

export function serviceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

/** Lowercase singular form of the service name, used in sentences. */
const singularOverrides: Record<string, string> = {
  "junk-removal": "junk removal",
  "furniture-removal": "furniture removal",
  "mattress-removal": "mattress removal",
  "appliance-removal": "appliance removal",
  "hot-tub-removal": "hot tub removal",
  "shed-removal": "shed removal",
  "property-cleanouts": "property cleanout",
  "house-cleanouts": "house cleanout",
  "garage-cleanouts": "garage cleanout",
  "estate-cleanouts": "estate cleanout",
  "hoarder-cleanouts": "hoarder cleanout",
  "eviction-cleanouts": "eviction cleanout",
  "apartment-cleanouts": "apartment cleanout",
  "office-cleanouts": "office cleanout",
  "valet-trash": "valet trash",
};

/** True when the service is a countable event (a/an X). False = mass noun. */
const countableSlugs = new Set([
  "property-cleanouts",
  "house-cleanouts",
  "garage-cleanouts",
  "estate-cleanouts",
  "hoarder-cleanouts",
  "eviction-cleanouts",
  "apartment-cleanouts",
  "office-cleanouts",
]);

export function serviceSingularName(slug: string): string {
  return singularOverrides[slug] ?? slug.replace(/-/g, " ");
}

export function articleFor(phrase: string): "a" | "an" {
  const first = phrase.trim().split(/\s+/)[0]?.toLowerCase() ?? "";
  return /^[aeiou]/.test(first) ? "an" : "a";
}

/** Sentence-safe service reference — "an office cleanout" or "junk removal". */
export function serviceInSentence(slug: string): string {
  const name = serviceSingularName(slug);
  if (!countableSlugs.has(slug)) return name;
  return `${articleFor(name)} ${name}`;
}

/** Returns the primary Birmingham landing page for a service, or /contact. */
export function birminghamPathForService(slug: string): string {
  return (
    locationPages.find((p) => p.service === slug && p.citySlug === "birmingham")?.path ??
    "/contact"
  );
}

/** Returns the primary landing page for a city (first in list). */
export function primaryPathForCity(citySlug: string): string {
  return locationPages.find((p) => p.citySlug === citySlug)?.path ?? "/contact";
}
