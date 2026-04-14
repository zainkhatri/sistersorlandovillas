import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sisters Orlando Villas | Luxury Vacation Rentals Near Disney World",
  description:
    "Book direct and save on luxury vacation villas near Walt Disney World. Private pools, game rooms, themed bedrooms, and resort amenities. 4-6 bedroom homes sleeping up to 12 guests.",
  openGraph: {
    title: "Sisters Orlando Villas | Luxury Vacation Rentals Near Disney World",
    description:
      "Luxury vacation villas with private pools near Disney World. Book direct and save. 4-6 bedrooms, game rooms, resort amenities.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/globe.svg",
        width: 1200,
        height: 630,
        alt: "Luxury villa pool at sunset near Disney World",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sisters Orlando Villas | Luxury Vacation Rentals Near Disney World",
    description:
      "Luxury vacation villas with private pools near Disney World. Book direct and save.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
