import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import BioMedLogo from "./biomed-logo";

// Custom SVG Social Icons to match the reference image exactly
function FacebookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.5-.14-2.76-.14-2.8 0-4.74 1.71-4.74 4.87V9.5H7v4h3V22h4v-8.5Z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2.5" />
    </svg>
  );
}

function YoutubeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#07225B] text-white pt-10 pb-6 px-6 lg:px-12 border-t border-blue-900/30">
      <div className="mx-auto max-w-[92%]">
        {/* Main 5-Column Grid with vertical dividers matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-0 items-start">
          
          {/* Column 1: Brand & Description (approx 3 cols) */}
          <div className="lg:col-span-3 lg:pr-8 flex flex-col justify-start">
            <Link href="/" className="inline-block">
              <BioMedLogo variant="light" />
            </Link>
            <p className="mt-4 text-[13px] leading-relaxed text-white/90 font-normal max-w-xs">
              Des solutions innovantes pour une hygiène bucco-dentaire efficace,
              sûre et accessible à tous.
            </p>
          </div>

          {/* Column 2: Liens Rapides (approx 2 cols) */}
          <div className="lg:col-span-2 lg:px-8 lg:border-l lg:border-white/15">
            <h3 className="text-xs font-black tracking-wider uppercase text-white mb-4">
              LIENS RAPIDES
            </h3>
            <ul className="space-y-2.5 text-[13px] text-white/85">
              <li>
                <Link href="#produits" className="transition-colors hover:text-white hover:underline underline-offset-4">
                  Nos produits
                </Link>
              </li>
              <li>
                <Link href="/science-innovation" className="transition-colors hover:text-white hover:underline underline-offset-4">
                  Science & Innovation
                </Link>
              </li>
              <li>
                <Link href="/conseils" className="transition-colors hover:text-white hover:underline underline-offset-4">
                  Conseils
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="transition-colors hover:text-white hover:underline underline-offset-4">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-white hover:underline underline-offset-4">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contactez-nous (approx 3 cols) */}
          <div className="lg:col-span-3 lg:px-8 lg:border-l lg:border-white/15">
            <h3 className="text-xs font-black tracking-wider uppercase text-white mb-4">
              CONTACTEZ-NOUS
            </h3>
            <ul className="space-y-3.5 text-[13px] text-white/90">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-white/90 shrink-0" strokeWidth={1.75} />
                <a
                  href="mailto:contact@biomed.ma"
                  className="transition-colors hover:text-white hover:underline underline-offset-2"
                >
                  contact@biomed.ma
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-white/90 shrink-0" strokeWidth={1.75} />
                <a
                  href="tel:+212622123456"
                  className="transition-colors hover:text-white hover:underline underline-offset-2"
                >
                  +212 6 22 123 456
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-white/90 shrink-0" strokeWidth={1.75} />
                <span>Casablanca, Maroc</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Suivez-nous (approx 2 cols) */}
          <div className="lg:col-span-2 lg:px-8 lg:border-l lg:border-white/15">
            <h3 className="text-xs font-black tracking-wider uppercase text-white mb-4">
              SUIVEZ-NOUS
            </h3>
            <div className="flex items-center gap-4 text-white">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="transition-transform hover:scale-110 hover:text-blue-300"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="transition-transform hover:scale-110 hover:text-pink-300"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="transition-transform hover:scale-110 hover:text-red-400"
              >
                <YoutubeIcon className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="transition-transform hover:scale-110 hover:text-blue-200"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 5: Distributeur ICG (approx 2 cols) */}
          <div className="lg:col-span-2 lg:pl-8 lg:border-l lg:border-white/15 flex flex-col justify-start">
            <span className="text-[11px] font-medium text-white/80 mb-3">
              Distribué au Maroc par
            </span>
            {/* ICG Official Logo Style */}
            <div className="inline-flex items-center gap-2.5 select-none">
              <span className="text-3xl font-black tracking-tight text-white leading-none">
                ICG
              </span>
              <div className="flex flex-col text-[8.5px] font-bold tracking-wider text-white uppercase leading-[1.15]">
                <span>INTELLIGENCE</span>
                <span>COSMÉTIQUE GROUPE</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal links */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/70 gap-3">
          <p>© 2024 BioMED Pharmaceuticals. Tous droits réservés.</p>
          <div className="flex items-center gap-3">
            <Link
              href="/mentions-legales"
              className="hover:text-white transition-colors"
            >
              Mentions légales
            </Link>
            <span className="text-white/40">|</span>
            <Link
              href="/politique-de-confidentialite"
              className="hover:text-white transition-colors"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
