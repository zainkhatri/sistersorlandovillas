export interface Property {
  slug: string;
  name: string;
  description: string;
  location: string;
  resort: string;
  bedrooms: number;
  bathrooms: number;
  guests: number;
  sqft: number | null;
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

const SOLTERRA_IMAGES = [
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
  "/images/solterra/13-BPT_0350.jpg",
  "/images/solterra/14-BPT_0355.jpg",
  "/images/solterra/15-BPT_0360.jpg",
  "/images/solterra/16-BPT_0365.jpg",
  "/images/solterra/17-BPT_0370.jpg",
  "/images/solterra/18-BPT_0375.jpg",
  "/images/solterra/19-BPT_0380.jpg",
  "/images/solterra/20-BPT_0386.jpg",
  "/images/solterra/21-BPT_0391.jpg",
  "/images/solterra/22-BPT_0396.jpg",
  "/images/solterra/23-BPT_0401.jpg",
  "/images/solterra/24-BPT_0406.jpg",
  "/images/solterra/25-BPT_0411.jpg",
  "/images/solterra/26-BPT_0416.jpg",
  "/images/solterra/27-BPT_0421.jpg",
  "/images/solterra/28-BPT_0426.jpg",
  "/images/solterra/29-BPT_0431.jpg",
  "/images/solterra/30-BPT_0435.jpg",
  "/images/solterra/31-BPT_0440.jpg",
  "/images/solterra/32-BPT_0445.jpg",
  "/images/solterra/33-BPT_0456.jpg",
  "/images/solterra/34-BPT_0461.jpg",
  "/images/solterra/35-BPT_0466.jpg",
  "/images/solterra/36-BPT_0471.jpg",
  "/images/solterra/37-BPT_0476.jpg",
  "/images/solterra/38-BPT_0481.jpg",
  "/images/solterra/39-BPT_0486.jpg",
  "/images/solterra/40-BPT_0491.jpg",
  "/images/solterra/41-BPT_0496.jpg",
  "/images/solterra/42-BPT_0501.jpg",
  "/images/solterra/43-BPT_0506.jpg",
  "/images/solterra/44-BPT_0511.jpg",
  "/images/solterra/45-BPT_0516.jpg",
  "/images/solterra/46-BPT_0521.jpg",
] as const;

const CHAMPIONSGATE_IMAGES = [
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
  "/images/championsgate/IMG_9006.PNG",
  "/images/championsgate/IMG_9007.PNG",
  "/images/championsgate/IMG_9008.PNG",
  "/images/championsgate/IMG_9009.PNG",
  "/images/championsgate/IMG_9010.PNG",
  "/images/championsgate/IMG_9011.PNG",
  "/images/championsgate/IMG_9012.PNG",
  "/images/championsgate/IMG_9013.PNG",
  "/images/championsgate/IMG_9014.PNG",
  "/images/championsgate/IMG_9015.PNG",
  "/images/championsgate/IMG_9016.PNG",
  "/images/championsgate/IMG_9017.PNG",
  "/images/championsgate/IMG_9018.PNG",
  "/images/championsgate/IMG_9019.PNG",
  "/images/championsgate/IMG_9020.PNG",
  "/images/championsgate/IMG_9021.PNG",
  "/images/championsgate/IMG_9022.PNG",
  "/images/championsgate/IMG_9023.PNG",
  "/images/championsgate/IMG_9024.PNG",
  "/images/championsgate/IMG_9025.PNG",
  "/images/championsgate/IMG_9026.PNG",
  "/images/championsgate/IMG_9027.PNG",
  "/images/championsgate/IMG_9028.PNG",
  "/images/championsgate/IMG_9029.PNG",
  "/images/championsgate/IMG_9030.PNG",
  "/images/championsgate/IMG_9031.PNG",
  "/images/championsgate/IMG_9032.PNG",
  "/images/championsgate/IMG_9033.PNG",
  "/images/championsgate/IMG_9034.PNG",
  "/images/championsgate/IMG_9035.PNG",
] as const;

export const properties: Property[] = [
  {
    slug: "solterra-beach-villa",
    name: "Solterra Resort",
    description:
      "A stunning 6-bedroom, 5-bathroom coastal-themed villa with 3,300 sq ft of designer living space. Every room is thoughtfully decorated with a beach-inspired aesthetic. Enjoy your own private heated pool and spa, a fully equipped game room, and all the amenities of Solterra Resort.",
    location: "Davenport, FL 33837",
    resort: "Solterra Resort",
    bedrooms: 6,
    bathrooms: 5,
    guests: 12,
    sqft: 3300,
    heroImage: SOLTERRA_IMAGES[0],
    images: [...SOLTERRA_IMAGES],
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
    name: "ChampionsGate Resort",
    description:
      "A magical 5-bedroom, 5-bathroom luxury retreat in ChampionsGate designed for the ultimate Disney family vacation. Features a private theater room, game loft, heated pool with spa, and themed bedrooms that kids will love.",
    location: "Davenport, FL 33896",
    resort: "ChampionsGate Resort",
    bedrooms: 5,
    bathrooms: 5,
    guests: 12,
    sqft: null,
    heroImage: CHAMPIONSGATE_IMAGES[0],
    images: [...CHAMPIONSGATE_IMAGES],
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
      "ChampionsGate resort amenities",
    ],
    nearDisney: "20 minutes from Walt Disney World",
    contact: {
      phone: "+1-863-862-5558",
      email: "devon@luxurysolterravillas.com",
    },
  },
];

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}
