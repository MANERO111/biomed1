"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Wind, MapPin, Building2, CheckCircle2 } from "lucide-react";

export default function ScienceAndMorocco() {
  return (
    <section className="w-full bg-[#f8fbfe] py-16 lg:py-24 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          
          {/* Left Column: La science au cœur de BioMED */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-white border border-blue-100 shadow-md shadow-blue-900/5 p-7 sm:p-9 flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#00828A]">
                LA SCIENCE AU CŒUR DE BIOMED
              </span>
              <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0B2C6B] tracking-tight">
                Des technologies développées pour agir efficacement
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
                Chaque technologie BioMED est conçue pour agir en profondeur
                tout en préservant l&rsquo;équilibre naturel de la bouche.
              </p>

              {/* 2 Tech Sub-cards */}
              <div className="mt-8 space-y-5">
                
                {/* Tech 1 */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#f8fbfe] border border-blue-50 group hover:border-blue-200 transition-all">
                  <div className="relative h-14 w-14 shrink-0 rounded-xl bg-white border border-blue-100 p-2 flex items-center justify-center">
                    <Image
                      src="/img/tooth.png"
                      alt="Microparticules exfoliantes"
                      fill
                      className="object-contain p-1 group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-black uppercase text-[#0B2C6B] tracking-tight">
                      MICROPARTICULES EXFOLIANTES DOUCES
                    </h4>
                    <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                      Aident à éliminer les impuretés et les résidus à la surface des dents.
                      Elles lissent la surface dentaire pour un effet naturellement plus éclatant.
                    </p>
                  </div>
                </div>

                {/* Tech 2 */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#f8fbfe] border border-teal-50 group hover:border-teal-200 transition-all">
                  <div className="relative h-14 w-14 shrink-0 rounded-xl bg-white border border-teal-100 p-2 flex items-center justify-center">
                    <Image
                      src="/img/mint_freshness.jpg"
                      alt="Microbilles de menthol"
                      fill
                      className="object-contain rounded-lg group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-black uppercase text-[#00828A] tracking-tight">
                      MICROBILLES DE MENTHOL
                    </h4>
                    <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                      Procurent une fraîcheur intense dès le brossage et une haleine fraîche
                      durable grâce à une technologie de libération progressive.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-[#0B2C6B]">Haute tolérance bucco-dentaire</span>
              <span className="text-[#00828A] font-bold">Formules brevetées</span>
            </div>
          </motion.div>

          {/* Right Column: BioMED au Maroc & ICG */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-3xl bg-white border border-blue-100 shadow-md shadow-blue-900/5 p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden"
          >
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#00828A]">
                BIOMED AU MAROC
              </span>
              <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0B2C6B] tracking-tight">
                Présent au Maroc
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
                Les produits BioMED sont distribués au Maroc par Intelligence Cosmétique
                Groupe afin de rendre des solutions d&rsquo;hygiène bucco-dentaire innovantes
                accessibles à travers un vaste réseau de pharmacies et parapharmacies partenaires.
              </p>

              {/* Morocco Map / Distribution Graphic */}
              <div className="mt-6 rounded-2xl bg-gradient-to-br from-blue-50/70 to-teal-50/40 border border-blue-100 p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                
                {/* ICG Branding Badge */}
                <div className="flex flex-col items-start">
                  <div className="inline-flex items-center gap-2.5">
                    <span className="text-3xl font-black tracking-tight text-[#07225B]">
                      ICG
                    </span>
                    <div className="flex flex-col text-[8.5px] font-bold tracking-wider text-[#07225B] uppercase leading-[1.15]">
                      <span>INTELLIGENCE</span>
                      <span>COSMÉTIQUE GROUPE</span>
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-slate-500 font-medium">
                    Distributeur officiel exclusif
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-xs font-bold text-[#0B2C6B]">
                    <MapPin className="h-4 w-4 text-[#00828A]" />
                    Casablanca, Maroc
                  </div>
                </div>

                {/* Minimalist Graphic Representation of Morocco network */}
                <div className="flex flex-col items-center justify-center p-4 bg-white/90 backdrop-blur-sm rounded-xl border border-blue-100 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-[#00828A]">
                    <CheckCircle2 className="h-4 w-4" />
                    Réseau National
                  </div>
                  <p className="text-[11px] text-slate-500 text-center mt-1">
                    Pharmacies & Parapharmacies
                  </p>
                  <span className="mt-2 inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-teal-50 text-teal-700">
                    Disponibilité immédiate
                  </span>
                </div>

              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-[#0B2C6B]">Partenaire pharmaceutique</span>
              <span className="text-[#00828A] font-bold">Couverture territoriale</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
