"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";

const FAQ_ITEMS = [
  {
    q: "À quelle fréquence faut-il se brosser les dents ?",
    a: "Il est recommandé de se brosser les dents au moins deux fois par jour pendant deux minutes complètes, idéalement après le petit-déjeuner et avant le coucher, avec une brosse à poils souples.",
  },
  {
    q: "Pourquoi ai-je mauvaise haleine malgré le brossage ?",
    a: "Plusieurs facteurs peuvent intervenir : résidus alimentaires logés entre les dents, bactéries sur la langue, hydratation insuffisante ou produits non adaptés. Les formules enrichies en menthol à libération prolongée aident à neutraliser durablement ces odeurs.",
  },
  {
    q: "Comment prévenir les taches dentaires ?",
    a: "Une bonne hygiène quotidienne et l'utilisation d'un dentifrice enrichi en microparticules douces aident à éliminer les pigments (thé, café, tabac) en polissant délicatement l'émail sans l'abîmer.",
  },
  {
    q: "Comment garder une haleine fraîche plus longtemps ?",
    a: "Adoptez une routine complète : brossage régulier, nettoyage de la langue et choix d'un dentifrice avec microbilles de menthol formulé pour procurer une sensation de fraîcheur continue tout au long de la journée.",
  },
];

export default function FaqAndRoutine() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="w-full bg-[#f8fbfe] py-16 lg:py-24 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: FAQ Accordion (7 cols) */}
          <div className="lg:col-span-7">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#00828A]">
                RÉPONSES SCIENTIFIQUES
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0B2C6B] tracking-tight">
                Questions fréquentes
              </h2>
              <p className="mt-2 text-sm text-slate-500 font-medium">
                Retrouvez les réponses de nos spécialistes pour garder des dents saines.
              </p>
            </div>

            {/* Accordion list */}
            <div className="mt-8 space-y-3.5">
              {FAQ_ITEMS.map((item, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="rounded-2xl border border-blue-100 bg-white shadow-xs overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => toggle(idx)}
                      className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left cursor-pointer hover:bg-slate-50/70 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`h-8 w-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isOpen ? "bg-[#00828A] text-white" : "bg-teal-50 text-[#00828A]"
                        }`}>
                          <HelpCircle className="h-4 w-4" />
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-[#0B2C6B]">
                          {item.q}
                        </span>
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 text-slate-400 shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-[#00828A]" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed text-slate-600 border-t border-slate-100 pl-14">
                            {item.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Routine Promotion Card with BioMED Tubes (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 rounded-3xl bg-white border border-blue-100 shadow-xl shadow-blue-900/5 p-6 sm:p-8"
          >
            <span className="text-[10px] font-black uppercase tracking-widest text-[#00828A] bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
              SOLUTIONS COMPLÉMENTAIRES
            </span>

            <h3 className="mt-4 text-xl font-black text-[#0B2C6B] tracking-tight">
              Complétez votre routine avec BioMED
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-slate-500 font-normal">
              Des solutions efficaces pour un sourire sain au quotidien.
            </p>

            {/* 2 Products Showcase */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              
              {/* Product 1: Blancheur */}
              <div className="rounded-2xl p-4 bg-gradient-to-b from-blue-50/50 to-white border border-blue-100 flex flex-col justify-between items-center text-center group">
                <div className="relative h-32 w-full">
                  <Image
                    src="/img/hero_right_tubes.png"
                    alt="BioMED Effective Whiteness"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="mt-3">
                  <h4 className="text-xs font-black text-[#0B2C6B]">Effective Whiteness</h4>
                  <p className="text-[10px] text-slate-500 mt-1">Pour un sourire naturellement plus éclatant.</p>
                </div>
                <Link
                  href="/nos_produits"
                  className="mt-4 inline-flex items-center gap-1 rounded-full bg-[#00828A] px-3.5 py-1.5 text-[10px] font-extrabold text-white hover:bg-[#006e75] transition-all"
                >
                  DÉCOUVRIR
                </Link>
              </div>

              {/* Product 2: Fraîcheur */}
              <div className="rounded-2xl p-4 bg-gradient-to-b from-teal-50/50 to-white border border-teal-100 flex flex-col justify-between items-center text-center group">
                <div className="relative h-32 w-full">
                  <Image
                    src="/img/hero_right_tubes.png"
                    alt="BioMED Extreme & Intense Freshness"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="mt-3">
                  <h4 className="text-xs font-black text-[#0B2C6B]">Extreme & Intense</h4>
                  <p className="text-[10px] text-slate-500 mt-1">Pour une fraîcheur intense et durable toute la journée.</p>
                </div>
                <Link
                  href="/nos_produits"
                  className="mt-4 inline-flex items-center gap-1 rounded-full bg-[#00828A] px-3.5 py-1.5 text-[10px] font-extrabold text-white hover:bg-[#006e75] transition-all"
                >
                  DÉCOUVRIR
                </Link>
              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
