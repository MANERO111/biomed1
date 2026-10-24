"use client";

import Image from "next/image";
import { Check, ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";

// Custom Star/Sparkle icon matching the "Microparticules exfoliantes" icon in reference
function SparkleTechIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className}>
      <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" strokeLinecap="round" />
    </svg>
  );
}

// Custom Microbead/Molecule icon matching the "Microbilles de menthol" icon in reference
function MicrobeadsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className}>
      <circle cx="12" cy="12" r="8" strokeDasharray="2 3" />
      <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity={0.2} />
      <circle cx="12" cy="7" r="1.5" fill="currentColor" />
      <circle cx="16" cy="11" r="1.5" fill="currentColor" />
      <circle cx="14" cy="16" r="1.5" fill="currentColor" />
      <circle cx="9" cy="15" r="1.5" fill="currentColor" />
      <circle cx="8" cy="10" r="1.5" fill="currentColor" />
    </svg>
  );
}

export default function ProductShowcase() {
  return (
    <section id="produits" className="w-full bg-white py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          
          {/* ================= CARD 1: BLANCHIMENT (BioMED Effective Whiteness) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col justify-between rounded-3xl bg-[#e9f0f9] p-7 sm:p-9 border border-[#d8e6f8]/70 shadow-sm hover:shadow-md transition-shadow"
          >
            <div>
              {/* Top Row: Info Left, Tube Image Right */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                
                {/* Left details */}
                <div className="sm:col-span-7 flex flex-col items-start">
                  {/* Badge */}
                  <span className="inline-block rounded-full bg-[#0B2C6B] px-3.5 py-1 text-[11px] font-extrabold tracking-wider text-white uppercase">
                    BLANCHIMENT
                  </span>

                  {/* Title */}
                  <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold text-[#0B2C6B] leading-tight">
                    BioMED
                    <br />
                    Effective Whiteness
                  </h3>

                  {/* Subtitle */}
                  <p className="mt-2 text-sm font-semibold text-[#0B2C6B]">
                    Un sourire plus éclatant, naturellement
                  </p>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-[13px] leading-relaxed text-slate-600">
                    Sa technologie de microparticules exfoliantes douces élimine les impuretés
                    et lisse la surface des dents pour une sensation de propreté immédiate et une
                    blancheur naturelle.
                  </p>
                </div>

                {/* Right: Product Tube (Clean p3 extraction) */}
                <div className="sm:col-span-5 flex justify-center items-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative w-full max-w-[210px] aspect-[3/4]"
                  >
                    <Image
                      src="/img/p1.jpg"
                      alt="BioMED Effective Whiteness"
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                </div>

              </div>

              {/* Middle Row: Bénéfices & Technologie */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#0B2C6B]/10">
                {/* Bénéfices */}
                <div>
                  <h4 className="text-[11px] font-black tracking-wider text-[#0B2C6B] uppercase mb-3.5">
                    BÉNÉFICES
                  </h4>
                  <ul className="space-y-2.5">
                    {[
                      "Élimine les taches superficielles",
                      "Polissage doux",
                      "Respecte l'émail",
                      "Sensation lisse immédiate",
                    ].map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2.5">
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#0B2C6B] text-white">
                          <Check className="h-2.5 w-2.5" strokeWidth={3} />
                        </span>
                        <span className="text-xs font-medium text-slate-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologie */}
                <div>
                  <h4 className="text-[11px] font-black tracking-wider text-[#0B2C6B] uppercase mb-3.5">
                    TECHNOLOGIE
                  </h4>
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center text-[#0B2C6B]">
                      <SparkleTechIcon className="h-7 w-7" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold leading-tight text-[#0B2C6B]">
                        Microparticules
                        <br />
                        exfoliantes
                      </h5>
                      <p className="mt-1 text-[11px] leading-relaxed text-slate-600">
                        Agent exfoliant doux qui aide à éliminer les résidus et à lisser la surface dentaire.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Row: CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <motion.a
                href="#trouver-mon-produit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full bg-[#0B2C6B] px-5 py-3 text-xs font-extrabold tracking-wider text-white shadow-sm transition-colors hover:bg-[#082255]"
              >
                DÉCOUVRIR LE PRODUIT
                <ArrowRight className="h-3.5 w-3.5" />
              </motion.a>
              <motion.a
                href="#trouver-en-pharmacie"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full border border-[#0B2C6B]/40 bg-white px-5 py-3 text-xs font-extrabold tracking-wider text-[#0B2C6B] transition-colors hover:bg-slate-50"
              >
                TROUVER EN PHARMACIE
                <MapPin className="h-3.5 w-3.5" />
              </motion.a>
            </div>

          </motion.div>


          {/* ================= CARD 2: FRAÎCHEUR (BioMED Extreme & Intense Freshness) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="flex flex-col justify-between rounded-3xl bg-[#edf5f6] p-7 sm:p-9 border border-[#caede5]/70 shadow-sm hover:shadow-md transition-shadow"
          >
            <div>
              {/* Top Row: Info Left, Tube Image Right */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                
                {/* Left details */}
                <div className="sm:col-span-7 flex flex-col items-start">
                  {/* Badge */}
                  <span className="inline-block rounded-full bg-[#17A398] px-3.5 py-1 text-[11px] font-extrabold tracking-wider text-white uppercase">
                    FRAÎCHEUR
                  </span>

                  {/* Title */}
                  <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold text-[#117C73] leading-tight">
                    BioMED
                    <br />
                    Extreme &amp; Intense Freshness
                  </h3>

                  {/* Subtitle */}
                  <p className="mt-2 text-sm font-semibold text-[#117C73]">
                    Une fraîcheur qui dure toute la journée
                  </p>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-[13px] leading-relaxed text-slate-600">
                    Formulé avec des microbilles de menthol, il procure une fraîcheur intense dès le
                    brossage et une haleine fraîche durable grâce à une technologie de libération
                    progressive.
                  </p>
                </div>

                {/* Right: Product Tube (Clean p3 extraction) */}
                <div className="sm:col-span-5 flex justify-center items-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative w-full max-w-[210px] aspect-[3/4]"
                  >
                    <Image
                      src="/img/p2.jpg"
                      alt="BioMED Extreme & Intense Freshness"
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                </div>

              </div>

              {/* Middle Row: Bénéfices & Technologie */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#17A398]/15">
                {/* Bénéfices */}
                <div>
                  <h4 className="text-[11px] font-black tracking-wider text-[#117C73] uppercase mb-3.5">
                    BÉNÉFICES
                  </h4>
                  <ul className="space-y-2.5">
                    {[
                      "Fraîcheur immédiate",
                      "Haleine fraîche durable",
                      "Protection anti-caries",
                      "Confort gingival",
                    ].map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2.5">
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#17A398] text-white">
                          <Check className="h-2.5 w-2.5" strokeWidth={3} />
                        </span>
                        <span className="text-xs font-medium text-slate-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologie */}
                <div>
                  <h4 className="text-[11px] font-black tracking-wider text-[#117C73] uppercase mb-3.5">
                    TECHNOLOGIE
                  </h4>
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center text-[#17A398]">
                      <MicrobeadsIcon className="h-7 w-7" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold leading-tight text-[#117C73]">
                        Microbilles
                        <br />
                        de menthol
                      </h5>
                      <p className="mt-1 text-[11px] leading-relaxed text-slate-600">
                        Libération progressive pour une sensation de fraîcheur intense et durable.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Row: CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <motion.a
                href="#trouver-mon-produit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full bg-[#17A398] px-5 py-3 text-xs font-extrabold tracking-wider text-white shadow-sm transition-colors hover:bg-[#117C73]"
              >
                DÉCOUVRIR LE PRODUIT
                <ArrowRight className="h-3.5 w-3.5" />
              </motion.a>
              <motion.a
                href="#trouver-en-pharmacie"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full border border-[#17A398]/40 bg-white px-5 py-3 text-xs font-extrabold tracking-wider text-[#117C73] transition-colors hover:bg-slate-50"
              >
                TROUVER EN PHARMACIE
                <MapPin className="h-3.5 w-3.5" />
              </motion.a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}