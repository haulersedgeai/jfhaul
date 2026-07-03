export type ReviewSource = "Google" | "Facebook" | "Networx";
export type ReviewCategory =
  | "Junk Removal"
  | "Cleanouts"
  | "Furniture & Appliances"
  | "Hot Tub"
  | "Demolition & Sheds";

export type Review = {
  name: string;
  source: ReviewSource;
  city?: string;
  category: ReviewCategory;
  text: string;
};

export const reviewStats = {
  rating: 5.0,
  count: 255,
  source: "Google" as const,
  url: "https://share.google/nqcibJQzOrCUiFtAX",
};

export const reviewCategories: ReviewCategory[] = [
  "Junk Removal",
  "Cleanouts",
  "Furniture & Appliances",
  "Hot Tub",
  "Demolition & Sheds",
];

/**
 * Curated set of real customer reviews from Google, Facebook, and Networx.
 * This is the filterable set surfaced on /reviews and sprinkled around the site.
 * Full count on Google is `reviewStats.count`. Add more here as they come in.
 */
export const reviews: Review[] = [
  {
    name: "MeMe Marcia",
    source: "Google",
    category: "Junk Removal",
    text: "Huge thanks to J&F! Personable, professional and punctual. They did a big job and executed with ease. Highly recommend.",
  },
  {
    name: "Sherryl Black",
    source: "Google",
    city: "Trussville",
    category: "Junk Removal",
    text: "Professional, attentive, and quick. I appreciated their patience with my landscape — a HUGE hill! Will definitely return and recommend.",
  },
  {
    name: "Johnnie Whitley",
    source: "Google",
    city: "Trussville",
    category: "Junk Removal",
    text: "Awesome service from Jacorie, Felicia and Thomas. Got a quote and had my items removed the same day. Recommend this team to anyone!",
  },
  {
    name: "Christy Clark",
    source: "Google",
    category: "Junk Removal",
    text: "Called and got same-day service on a Saturday. Very quick and personable. Couldn't have asked for better service and communication.",
  },
  {
    name: "Reggie Holder",
    source: "Google",
    category: "Junk Removal",
    text: "Responded quickly, estimate came in below the competition, and they completed the task fast. Highly recommend.",
  },
  {
    name: "Alexis Davis",
    source: "Google",
    category: "Junk Removal",
    text: "Felicia, Jacorie, and Thomas were an amazing team. In and out quickly with great customer service — and cheaper than I expected.",
  },
  {
    name: "Amber Gardner",
    source: "Google",
    category: "Junk Removal",
    text: "More than a business, this is a ministry. They serviced my home the same day. Caring, considerate, kind, on time, and respectful.",
  },
  {
    name: "Pete Taylor",
    source: "Google",
    city: "Hoover",
    category: "Cleanouts",
    text: "Outstanding from start to finish. Professional, on time, extremely efficient — great attention to detail and respect for my space.",
  },
  {
    name: "Katrina Sharpe",
    source: "Google",
    category: "Cleanouts",
    text: "Five-star service — if I could give six I would. Efficient, communicative, and highly professional.",
  },
  {
    name: "Samantha Redman",
    source: "Google",
    category: "Furniture & Appliances",
    text: "Thomas got all our junk while being careful of the walls and pictures, and was so kind to my little boy. Highly recommend.",
  },
  {
    name: "Michael Jones",
    source: "Google",
    city: "Birmingham",
    category: "Demolition & Sheds",
    text: "These guys did a phenomenal job demolishing and carrying away unwanted items in a very short time.",
  },
  {
    name: "Stott Noble",
    source: "Google",
    city: "Vestavia Hills",
    category: "Hot Tub",
    text: "Showed up on time for both the estimate and the job. Professional and friendly. Estimate was solid — no surprises.",
  },
  {
    name: "Vickie Allen",
    source: "Google",
    city: "Hoover",
    category: "Cleanouts",
    text: "Quick estimate and showed up on time. Very reasonable pricing for everything they took away. Highly recommended!",
  },
  {
    name: "Rebecca Landers",
    source: "Google",
    category: "Furniture & Appliances",
    text: "They worked hard to get the washer and dryer out of a tight spot. I highly recommend them.",
  },
  {
    name: "Onofrio Virciglio",
    source: "Google",
    category: "Junk Removal",
    text: "Thanks for the expedited service. That old piano was so heavy — it was a pleasure having them haul it away.",
  },
  {
    name: "Dova Keen Tai",
    source: "Facebook",
    category: "Junk Removal",
    text: "Excellent and professional company!",
  },
  {
    name: "Lisa McKinney",
    source: "Facebook",
    category: "Junk Removal",
    text: "They took care of everything I needed removed. I will be calling them again. Keep up the good work.",
  },
  {
    name: "Brandy Strickland",
    source: "Facebook",
    category: "Junk Removal",
    text: "Amazing and fast — prompt, made sure I was satisfied, and loaded and cleaned up in 30–45 minutes. In this heat, amazing!",
  },
  {
    name: "Adrienne Acklin",
    source: "Facebook",
    category: "Junk Removal",
    text: "Efficient, fast, reliable and very reasonably priced. We will definitely be using them again!",
  },
  {
    name: "Kayla Shorter",
    source: "Facebook",
    category: "Junk Removal",
    text: "They REALLY helped me out — quick and easy for the customer. Great experience! 10/10 would recommend.",
  },
  {
    name: "Denise",
    source: "Networx",
    city: "Bessemer",
    category: "Hot Tub",
    text: "On time and did an excellent job removing the hot tub and cleaning everything up. So glad to get it off my deck. Will use them again.",
  },
  {
    name: "Myra",
    source: "Networx",
    city: "Birmingham",
    category: "Cleanouts",
    text: "Excellent customer service and thorough communication throughout. Completed my apartment cleanout in a timely manner.",
  },
  {
    name: "Gregory",
    source: "Networx",
    city: "Birmingham",
    category: "Cleanouts",
    text: "Very fast to answer the call and get the job done on one of my hoarder apartments. Excellent!",
  },
  {
    name: "Mariah",
    source: "Networx",
    city: "Birmingham",
    category: "Cleanouts",
    text: "We had a tenant eviction and called with short notice — they did the job the next day. Kind and very fast.",
  },
  {
    name: "Mary",
    source: "Networx",
    city: "Birmingham",
    category: "Demolition & Sheds",
    text: "Did a great job removing a damaged storage building. Very nice to deal with. Showed up the day they said.",
  },
];

