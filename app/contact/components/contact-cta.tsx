"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

export default function ContactCta() {
  return (
    <section className="w-full bg-[#f8fbfe] py-16 lg:py-24 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#DFEEFD] via-[#ECF5FE] to-[#F1F6FB] border border-[#d2e4f8] shadow-sm p-8 sm:p-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 relative z-10">
            
            {/* Left: Fresh Mint Leaves */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 hidden lg:flex justify-center"
            >
              <div className="relative h-40 w-40">
                <Image
                  src="/img/mint_freshness.jpg"
                  alt="Fraîcheur BioMED menthe"
                  fill
                  className="object-contain rounded-2xl drop-shadow-md"
                />
              </div>
            </motion.div>

            {/* Center: Headline & Dual Buttons */}
            <div className="lg:col-span-6 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B2C6B] tracking-tight leading-tight"
              >
                Découvrez l&rsquo;univers BioMED
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-3 text-sm sm:text-base text-slate-600 font-medium max-w-lg mx-auto"
              >
                Des solutions pensées pour accompagner votre sourire au quotidien.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-8 flex flex-wrap items-center justify-center gap-4"
              >
                <Link
                  href="/nos_produits"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0B2C6B] hover:bg-[#082255] px-7 py-3.5 text-xs sm:text-sm font-extrabold tracking-wider text-white shadow-md shadow-[#0B2C6B]/25 transition-all hover:scale-105 active:scale-95"
                >
                  DÉCOUVRIR NOS PRODUITS
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href="#trouver-en-pharmacie"
                  className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-slate-50 border border-[#0B2C6B]/30 px-7 py-3.5 text-xs sm:text-sm font-extrabold tracking-wider text-[#0B2C6B] shadow-sm transition-all hover:scale-105 active:scale-95"
                >
                  TROUVER UNE PHARMACIE
                  <MapPin className="h-4 w-4 text-[#0B2C6B]" />
                </a>
              </motion.div>
            </div>

            {/* Right: Tooth Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 flex justify-center"
            >
              <div className="relative h-40 w-40">
                <Image
                  src="/img/tooth.png"
                  alt="Dents saines et éclatantes BioMED"
                  fill
                  className="object-contain drop-shadow-md"
                />
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
