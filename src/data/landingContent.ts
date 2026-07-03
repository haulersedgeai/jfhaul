import { serviceInSentence, serviceSingularName, type LocationPage } from "./site";

const cityFlavor: Record<string, {
  intro: string;
  neighborhoods: string;
  local: string;
}> = {
  birmingham: {
    intro:
      "Birmingham is home base for J&F, and it's where we've built our reputation one clean-out at a time. From Southside apartments to family homes in Crestwood, Roebuck, and Forest Park, we know these driveways, alleys, and stairwells like they're our own.",
    neighborhoods:
      "We serve every corner of Birmingham — Avondale, Highland Park, Southside, Woodlawn, Ensley, Crestwood, Forest Park, East Lake, Norwood, Roebuck, and beyond.",
    local:
      "Because we live and work in Birmingham, we can usually be on your street within a few hours. We schedule around Magic City traffic and know which side streets to avoid at rush hour.",
  },
  trussville: {
    intro:
      "Trussville is a place we love working — big lots, big projects, and neighbors who look out for each other. Whether you're near Cahaba Elementary or off Chalkville Mountain Road, we bring the truck, the crew, and the muscle.",
    neighborhoods:
      "We cover all of Trussville — Cahaba Project, Stockton, Cahaba River, Deerfoot Parkway, and out along Chalkville Mountain Road.",
    local:
      "Trussville homes often mean larger properties and bigger loads. We come prepared with the right trailer and enough hands to knock it out in a single trip.",
  },
  hoover: {
    intro:
      "Hoover neighborhoods take pride in how their properties look, and we take that seriously. From Ross Bridge townhomes to family homes off Highway 150 and the Riverchase and Bluff Park areas, we work clean, quick, and quiet.",
    neighborhoods:
      "We serve every part of Hoover — Ross Bridge, Riverchase, Greystone, Bluff Park, Trace Crossings, Inverness, and the Highway 150 / 280 corridors.",
    local:
      "HOA-conscious? We are too. Our trucks are tidy, we don't leave a mess in the street, and we make sure the driveway looks as good as it did before we arrived — or better.",
  },
  "vestavia-hills": {
    intro:
      "Vestavia Hills homes deserve careful, respectful hands. Whether you're near Vestavia Country Club, off Rocky Ridge, or in Cahaba Heights, we treat every load like it's coming out of our own family's house.",
    neighborhoods:
      "We cover all of Vestavia Hills — Cahaba Heights, Liberty Park, Rocky Ridge, Altadena Valley, and the neighborhoods around US-31 and I-459.",
    local:
      "Tight driveways, mature trees, and pretty landscaping — we know the drill. We protect your floors, your grass, and your gate on the way in and out.",
  },
};

