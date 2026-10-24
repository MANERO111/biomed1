"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, HeartPulse } from "lucide-react";

export default function AProposHero() {
  return (
    <section className="relative w-full overflow-hidden min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-center">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2000&q=80"
          alt="À propos de BioMED - Fond Sourire et Santé"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center lg:object-right"
        />
        {/* Soft, clean gradient overlay ensuring supreme legibility on all devices */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent sm:via-white/80 lg:via-white/55" />
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
              À PROPOS DE BIOMED
            </span>

            <h1 className="text-4xl font-black tracking-tight text-[#0B2C6B] sm:text-5xl lg:text-[52px] leading-[1.12]">
              Créer une meilleure
              <br />
              <span className="text-[#0B2C6B]">hygiène bucco-dentaire,</span>
              <br />
              <span className="text-[#00828A]">sourire après sourire</span>
            </h1>

            <p className="mt-6 max-w-lg text-base sm:text-lg leading-relaxed text-slate-700 font-medium">
              Chez BioMED, nous croyons qu&rsquo;un sourire sain commence par une hygiène
              quotidienne efficace. Nous développons des solutions dentaires innovantes
              pour améliorer la fraîcheur, le confort et la confiance au quotidien.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/nos_produits"
                className="inline-flex items-center gap-3 rounded-full bg-[#0B2C6B] hover:bg-[#082255] px-8 py-4 text-xs sm:text-sm font-extrabold tracking-wider text-white shadow-lg shadow-[#0B2C6B]/20 transition-all hover:scale-105 active:scale-95"
              >
                DÉCOUVRIR NOS PRODUITS
                <ArrowRight className="h-4 w-4" />
              </Link>

              <div className="flex items-center gap-2 text-xs font-bold text-[#0B2C6B] bg-white/80 backdrop-blur-md px-4 py-2.5 rounded-full border border-blue-100 shadow-xs">
                <ShieldCheck className="h-4 w-4 text-[#00828A]" />
                Engagement & Qualité pharmaceutique
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
