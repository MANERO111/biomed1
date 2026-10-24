"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, MessageSquare, Headphones } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative w-full overflow-hidden min-h-[500px] sm:min-h-[560px] lg:min-h-[620px] flex items-center">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=2000&q=80"
          alt="BioMED Service Écoute et Contact"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center lg:object-right"
        />
        {/* Soft, crisp gradient overlay to ensure text and badges stand out with maximum clarity */}
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
              SERVICE CLIENT & INFORMATIONS
            </span>

            <h1 className="text-4xl font-black tracking-tight text-[#0B2C6B] sm:text-5xl lg:text-[54px] leading-[1.12]">
              Nous sommes à
              <br />
              <span className="text-[#0B2C6B]">votre écoute</span>
            </h1>

            <p className="mt-6 max-w-lg text-base sm:text-lg leading-relaxed text-slate-700 font-medium">
              Une question sur nos produits, leur utilisation ou leur disponibilité ?
              Notre équipe est là pour vous accompagner et répondre à vos besoins.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#formulaire"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#0B2C6B] hover:bg-[#082255] px-8 py-4 text-xs sm:text-sm font-extrabold tracking-wider text-white shadow-lg shadow-[#0B2C6B]/20 transition-all hover:scale-105 active:scale-95"
              >
                <MessageSquare className="h-4 w-4" />
                ENVOYER UN MESSAGE
              </a>

              <div className="flex items-center gap-2.5 text-xs font-bold text-[#0B2C6B] bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-full border border-blue-100 shadow-xs">
                <ShieldCheck className="h-4 w-4 text-[#00828A]" />
                CLINIQUEMENT TESTÉ
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
