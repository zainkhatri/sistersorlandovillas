import Link from "next/link";
import { properties } from "@/data/properties";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Your Stay | FloridaVillas",
  description:
    "Check availability and book your luxury vacation villa near Disney World. Secure payment processing through Stripe.",
};

export default function BookPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-gold">
            Book Your Stay
          </p>
          <h1 className="mt-2 font-[family-name:var(--font-serif)] text-3xl font-bold text-navy sm:text-4xl">
            Check Availability
          </h1>
          <p className="mt-4 text-gray-600">
            Select a property and your dates to see pricing. Book direct and
            save compared to Airbnb or VRBO.
          </p>
        </div>

        <form className="mt-12 space-y-6">
          {/* Property Selection */}
          <div>
            <label
              htmlFor="property"
              className="block text-sm font-medium text-navy"
            >
              Select Property
            </label>
            <select
              id="property"
              name="property"
              className="mt-2 w-full rounded-lg border border-sand-200 bg-white px-4 py-3 text-sm text-navy focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
            >
              <option value="">Choose a villa...</option>
              {properties.map((p) => (
                <option key={p.slug} value={p.slug}>
                  {p.name} - {p.bedrooms}BR / {p.guests} Guests
                </option>
              ))}
            </select>
          </div>

          {/* Dates */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="checkin"
                className="block text-sm font-medium text-navy"
              >
                Check-in
              </label>
              <input
                type="date"
                id="checkin"
                name="checkin"
                className="mt-2 w-full rounded-lg border border-sand-200 bg-white px-4 py-3 text-sm text-navy focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
              />
            </div>
            <div>
              <label
                htmlFor="checkout"
                className="block text-sm font-medium text-navy"
              >
                Check-out
              </label>
              <input
                type="date"
                id="checkout"
                name="checkout"
                className="mt-2 w-full rounded-lg border border-sand-200 bg-white px-4 py-3 text-sm text-navy focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
              />
            </div>
          </div>

          {/* Guests */}
          <div>
            <label
              htmlFor="guests"
              className="block text-sm font-medium text-navy"
            >
              Number of Guests
            </label>
            <select
              id="guests"
              name="guests"
              className="mt-2 w-full rounded-lg border border-sand-200 bg-white px-4 py-3 text-sm text-navy focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
            >
              {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? "Guest" : "Guests"}
                </option>
              ))}
            </select>
          </div>

          {/* Contact Info */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-navy"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                className="mt-2 w-full rounded-lg border border-sand-200 bg-white px-4 py-3 text-sm text-navy placeholder:text-gray-400 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-navy"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                className="mt-2 w-full rounded-lg border border-sand-200 bg-white px-4 py-3 text-sm text-navy placeholder:text-gray-400 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-navy"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+1 (555) 000-0000"
              className="mt-2 w-full rounded-lg border border-sand-200 bg-white px-4 py-3 text-sm text-navy placeholder:text-gray-400 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-navy"
            >
              Message (optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              placeholder="Any special requests or questions?"
              className="mt-2 w-full rounded-lg border border-sand-200 bg-white px-4 py-3 text-sm text-navy placeholder:text-gray-400 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-full bg-gold py-4 text-sm font-semibold text-navy transition-colors hover:bg-gold-light"
          >
            Request Booking
          </button>

          <p className="text-center text-xs text-gray-400">
            Secure payment processing via Stripe. You won&apos;t be charged
            until your booking is confirmed.
          </p>
        </form>

        {/* Calendar placeholder */}
        <div className="mt-16 rounded-2xl border-2 border-dashed border-sand-300 bg-sand-50 p-12 text-center">
          <svg className="mx-auto h-12 w-12 text-sand-400" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
          </svg>
          <h3 className="mt-4 font-semibold text-navy">
            Availability Calendar
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            Synced with Airbnb &mdash; real-time availability coming soon.
          </p>
          <p className="mt-1 text-xs text-gray-400">
            Will pull from Airbnb iCal feeds to show blocked dates
          </p>
        </div>

        {/* Back link */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="text-sm text-gray-500 hover:text-navy"
          >
            &larr; Back to all properties
          </Link>
        </div>
      </div>
    </div>
  );
}
