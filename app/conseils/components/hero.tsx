"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useState } from "react";

const TAGS = [
  "# Blancheur",
  "# Haleine",
  "# Plaque",
  "# Gencives",
  "# Brossage",
  "# Routine",
];

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedTag: string | null;
  setSelectedTag: (tag: string | null) => void;
}

export default function ConseilsHero({
  searchQuery,
  setSearchQuery,
  selectedTag,
  setSelectedTag,
}: HeroProps) {
  return (
    <section className="relative w-full overflow-hidden min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] flex items-center">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=2000&q=80"
          alt="Conseils d'experts BioMED Sourire Sain"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center lg:object-right"
        />
        {/* Crisp Gradient overlay for pristine text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/30 sm:via-white/80 lg:via-white/55" />
      </div>

      {/* Hero Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-12 lg:py-24 w-full">
        <div className="max-w-2xl">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#00828A]/10 text-[#00828A] text-xs font-black tracking-widest uppercase mb-4">
              GUIDE & EXPERTISE SANTÉ BUCCO-DENTAIRE
            </span>

            <h1 className="text-4xl font-black tracking-tight text-[#0B2C6B] sm:text-5xl lg:text-[52px] leading-[1.12]">
              Conseils d&rsquo;experts
              <br />
              <span className="text-[#0B2C6B]">pour votre sourire</span>
            </h1>

            <p className="mt-5 max-w-lg text-base sm:text-lg leading-relaxed text-slate-700 font-medium">
              Découvrez nos conseils, astuces et articles dédiés à l&rsquo;hygiène
              bucco-dentaire pour mieux comprendre votre sourire et adopter les bons gestes au quotidien.
            </p>

            {/* Search Input Bar */}
            <div className="mt-8 relative max-w-lg">
              <div className="relative flex items-center shadow-lg shadow-blue-900/5 rounded-full overflow-hidden bg-white border border-blue-200/80 focus-within:border-[#00828A] focus-within:ring-2 focus-within:ring-[#00828A]/20 transition-all">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Rechercher un conseil..."
                  className="w-full px-6 py-4 text-sm text-slate-800 placeholder:text-slate-400 bg-transparent outline-none font-medium"
                />
                <button
                  type="button"
                  className="mr-2 h-10 w-10 rounded-full bg-[#00828A] hover:bg-[#006e75] text-white flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-sm"
                  aria-label="Rechercher"
                >
                  <Search className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Tags Strip */}
            <div className="mt-5 flex flex-wrap gap-2 items-center">
              {TAGS.map((tag) => {
                const isActive = selectedTag === tag;
                return (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(isActive ? null : tag)}
                    className={`text-xs font-bold px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-[#00828A] text-white shadow-sm"
                        : "bg-white/90 hover:bg-slate-100 text-slate-600 border border-slate-200/80"
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
