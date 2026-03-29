"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-white tracking-tight">
            Florida<span className="text-gold">Villas</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/#properties"
            className="text-sm font-medium text-sand-200 transition-colors hover:text-gold"
          >
            Properties
          </Link>
          <Link
            href="/#about"
            className="text-sm font-medium text-sand-200 transition-colors hover:text-gold"
          >
            About
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-medium text-sand-200 transition-colors hover:text-gold"
          >
            Contact
          </Link>
          <Link
            href="/book"
            className="rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-gold-light"
          >
            Book Now
          </Link>
        </div>

        <button
          type="button"
          className="text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-navy px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link
              href="/#properties"
              className="text-sand-200 hover:text-gold"
              onClick={() => setMenuOpen(false)}
            >
              Properties
            </Link>
            <Link
              href="/#about"
              className="text-sand-200 hover:text-gold"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#contact"
              className="text-sand-200 hover:text-gold"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/book"
              className="rounded-full bg-gold px-6 py-2.5 text-center text-sm font-semibold text-navy"
              onClick={() => setMenuOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
