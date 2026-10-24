"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, FlaskConical, ShieldCheck, Sparkles, Users } from "lucide-react";

const PILLARS = [
  {
    icon: FlaskConical,
    title: "INNOVATION SCIENTIFIQUE",
  },
  {
    icon: ShieldCheck,
    title: "RESPECT DE L'ÉMAIL",
  },
  {
    icon: Sparkles,
    title: "RÉSULTATS VISIBLES",
  },
  {
    icon: Users,
    title: "USAGE QUOTIDIEN",
  },
];

export default function ScienceHero() {
  return (
    <section className="relative w-full overflow-hidden min-h-[580px] lg:min-h-[640px] flex items-center">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=2000&q=80"
          alt="BioMED Science et Innovation fond"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center lg:object-right"
        />
        {/* Harmonious gradient overlay to keep text ultra legible and clean */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent sm:via-white/75 lg:via-white/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-12 lg:py-24 w-full">
        <div className="max-w-2xl">
          
          {/* Left Text & Value Pillars */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-[#00828A]/10 text-[#00828A] text-xs font-black tracking-widest uppercase mb-4">
              RECHERCHE & FORMULATIONS AVANCÉES
            </span>

            <h1 className="text-4xl font-black tracking-tight text-[#0B2C6B] sm:text-5xl lg:text-[52px] leading-[1.12]">
              La science au cœur
              <br />
              <span className="text-[#0B2C6B]">de chaque sourire</span>
            </h1>

            <p className="mt-5 max-w-lg text-base sm:text-lg leading-relaxed text-slate-700 font-medium">
              Chez BioMED, nous développons des formules innovantes qui agissent
              efficacement tout en respectant l&rsquo;équilibre naturel de votre bouche.
            </p>

            {/* 4 Pillars with Icons */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 py-4 border-y border-blue-200/60 bg-white/60 backdrop-blur-xs rounded-2xl px-4">
              {PILLARS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                    className="flex flex-col items-center text-center group"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#0B2C6B] shadow-sm border border-blue-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0B2C6B] group-hover:text-white">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                    <span className="mt-2 text-[10px] sm:text-[11px] font-bold text-[#0B2C6B] leading-tight tracking-tight uppercase">
                      {item.title}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Primary Action Button and trust badges */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <motion.a
                href="#technologies"
                whileHover={{ scale: 1.04, boxShadow: "0 10px 25px -5px rgba(0, 130, 138, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 rounded-full bg-[#00828A] hover:bg-[#006e75] px-8 py-4 text-xs sm:text-sm font-extrabold tracking-wider text-white shadow-lg shadow-[#00828A]/25 transition-all"
              >
                DÉCOUVRIR NOS TECHNOLOGIES
                <ArrowRight className="h-4 w-4" />
              </motion.a>

              <div className="flex items-center gap-2 text-xs font-bold text-[#0B2C6B] bg-white/80 backdrop-blur-md px-4 py-2.5 rounded-full border border-blue-100 shadow-xs">
                <ShieldCheck className="h-4 w-4 text-[#00828A]" />
                Cliniquement testé & approuvé
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
