"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

export default function AProposCta() {
  return (
    <section className="w-full bg-[#0B2C6B] py-16 lg:py-20 relative overflow-hidden text-white">
      {/* Decorative radial lighting */}
      <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-teal-400/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
          
          {/* Left: Fresh Mint Leaves */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 hidden lg:flex justify-center"
          >
            <div className="relative h-36 w-36">
              <Image
                src="/img/mint_freshness.jpg"
                alt="Feuilles de menthe BioMED"
                fill
                className="object-contain rounded-2xl drop-shadow-lg"
              />
            </div>
          </motion.div>

          {/* Center: Title & Dual CTA */}
          <div className="lg:col-span-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight"
            >
              Découvrez l&rsquo;univers BioMED
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-3 text-sm sm:text-base text-blue-100 font-normal max-w-lg mx-auto"
            >
              Des solutions développées pour accompagner chaque sourire au quotidien.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                href="/nos_produits"
                className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-slate-100 px-7 py-3.5 text-xs sm:text-sm font-extrabold tracking-wider text-[#0B2C6B] shadow-md transition-all hover:scale-105 active:scale-95"
              >
                DÉCOUVRIR NOS PRODUITS
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href="#trouver-en-pharmacie"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 hover:bg-white/10 px-7 py-3.5 text-xs sm:text-sm font-extrabold tracking-wider text-white transition-all hover:scale-105 active:scale-95"
              >
                TROUVER UNE PHARMACIE
                <MapPin className="h-4 w-4 text-white" />
              </a>
            </motion.div>
          </div>

          {/* Right: Glowing Tooth */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 flex justify-center"
          >
            <div className="relative h-36 w-36">
              <Image
                src="/img/tooth.png"
                alt="Sourire éclatant BioMED"
                fill
                className="object-contain drop-shadow-xl"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