/** Map a service slug to the review category it belongs to. */
const serviceCategoryMap: Record<string, ReviewCategory> = {
  "junk-removal": "Junk Removal",
  "furniture-removal": "Furniture & Appliances",
  "mattress-removal": "Furniture & Appliances",
  "appliance-removal": "Furniture & Appliances",
  "hot-tub-removal": "Hot Tub",
  "shed-removal": "Demolition & Sheds",
  "property-cleanouts": "Cleanouts",
  "house-cleanouts": "Cleanouts",
  "garage-cleanouts": "Cleanouts",
  "estate-cleanouts": "Cleanouts",
  "hoarder-cleanouts": "Cleanouts",
  "eviction-cleanouts": "Cleanouts",
  "apartment-cleanouts": "Cleanouts",
  "office-cleanouts": "Cleanouts",
};

export function categoryForService(slug: string): ReviewCategory {
  return serviceCategoryMap[slug] ?? "Junk Removal";
}

/**
 * Pick 2 reviews best suited for a given city + service context.
 * Prefers city match, then category match, then falls back to top general reviews.
 */
export function pickReviewsFor({
  city,
  category,
  limit = 2,
}: {
  city?: string;
  category?: ReviewCategory;
  limit?: number;
}): Review[] {
  const chosen: Review[] = [];
  const push = (r: Review) => {
    if (chosen.find((c) => c.name === r.name && c.text === r.text)) return;
    chosen.push(r);
  };

  if (city && category) {
    reviews.filter((r) => r.city === city && r.category === category).forEach(push);
  }
  if (chosen.length < limit && city) {
    reviews.filter((r) => r.city === city).forEach(push);
  }
  if (chosen.length < limit && category) {
    reviews.filter((r) => r.category === category).forEach(push);
  }
  reviews.forEach(push);

  return chosen.slice(0, limit);
}

/** Top general reviews used on the homepage. */
export const featuredReviews: Review[] = [
  reviews[0], // MeMe Marcia
  reviews[6], // Amber Gardner
  reviews[8], // Katrina Sharpe
  reviews[2], // Johnnie Whitley
];
