"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

export default function AvailabilitySection() {
  return (
    <section className="w-full bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl ">
        {/* Rounded Banner Card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#DFEEFD] via-[#ECF5FE] to-[#F1F6FB] border border-[#d2e4f8] shadow-sm">
          
          <div className="grid grid-cols-1 items-center lg:grid-cols-12 min-h-[160px]">
            
            {/* Left: Smiling Woman with Tube */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6 }}
              className="relative hidden h-full min-h-[160px] lg:col-span-3 lg:block"
            >
              <Image
                src="/img/cta_woman1.png"
                alt="Femme souriante avec BioMED"
                fill
                className="object-contain object-left-bottom"
              />
            </motion.div>

            {/* Center: Headline, text and Dual CTA Buttons */}
            <div className="flex flex-col items-center justify-center p-8 text-center lg:col-span-6 lg:py-4">
              <motion.h3
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5 }}
                className="text-xl sm:text-2xl font-extrabold text-[#0B2C6B] tracking-tight"
              >
                Prêt à prendre soin de votre sourire ?
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="mt-2 text-xs sm:text-sm text-slate-600 font-normal"
              >
                Découvrez nos solutions et trouvez celle qui vous convient.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.16 }}
                className="mt-6 flex flex-wrap items-center justify-center gap-3.5"
              >
                <motion.a
                  href="#produits"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-full bg-[#0B2C6B] px-6 py-3 text-xs font-extrabold tracking-wider text-white shadow-sm transition-colors hover:bg-[#082255]"
                >
                  DÉCOUVRIR NOS PRODUITS
                  <ArrowRight className="h-3.5 w-3.5" />
                </motion.a>

                <motion.a
                  href="#pharmacie"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-full border border-[#0B2C6B]/40 bg-white px-6 py-3 text-xs font-extrabold tracking-wider text-[#0B2C6B] transition-colors hover:bg-slate-50"
                >
                  TROUVER UNE PHARMACIE
                  <MapPin className="h-3.5 w-3.5" />
                </motion.a>
              </motion.div>
            </div>

            {/* Right: Pharmacy Interior */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6 }}
              className="relative hidden h-full min-h-[160px] lg:col-span-3 lg:block"
            >
              <Image
                src="/img/cta_pharmacy.png"
                alt="Pharmacie partenaire"
                fill
                className="object-cover object-right"
              />
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}