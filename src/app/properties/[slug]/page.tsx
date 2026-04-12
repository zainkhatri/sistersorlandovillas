import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { properties, getPropertyBySlug } from "@/data/properties";
import type { Metadata } from "next";

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) return {};

  return {
    title: `${property.name} | SisterOrlandoVillas`,
    description: property.description,
    openGraph: {
      title: `${property.name} | SisterOrlandoVillas`,
      description: property.description,
      images: [{ url: property.heroImage, width: 1200, height: 630 }],
    },
  };
}

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px]">
        <Image
          src={property.heroImage}
          alt={property.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-navy/50" />
        <div className="relative z-10 flex h-full flex-col items-start justify-end px-6 pb-12">
          <div className="mx-auto w-full max-w-7xl">
            <Link
              href="/#properties"
              className="mb-4 inline-flex items-center gap-2 text-sm text-sand-200 hover:text-white"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              All Properties
            </Link>
            <h1 className="font-[family-name:var(--font-serif)] text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              {property.name}
            </h1>
            <div className="mt-3 flex flex-wrap gap-4 text-sm text-sand-200">
              <span>{property.bedrooms} Bedrooms</span>
              <span className="text-sand-400">|</span>
              <span>{property.bathrooms} Bathrooms</span>
              <span className="text-sand-400">|</span>
              <span>Sleeps {property.guests}</span>
              {property.sqft && (
                <>
                  <span className="text-sand-400">|</span>
                  <span>{property.sqft.toLocaleString()} sq ft</span>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <section>
              <h2 className="font-[family-name:var(--font-serif)] text-2xl font-bold text-navy">
                About This Property
              </h2>
              <p className="mt-4 leading-relaxed text-gray-600">
                {property.description}
              </p>
            </section>

            {/* Highlights */}
            <section className="mt-10">
              <h2 className="font-[family-name:var(--font-serif)] text-2xl font-bold text-navy">
                Highlights
              </h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {property.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-start gap-3 rounded-lg bg-sand-50 p-4"
                  >
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span className="text-sm text-navy">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Photo Gallery */}
            <section className="mt-10">
              <h2 className="font-[family-name:var(--font-serif)] text-2xl font-bold text-navy">
                Photo Gallery
              </h2>
              <div className="mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                {property.images.map((image, i) => (
                  <div
                    key={i}
                    className="relative aspect-[4/3] overflow-hidden rounded-lg"
                  >
                    <Image
                      src={image}
                      alt={`${property.name} photo ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* Amenities */}
            <section className="mt-10">
              <h2 className="font-[family-name:var(--font-serif)] text-2xl font-bold text-navy">
                Amenities
              </h2>
              <div className="mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                {property.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center gap-2 py-2">
                    <svg className="h-4 w-4 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-sm text-gray-600">{amenity}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Location */}
            <section className="mt-10">
              <h2 className="font-[family-name:var(--font-serif)] text-2xl font-bold text-navy">
                Location
              </h2>
              <div className="mt-4 rounded-lg bg-sand-50 p-6">
                <p className="font-medium text-navy">{property.resort}</p>
                <p className="mt-1 text-sm text-gray-600">{property.location}</p>
                <p className="mt-3 text-sm text-gray-600">
                  {property.nearDisney}
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-sand-200 bg-white p-6 shadow-lg">
              <p className="text-sm text-gray-500">{property.nearDisney}</p>

              <div className="mt-6 space-y-3">
                <Link
                  href={`/book?property=${property.slug}`}
                  className="block w-full rounded-full bg-gold py-3.5 text-center text-sm font-semibold text-navy transition-colors hover:bg-gold-light"
                >
                  Check Availability
                </Link>
                <a
                  href={`tel:${property.contact.phone}`}
                  className="block w-full rounded-full border-2 border-navy/20 py-3.5 text-center text-sm font-semibold text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white"
                >
                  Call {property.contact.phone}
                </a>
                <a
                  href={`mailto:${property.contact.email}`}
                  className="block w-full text-center text-sm text-gray-500 underline hover:text-navy"
                >
                  {property.contact.email}
                </a>
              </div>

              <hr className="my-6 border-sand-200" />

              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Bedrooms</span>
                  <span className="font-medium text-navy">{property.bedrooms}</span>
                </div>
                <div className="flex justify-between">
                  <span>Bathrooms</span>
                  <span className="font-medium text-navy">{property.bathrooms}</span>
                </div>
                <div className="flex justify-between">
                  <span>Guests</span>
                  <span className="font-medium text-navy">Up to {property.guests}</span>
                </div>
                {property.sqft && (
                  <div className="flex justify-between">
                    <span>Size</span>
                    <span className="font-medium text-navy">
                      {property.sqft.toLocaleString()} sq ft
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
