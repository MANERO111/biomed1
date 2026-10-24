"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

export default function ConseilsCta() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#DFEEFD] via-[#ECF5FE] to-[#F1F6FB] border border-[#d2e4f8] shadow-sm p-8 sm:p-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 relative z-10">
            
            {/* Left: Smiling couple / person holding toothbrush */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4 flex justify-center"
            >
              <div className="relative aspect-[4/3] w-full max-w-[320px] rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80"
                  alt="Prenez soin de votre sourire chaque jour BioMED"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </motion.div>

            {/* Center: Headline & Subheadline */}
            <div className="lg:col-span-5 text-center lg:text-left">
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl font-extrabold text-[#0B2C6B] tracking-tight leading-tight"
              >
                Prenez soin de votre sourire chaque jour
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-3 text-sm sm:text-base text-slate-600 font-medium"
              >
                Des conseils pratiques, des gestes simples et des solutions efficaces.
              </motion.p>
            </div>

            {/* Right: Dual CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center items-center"
            >
              <Link
                href="/nos_produits"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#0B2C6B] px-6 py-3.5 text-xs sm:text-sm font-extrabold tracking-wider text-white shadow-md shadow-[#0B2C6B]/20 transition-all hover:bg-[#082255] hover:scale-105 active:scale-95 text-center"
              >
                DÉCOUVRIR NOS PRODUITS
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href="#trouver-en-pharmacie"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-[#0B2C6B]/40 bg-white px-6 py-3.5 text-xs sm:text-sm font-extrabold tracking-wider text-[#0B2C6B] shadow-sm transition-all hover:bg-slate-50 hover:scale-105 active:scale-95 text-center"
              >
                TROUVER UNE PHARMACIE
                <MapPin className="h-4 w-4 text-[#0B2C6B]" />
              </a>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