const serviceCopy: Record<string, {
  h2: string;
  what: string[];
  who: string;
  hook: string;
}> = {
  "junk-removal": {
    h2: "Junk removal for homes, apartments, and yards",
    what: [
      "General household junk, boxes, and bags",
      "Old furniture, mattresses, and appliances",
      "Yard waste, wood, and construction debris",
      "Electronics, e-waste, and metal (recycled locally)",
    ],
    who: "Homeowners, renters, landlords, and property managers rely on us for fast, clean pickups. If it's not hazardous, we probably take it.",
    hook: "You point at it. We load it. It's gone.",
  },
  "furniture-removal": {
    h2: "Old couches, chairs, dressers — gone the same day",
    what: [
      "Sectionals and sleeper sofas (yes, even the awkward ones)",
      "Dressers, armoires, and heavy hardwood pieces",
      "Recliners, office chairs, and dining sets",
      "Broken IKEA furniture that's not worth reassembling",
    ],
    who: "If you're moving, staging, or upgrading, we make room fast — including hauling from second-floor apartments, tight stairwells, and packed garages.",
    hook: "No dolly? No problem. We bring the muscle and the moving blankets.",
  },
  "mattress-removal": {
    h2: "Say goodbye to that lumpy mattress",
    what: [
      "Single, twin, full, queen, king — any size",
      "Box springs and bed frames",
      "Bunk beds and platform beds (broken down for you)",
      "Airbeds, memory foam, and stained mattresses",
    ],
    who: "Mattresses are awkward, heavy, and hard to dispose of legally. That's exactly why we exist. We recycle where possible and dispose responsibly where not.",
    hook: "No hauling it down the stairs, no strapping it to your car. Just gone.",
  },
  "appliance-removal": {
    h2: "Fridges, washers, dryers — hauled and recycled",
    what: [
      "Refrigerators and freezers (properly drained and recycled)",
      "Washers, dryers, dishwashers, and stoves",
      "Water heaters and old HVAC units",
      "Small appliances, microwaves, and window ACs",
    ],
    who: "Contractors installing new units, homeowners upgrading, and property managers turning apartments all use J&F for fast appliance pickup.",
    hook: "Old fridge in the garage for two years? Today's the day.",
  },
  "hot-tub-removal": {
    h2: "Hot tub removal & dismantling",
    what: [
      "Full-size hot tubs, spas, and swim spas",
      "In-ground and above-ground models",
      "Broken, leaking, or years-abandoned units",
      "Deck-integrated tubs (we handle disassembly)",
    ],
    who: "Hot tubs are the classic 'nobody will take it' item. We dismantle on-site, cut down when needed, and haul away in one visit.",
    hook: "Bring the crew. Bring the saws. Bring it out through the gate.",
  },
  "shed-removal": {
    h2: "Old shed teardown & haul-away",
    what: [
      "Wood, metal, and vinyl storage sheds",
      "Tuff Sheds, Rubbermaids, and DIY builds",
      "Storm-damaged or rotting sheds",
      "Everything inside — tools, junk, and cobwebs included",
    ],
    who: "Selling your home? Redoing the backyard? Insurance says the shed has to go? We dismantle, load, and leave the pad clean.",
    hook: "Start to finish, in one trip.",
  },
  "property-cleanouts": {
    h2: "Full-property clean-outs for landlords & realtors",
    what: [
      "Rental turnovers between tenants",
      "Foreclosures and REO properties",
      "Realtor prep for listings and open houses",
      "HOA-compliance and code-enforcement clean-outs",
    ],
    who: "We work directly with property managers, agents, and asset managers. Send us the address and a lockbox code — we'll photo the finish.",
    hook: "Empty, swept, and photo-ready when we leave.",
  },
  "house-cleanouts": {
    h2: "Whole-house clear-outs, done gently",
    what: [
      "Downsizing to a smaller home",
      "Moving out of state or into assisted living",
      "Divorce, separation, or blended-family moves",
      "Post-renovation debris and packed garages",
    ],
    who: "You point out what stays. Everything else — furniture, boxes, closets, attic — we handle. We donate what we can and dispose of the rest responsibly.",
    hook: "One truck. One crew. One clear house.",
  },
  "garage-cleanouts": {
    h2: "Reclaim your garage in an afternoon",
    what: [
      "Broken tools, old bikes, and dead lawn equipment",
      "Paint cans, cardboard, and mystery boxes",
      "Sports gear, holiday decor, and unused furniture",
      "That workbench that's now just a shelf for junk",
    ],
    who: "If you can't park in your garage, we can help. We'll sort what's worth donating and haul the rest — in a couple of hours, not a couple of Saturdays.",
    hook: "Park your car in your own garage again.",
  },
  "estate-cleanouts": {
    h2: "Estate clean-outs with care and respect",
    what: [
      "Homes of loved ones who've passed",
      "Downsizing after long-term illness or moves",
      "Coordinating with executors and family from out of town",
      "Donation, recycling, and disposal handled thoughtfully",
    ],
    who: "This work matters. We're careful with keepsakes, patient with families, and clear on communication with executors and out-of-state relatives.",
    hook: "A calm, respectful presence during a hard week.",
  },
  "hoarder-cleanouts": {
    h2: "Compassionate hoarder clean-outs",
    what: [
      "Full-home decluttering, top to bottom",
      "Discreet, judgment-free service",
      "Coordination with family, social workers, or landlords",
      "Deep-cleaning-ready spaces when we finish",
    ],
    who: "Hoarder situations are sensitive. We work at a humane pace, protect dignity, and leave the home safe, walkable, and ready for the next step.",
    hook: "No lectures. No shame. Just a clean space to breathe.",
  },
  "eviction-cleanouts": {
    h2: "Fast eviction clean-outs so you can re-list",
    what: [
      "Full unit clear-outs after tenant departure",
      "Trash, furniture, appliances, and abandoned belongings",
      "Coordination with property managers and locksmiths",
      "Documentation photos before and after",
    ],
    who: "Landlords and property managers need turnover to be days, not weeks. We're the same crew every time, and we don't need supervision.",
    hook: "Empty, clean, and re-list-ready — sometimes the same day.",
  },
  "apartment-cleanouts": {
    h2: "Apartment clear-outs for tenants & managers",
    what: [
      "Move-out clear-outs for departing tenants",
      "Turn-overs for complex owners and managers",
      "Second- and third-floor units, walk-ups included",
      "Bulk pickups too big for the dumpster",
    ],
    who: "We handle upstairs units, tight elevators, and no-parking loading zones without complaint. Tell us the address and access details — we'll do the rest.",
    hook: "Stairs? Elevators? Loading docks? We come ready.",
  },
  "office-cleanouts": {
    h2: "Office & commercial clean-outs",
    what: [
      "Cubicles, desks, and modular workstations",
      "Filing cabinets, copiers, and IT equipment",
      "Break room appliances and old signage",
      "Post-lease clean-outs with landlord photos",
    ],
    who: "We come after-hours or on weekends so your team keeps working. We recycle office paper, e-waste, and metal furniture wherever we can.",
    hook: "Come Monday, your suite is ready for the next chapter.",
  },
};

export function landingCopy(page: LocationPage) {
  const c = cityFlavor[page.citySlug] ?? cityFlavor.birmingham;
  const s = serviceCopy[page.service] ?? serviceCopy["junk-removal"];
  return { c, s };
}

export function landingFAQ(page: LocationPage) {
  const cityName = page.city;
  const singular = serviceSingularName(page.service);
  const inSentence = serviceInSentence(page.service);
  return [
    {
      q: `How much does ${inSentence} in ${cityName}, AL cost?`,
      a: `Our ${cityName} pricing depends on how much space your items take up in the truck. We give you a clear, upfront price before we start — no surprises.`,
    },
    {
      q: `Do you offer same-day ${singular} in ${cityName}, AL?`,
      a: `Yes. When we have space on the schedule, we can usually be in ${cityName} the same day you call. Call earlier in the day for the best odds.`,
    },
    {
      q: `Do I have to move anything to the curb first?`,
      a: `Nope. Our team handles all the lifting, loading, and hauling. You just show us what needs to go.`,
    },
    {
      q: `What do you do with the items you haul away?`,
      a: `We donate what's donatable to local ${cityName}-area charities, recycle metal and electronics, and dispose of the rest responsibly. Very little ends up in a landfill.`,
    },
    {
      q: `Are you licensed and insured in ${cityName}, AL?`,
      a: `Yes — J&F Haul and Deliver LLC is fully licensed and insured to work in Alabama, including ${cityName} and the surrounding cities.`,
    },
  ];
}
