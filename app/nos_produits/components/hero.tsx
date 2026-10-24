"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden min-h-[500px] sm:min-h-[540px] lg:min-h-[580px] flex items-center">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/hero_nos_produits.jpg"
          alt="BioMED Nos Produits Fond"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center lg:object-right"
        /> 
        {/* Soft gradient wash to ensure text readability on all viewports */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/95 to-transparent sm:via-white/60 lg:via-white/30" />
      </div>

      {/* Hero Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-12 lg:py-24 w-full">
        <div className="max-w-2xl">
          {/* Left Text Block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-[#0B2C6B] sm:text-5xl lg:text-[54px] leading-[1.12]">
              Des solutions pensées
              <br />
              <span className="text-[#0B2C6B]">pour chaque sourire</span>
            </h1>

            <p className="mt-6 max-w-lg text-sm sm:text-base leading-relaxed text-slate-700 font-medium">
              BioMED développe des soins dentaires cliniquement testés
              qui répondent aux besoins essentiels de l&rsquo;hygiène
              bucco-dentaire : blancheur, fraîcheur, protection
              et confort quotidien.
            </p>

            <div className="mt-8">
              <motion.a
                href="#produits"
                whileHover={{ scale: 1.04, boxShadow: "0 10px 25px -5px rgba(11, 44, 107, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 rounded-full bg-[#0B2C6B] px-8 py-4 text-xs sm:text-sm font-extrabold tracking-wider text-white shadow-lg shadow-[#0B2C6B]/20 transition-all hover:bg-[#082255]"
              >
                TROUVER MON PRODUIT
                <ArrowRight className="h-4 w-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}