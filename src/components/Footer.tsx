import Link from "next/link";
import BrandWordmark from "@/components/BrandWordmark";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="text-white">
              <BrandWordmark className="text-xl" />
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Luxury vacation villas near Walt Disney World. Book direct and
              save on your Orlando family vacation.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/#properties" className="hover:text-gold-light">
                  Our Properties
                </Link>
              </li>
              <li>
                <Link href="/#reviews" className="hover:text-gold-light">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/book" className="hover:text-gold-light">
                  Book a Stay
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-gold-light">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-gold-light">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Solterra Resort, Davenport, FL</li>
              <li>ChampionsGate Resort, Davenport, FL</li>
              <li className="pt-2">
                <a href="tel:+18638625558" className="hover:text-gold-light">
                  +1 (863) 862-5558
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/30 pt-8 text-center text-xs text-white/80">
          &copy; {new Date().getFullYear()} SisterOrlandoVillas. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
