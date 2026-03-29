import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-sand-200">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold text-white">
              Florida<span className="text-gold">Villas</span>
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-sand-300">
              Luxury vacation villas near Walt Disney World. Book direct and
              save on your Orlando family vacation.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/#properties" className="hover:text-gold">
                  Our Properties
                </Link>
              </li>
              <li>
                <Link href="/book" className="hover:text-gold">
                  Book a Stay
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-gold">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-gold">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Solterra Resort, Davenport, FL</li>
              <li>Lake Berkley Resort, Kissimmee, FL</li>
              <li className="pt-2">
                <a href="tel:+18638625558" className="hover:text-gold">
                  +1 (863) 862-5558
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-sand-400">
          &copy; {new Date().getFullYear()} FloridaVillas. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
