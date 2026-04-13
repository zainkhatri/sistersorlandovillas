export interface Property {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  location: string;
  resort: string;
  bedrooms: number;
  bathrooms: number;
  guests: number;
  sqft: number | null;
  pricePerNight: string;
  heroImage: string;
  images: string[];
  amenities: string[];
  highlights: string[];
  nearDisney: string;
  contact: {
    phone: string;
    email: string;
  };
}

const BREEZ_CDN = "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/A1a594pqkwhDOMJM";
const BREEZ_MED = "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,fit=crop/A1a594pqkwhDOMJM";
const BW = "https://www.brightwatervilla.co.uk";

const SOLTERRA_LOCAL = [
  "/images/solterra/01-BPT_0592And4more.jpg",
  "/images/solterra/02-BPT_0522And4more.jpg",
  "/images/solterra/03-BPT_0527And4more.jpg",
  "/images/solterra/04-BPT_0532And4more.jpg",
  "/images/solterra/05-BPT_0537And4more.jpg",
  "/images/solterra/06-BPT_0542And4more.jpg",
  "/images/solterra/07-BPT_0552And4more.jpg",
  "/images/solterra/08-BPT_0562And4more.jpg",
  "/images/solterra/09-BPT_0572And4more.jpg",
  "/images/solterra/10-BPT_0577And4more.jpg",
  "/images/solterra/11-BPT_0582And4more.jpg",
  "/images/solterra/12-BPT_0602And4more.jpg",
];

const CHAMPIONSGATE_LOCAL = [
  "/images/championsgate/IMG_8993.PNG",
  "/images/championsgate/IMG_8994.PNG",
  "/images/championsgate/IMG_8995.PNG",
  "/images/championsgate/IMG_8996.PNG",
  "/images/championsgate/IMG_8997.PNG",
  "/images/championsgate/IMG_8998.PNG",
  "/images/championsgate/IMG_8999.PNG",
  "/images/championsgate/IMG_9001.PNG",
  "/images/championsgate/IMG_9002.PNG",
  "/images/championsgate/IMG_9003.PNG",
  "/images/championsgate/IMG_9004.PNG",
  "/images/championsgate/IMG_9005.PNG",
];

