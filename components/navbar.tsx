"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPin } from "lucide-react";

const NAV_LINKS = [
  { label: "ACCUEIL", href: "/" },
  { label: "NOS PRODUITS", href: "/nos_produits" },
  { label: "SCIENCE & INNOVATION", href: "/science-innovation" },
  { label: "CONSEILS", href: "/conseils" },
  { label: "À PROPOS", href: "/a-propos" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.04)] sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* Logo */}
        <Link href="/" className="shrink-0 flex items-center transition-transform hover:scale-105 duration-200">
          <img src="/img/logo.png" alt="BioMED Logo" className="h-9 w-auto object-contain" />
        </Link>

        {/* Nav links */}
        <ul className="hidden items-center gap-7 xl:gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`relative py-1 text-xs xl:text-sm font-bold tracking-wider text-[#0B2C6B] transition-colors hover:text-[#1568C9] ${
                    isActive
                      ? "after:absolute after:-bottom-1 after:left-0 after:h-[2.5px] after:w-full after:bg-[#0B2C6B] after:rounded-full"
                      : "text-slate-700 hover:text-[#0B2C6B]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA button */}
        <a
          href="#trouver-en-pharmacie"
          className="hidden items-center gap-2 rounded-full bg-[#0B2C6B] px-5 py-3 text-sm font-bold tracking-wide text-white transition-colors hover:bg-[#0a2456] lg:flex"
        >
          <MapPin className="h-4 w-4" />
          TROUVER EN PHARMACIE
        </a>

        {/* Mobile menu button (optional, expand as needed) */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-[#0B2C6B] lg:hidden"
          aria-label="Ouvrir le menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
}