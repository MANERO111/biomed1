"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Headphones, HelpCircle, ChevronDown, CheckCircle2 } from "lucide-react";

const FAQ_CONTACT = [
  {
    q: "À quelle fréquence faut-il se brosser les dents ?",
    a: "Il est recommandé de se brosser les dents au moins deux fois par jour pendant deux minutes complètes, après les repas principaux, avec une brosse à brins souples.",
  },
  {
    q: "Où puis-je acheter BioMED ?",
    a: "Les soins dentaires BioMED sont disponibles dans toutes les pharmacies et parapharmacies partenaires agréées partout au Maroc.",
  },
  {
    q: "Comment choisir le produit adapté à mes besoins ?",
    a: "Si vous recherchez un éclat naturel et l'élimination des taches superficielles, optez pour BioMED Effective Whiteness. Si vous privilégiez une haleine fraîche et durable toute la journée, choisissez BioMED Extreme & Intense Freshness.",
  },
  {
    q: "Les produits BioMED conviennent-ils à un usage quotidien ?",
    a: "Oui, absolument. Toutes nos formulations respectent rigoureusement l'émail et la flore buccale naturelle pour une utilisation biquotidienne en toute sécurité.",
  },
];

export default function SupportAndFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Pharmacist Assistance Visual & Text (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 rounded-3xl bg-[#f8fbfe] border border-blue-100 p-7 sm:p-8 flex flex-col justify-between"
          >
            <div>
              {/* Photo of pharmacist consulting customer */}
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-md mb-6 bg-slate-200">
                <Image
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80"
                  alt="Notre équipe pharmacie et conseil vous accompagne"
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-xl bg-blue-100/60 text-[#0B2C6B] flex items-center justify-center shrink-0">
                  <Headphones className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <h3 className="text-xl font-black text-[#0B2C6B] tracking-tight">
                  Notre équipe vous accompagne
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Besoin d&rsquo;aide pour choisir votre produit ou mieux comprendre votre routine
                d&rsquo;hygiène bucco-dentaire ? Nos équipes sont à votre disposition pour vous orienter
                vers la solution adaptée à vos besoins.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-blue-200/60 flex items-center gap-2 text-xs font-bold text-[#00828A]">
              <CheckCircle2 className="h-4 w-4" />
              Conseils personnalisés par des experts
            </div>
          </motion.div>

          {/* Right Column: Questions Fréquentes Accordion (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#00828A]">
                ASSISTANCE RAPIDE
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0B2C6B] tracking-tight">
                Questions fréquentes
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-500 font-normal">
                Trouvez les réponses directes aux interrogations les plus courantes.
              </p>
            </div>

            <div className="mt-6 space-y-3.5">
              {FAQ_CONTACT.map((item, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-blue-100 bg-[#f8fbfe] shadow-xs overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => toggle(idx)}
                      className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left cursor-pointer hover:bg-white transition-colors"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`h-8 w-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isOpen ? "bg-[#00828A] text-white" : "bg-white text-[#00828A] border border-blue-100"
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
                          className="overflow-hidden bg-white"
                        >
                          <div className="px-5 pb-5 pt-2 text-xs sm:text-sm leading-relaxed text-slate-600 border-t border-slate-100 pl-14">
                            {item.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