export const properties: Property[] = [
  {
    slug: "solterra-beach-villa",
    name: "Solterra Beach Villa",
    tagline: "Coastal Paradise Near Disney",
    description:
      "A stunning 6-bedroom, 5-bathroom coastal-themed villa with 3,300 sq ft of designer living space. Every room is thoughtfully decorated with a beach-inspired aesthetic. Enjoy your own private heated pool and spa, a fully equipped game room, and all the amenities of Solterra Resort.",
    location: "Davenport, FL 33837",
    resort: "Solterra Resort",
    bedrooms: 6,
    bathrooms: 5,
    guests: 12,
    sqft: 3300,
    pricePerNight: "From $199/night",
    heroImage: SOLTERRA_LOCAL[0],
    images: [...SOLTERRA_LOCAL],
    amenities: [
      "Private Heated Pool & Spa",
      "Game Room",
      "Fully Equipped Kitchen",
      "Free WiFi",
      "Smart Lock Entry",
      "Ring Alarm Security",
      "Free Parking",
      "Air Conditioning",
      "Baby Equipment Available",
      "Resort Pool & Lazy River",
      "Fitness Center",
      "Tennis & Volleyball Courts",
    ],
    highlights: [
      "3,300 sq ft of luxury living space",
      "Coastal-themed designer decor",
      "South-facing private pool with spa",
      "Walking distance to resort clubhouse",
    ],
    nearDisney: "20 minutes from Walt Disney World",
    contact: {
      phone: "+1-863-862-5558",
      email: "devon@luxurysolterravillas.com",
    },
  },
  {
    slug: "disney-dream-villa",
    name: "Disney Dream Villa",
    tagline: "The Ultimate Disney Family Escape",
    description:
      "A magical 5-bedroom, 5-bathroom luxury retreat designed for the ultimate Disney family vacation. Features a private theater room, game loft, heated pool with spa, and themed bedrooms that kids will love. Every detail is curated for an unforgettable stay.",
    location: "Davenport, FL 33837",
    resort: "Solterra Resort",
    bedrooms: 5,
    bathrooms: 5,
    guests: 12,
    sqft: null,
    pricePerNight: "From $199/night",
    heroImage: CHAMPIONSGATE_LOCAL[0],
    images: [...CHAMPIONSGATE_LOCAL],
    amenities: [
      "Private Heated Pool & Spa",
      "Home Theater Room",
      "Game Room & Loft",
      "Fully Equipped Kitchen",
      "Free WiFi",
      "Smart Lock Entry",
      "Ring Alarm Security",
      "Free Parking",
      "Air Conditioning",
      "Baby Equipment Available",
      "Resort Pool & Lazy River",
      "Fitness Center",
    ],
    highlights: [
      "Dedicated home theater room",
      "Themed bedrooms kids will love",
      "Game loft with arcade games",
      "Resort-style pool with spa",
    ],
    nearDisney: "20 minutes from Walt Disney World",
    contact: {
      phone: "+1-863-862-5558",
      email: "devon@luxurysolterravillas.com",
    },
  },
  {
    slug: "breez-villa",
    name: "Breez Villa",
    tagline: "Superhost Family Villa with Lazy River",
    description:
      "A spacious 5-bedroom family villa ranked among Airbnb's top 5% guest-favorite homes. Features a private heated pool, themed bedrooms, a full game room, and access to Solterra Resort's lazy river, waterslide, and clubhouse amenities. Perfect for families visiting Disney.",
    location: "Davenport, FL 33837",
    resort: "Solterra Resort",
    bedrooms: 5,
    bathrooms: 4,
    guests: 10,
    sqft: null,
    pricePerNight: "From $179/night",
    heroImage: `${BREEZ_CDN}/pool_sunset_2-3-m7VbD66bP0iMzRoM.jpg`,
    images: [
      `${BREEZ_MED}/livingroom_5-2-YBgbjRV3zpTV8670.jpg`,
      `${BREEZ_MED}/kitchen_1-m7VbDRjlbBhQy9B4.jpg`,
      `${BREEZ_MED}/dining_2-Aq2JG4QM4eTbkWJr.jpg`,
      `${BREEZ_MED}/sunshine_masterbr_5-mjEGNGv0GJu2RQqW.jpg`,
      `${BREEZ_MED}/fleur-_de_sel_suite_kingbed_1-mk3J6Jz0k5c9nRz1.jpg`,
      `${BREEZ_MED}/mojito_bedroom_1-m2WEqRbMWRcqJoaL.jpg`,
      `${BREEZ_MED}/mickey_br_1-mjEGNGv0DKU3rRBw.jpg`,
      `${BREEZ_MED}/minion_br_1-A85VMR6jBEHVBkN2.jpg`,
      `${BREEZ_MED}/gameroom_2-dJobPRop19iQOQ6p.jpg`,
      `${BREEZ_MED}/pool_5-A0xjOjwovESRjP7D.jpg`,
      `${BREEZ_MED}/patio_loungers_3-mxBXOXZEeztj5nP5.jpg`,
      `${BREEZ_MED}/exterior-A0xjvR42yoHXPPO7.jpg`,
    ],
    amenities: [
      "Private Heated Pool",
      "5 Themed Bedrooms",
      "Game Room with Pool Table & Arcade",
      "Fully Equipped Kitchen",
      "BBQ Grill",
      "Free WiFi",
      "Outdoor Lounging Area",
      "Resort Lazy River & Waterslide",
      "Resort Cafe & Tiki Bar",
      "Fitness Center",
      "Tennis & Pickleball Courts",
      "Kids' Play Area",
    ],
    highlights: [
      "Airbnb Superhost - Top 5%",
      "5 uniquely themed bedrooms",
      "Resort lazy river & waterslide access",
      "South-west facing heated pool",
    ],
    nearDisney: "15-20 minutes from Walt Disney World",
    contact: {
      phone: "+1 (407) 801-8850",
      email: "reservations@breezvillas.com",
    },
  },
  {
    slug: "brightwater-villa",
    name: "Brightwater Villa",
    tagline: "Lakeside Oasis Near Disney",
    description:
      "A beautiful 5-bedroom lakeside villa in the gated Lake Berkley Resort. Features an extra-large private pool deck overlooking the lake, a separate hot tub, and a game room with a Brunswick slate pool table. Under 8 miles to Disney Parks, this is the perfect blend of tranquility and convenience.",
    location: "Kissimmee, FL",
    resort: "Lake Berkley Resort",
    bedrooms: 5,
    bathrooms: 3,
    guests: 11,
    sqft: null,
    pricePerNight: "From $249/night",
    heroImage: `${BW}/photos/Pool%20dusk780_l.jpg`,
    images: [
      `${BW}/photos/Rear%20lake780_l.jpg`,
      `${BW}/photos/Pool1780_l.jpg`,
      `${BW}/photos/Hottub780_l.jpg`,
      `${BW}/photos/DSC05166%20lounge%201200.jpg`,
      `${BW}/photos/Kitchen700_l.jpg`,
      `${BW}/photos/Nook780_l.jpg`,
      `${BW}/photos/bed%201_l.jpg`,
      `${BW}/photos/bed%202_l.jpg`,
      `${BW}/photos/bed3fan_l.jpg`,
      `${BW}/photos/Game780_l.jpg`,
      `${BW}/photos/Rear%20garden780_l.jpg`,
      `${BW}/gallery/sunset_l.jpg`,
    ],
    amenities: [
      "Extra-Large Private Pool",
      "Separate Hot Tub",
      "Lakeside Views",
      "Game Room (Pool Table, Air Hockey, Foosball)",
      "55\" 4K TV with 300+ Channels",
      "Fully Equipped Kitchen",
      "Free WiFi & International Calls",
      "Gated 24-Hour Guarded Community",
      "Community Pool & Splash Pool",
      "Tennis, Volleyball & Basketball",
      "Sandy Beach on Spring-Fed Lake",
      "Baby Equipment Available",
    ],
    highlights: [
      "Lakeside setting with stunning sunsets",
      "Extra-large pool deck - not overlooked",
      "Under 8 miles to Disney Parks",
      "Gated, manned community",
    ],
    nearDisney: "Under 8 miles to Disney Parks",
    contact: {
      phone: "+44 (0)1992 711197",
      email: "BrightwaterVilla@gmail.com",
    },
  },
];

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}
