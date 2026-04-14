import Image from "next/image";
import Link from "next/link";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px]">
        <Image
          src={properties[0].heroImage}
          alt="Luxury Orlando vacation villa with private pool at Solterra Resort, minutes from Walt Disney World"
          fill
          className="object-cover object-center [transform:translateZ(0)]"
          priority
          quality={100}
          sizes="100vw"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/40 to-navy/80" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-gold">
            Luxury Vacation Rentals
          </p>
          <h1 className="mt-4 max-w-4xl font-[family-name:var(--font-serif)] text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Your Disney World Home Away From Home
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-sand-200 sm:text-xl">
            Private pools, themed bedrooms, and resort amenities minutes from
            the magic. Book direct and save.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#properties"
              className="rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-gold-light"
            >
              View Our Villas
            </Link>
            <Link
              href="/book"
              className="rounded-full border-2 border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Check Availability
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
          <svg className="h-6 w-6 text-white/60" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-t border-gold/35 bg-navy py-6">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-8 px-6 text-sm text-white">
          <span className="flex items-center gap-2">
            <StarIcon />
            4.96 Average Rating
          </span>
          <span className="hidden h-4 w-px bg-white/40 sm:block" />
          <span className="flex items-center gap-2">
            <ShieldIcon />
            Superhost Status
          </span>
          <span className="hidden h-4 w-px bg-white/40 sm:block" />
          <span className="flex items-center gap-2">
            <KeyIcon />
            Book Direct & Save
          </span>
          <span className="hidden h-4 w-px bg-white/40 sm:block" />
          <span className="flex items-center gap-2">
            <LocationIcon />
            Minutes from Disney
          </span>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="py-20 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-gold">
              Our Properties
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-serif)] text-3xl font-bold text-navy sm:text-4xl">
              Choose Your Perfect Villa
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Each of our villas is uniquely designed with families in mind.
              Private pools, game rooms, and easy access to Orlando&apos;s top
              attractions.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {properties.map((property) => (
              <PropertyCard key={property.slug} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="scroll-mt-20 border-t border-sand-200 bg-warm-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-gold">
              Amenities
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-serif)] text-3xl font-bold text-navy sm:text-4xl">
              Everything You Need for Your Stay
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Our villas include resort-style perks at home plus access to
              community amenities—pools, lazy rivers, fitness centers, and more.
            </p>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Private heated pools & spas",
              "Game rooms & entertainment spaces",
              "Fully equipped kitchens",
              "Themed & family-friendly bedrooms",
              "Smart lock entry & secure WiFi",
              "Resort pools, lazy rivers & slides",
              "Fitness centers & sports courts",
              "Minutes from Walt Disney World",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-sand-200 bg-sand-50/80 px-5 py-4 text-left text-navy"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/20 text-xs font-bold text-[#8A6B2E]">
                  ✓
                </span>
                <span className="text-sm leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="scroll-mt-20 border-t border-sand-200 bg-warm-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-gold">
              Guest Reviews
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-serif)] text-3xl font-bold text-navy sm:text-4xl">
              Loved by Families Like Yours
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Real feedback from guests who stayed at our villas—rated 4.96
              across 184+ five-star reviews.
            </p>
            <div className="mt-4 flex items-center justify-center gap-1 text-[#8A6B2E]" aria-hidden>
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
              <span className="ml-2 text-sm font-medium text-navy">4.96 average</span>
            </div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <ReviewCard
              quote="The pool and game room kept the kids happy every evening after the parks. House was spotless and the host was incredibly responsive."
              name="Jennifer M."
              detail="Family of 5 · Texas"
            />
            <ReviewCard
              quote="Best vacation rental we&apos;ve booked in Orlando. Themed rooms were a hit, kitchen had everything we needed, and check-in was seamless."
              name="David & Sarah K."
              detail="Family of 6 · Illinois"
            />
            <ReviewCard
              quote="Location is perfect for Disney days. Resort amenities were a bonus—we loved the lazy river. Already planning our return trip."
              name="Amanda R."
              detail="Family of 4 · Georgia"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-20 border-t border-sand-200 bg-warm-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-sand-200">
              <Image
                src="/images/solterra/01-BPT_0592And4more.jpg"
                alt="Luxury vacation villa living space at Solterra Resort"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-gold">
                About Us
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-serif)] text-3xl font-bold text-navy sm:text-4xl">
                Luxury Villas, Personal Touch
              </h2>
              <p className="mt-6 leading-relaxed text-gray-600">
                We manage two premium vacation villas in Orlando&apos;s most
                popular resort communities: Solterra Resort and
                ChampionsGate Resort. Each property is personally maintained to
                the highest standards, with designer interiors, private pools,
                and family-friendly amenities.
              </p>
              <p className="mt-4 leading-relaxed text-gray-600">
                Located just minutes from Walt Disney World, Universal Studios,
                and SeaWorld, our villas offer the perfect home base for your
                Orlando adventure. With resort amenities like lazy rivers,
                waterslides, and fitness centers, there&apos;s plenty to enjoy
                without even leaving the neighborhood.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-navy">2</p>
                  <p className="mt-1 text-sm text-gray-500">Luxury Villas</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-navy">184+</p>
                  <p className="mt-1 text-sm text-gray-500">5-Star Reviews</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-navy">4.96</p>
                  <p className="mt-1 text-sm text-gray-500">Avg Rating</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 lg:mt-20">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              <BenefitCard
                title="Best Price Guarantee"
                description="Save 10-15% compared to booking through Airbnb or VRBO. No middleman fees."
                icon={<PriceIcon />}
              />
              <BenefitCard
                title="Flexible Cancellation"
                description="Plans change. We offer flexible cancellation policies for your peace of mind."
                icon={<CalendarIcon />}
              />
              <BenefitCard
                title="Direct Communication"
                description="Talk directly with your host. Faster responses, personalized recommendations."
                icon={<ChatIcon />}
              />
              <BenefitCard
                title="Secure Payments"
                description="Safe and secure payment processing through Stripe. Your data is protected."
                icon={<LockIcon />}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-navy py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-[#8A6B2E]">
            Get In Touch
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-serif)] text-3xl font-bold text-white sm:text-4xl">
            Ready to Book Your Stay?
          </h2>
          <p className="mt-4 text-white/90">
            Have questions about our properties? Want to check availability?
            We&apos;d love to hear from you.
          </p>
          <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
            <a
              href="tel:+15555550100"
              className="flex items-center gap-3 rounded-full bg-white/10 px-8 py-3.5 text-white transition-colors hover:bg-white/20"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              (555) 555-0100
            </a>
            <Link
              href="/book"
              className="rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-gold-light"
            >
              Check Availability
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ReviewCard({
  quote,
  name,
  detail,
}: {
  quote: string;
  name: string;
  detail: string;
}) {
  return (
    <blockquote className="flex h-full flex-col rounded-2xl border border-sand-200 bg-sand-50/80 p-8 shadow-sm">
      <div className="flex gap-0.5 text-gold" aria-hidden>
        {[1, 2, 3, 4, 5].map((i) => (
          <svg key={i} className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-700">&ldquo;{quote}&rdquo;</p>
      <footer className="mt-6 border-t border-sand-200 pt-4">
        <p className="font-semibold text-navy">{name}</p>
        <p className="mt-0.5 text-xs text-gray-500">{detail}</p>
      </footer>
    </blockquote>
  );
}

function BenefitCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-sand-200 bg-white p-6 shadow-[0_1px_2px_rgba(26,39,68,0.04)] sm:p-8">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
        {icon}
      </div>
      <h3 className="mt-4 font-semibold text-navy">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-500">{description}</p>
    </div>
  );
}

function StarIcon() {
  return (
    <svg className="h-4 w-4 text-[#8A6B2E]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="h-4 w-4 text-[#8A6B2E]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

function KeyIcon() {
  return (
    <svg className="h-4 w-4 text-[#8A6B2E]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="h-4 w-4 text-[#8A6B2E]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

function PriceIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
  );
}
