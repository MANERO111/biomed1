"use client";

import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Droplets, Wind, Smile, ArrowRight } from "lucide-react";

const ACTION_STEPS = [
  {
    title: "NETTOYER",
    desc: "Élimine la plaque et les résidus",
    icon: Droplets,
  },
  {
    title: "ÉLIMINER LES IMPURETÉS",
    desc: "Nettoyage en profondeur et des zones difficiles",
    icon: Sparkles,
  },
  {
    title: "PROTÉGER L'ÉMAIL",
    desc: "Renforce et respecte l'émail",
    icon: ShieldCheck,
  },
  {
    title: "RAFRAÎCHIR",
    desc: "Sensation de fraîcheur immédiate et durable",
    icon: Wind,
  },
  {
    title: "AMÉLIORER LE SOURIRE",
    desc: "Des dents plus saines et un sourire éclatant",
    icon: Smile,
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B2C6B] tracking-tight uppercase"
          >
            COMMENT AGISSENT LES FORMULES BIOMED ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-sm sm:text-base text-slate-500 font-medium"
          >
            Nos formules agissent sur plusieurs dimensions essentielles pour une hygiène bucco-dentaire complète.
          </motion.p>
        </div>

        {/* 5-step Flow with Animated Connectors */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-4 items-stretch">
            {ACTION_STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative flex flex-col items-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.12, duration: 0.5 }}
                    className="w-full h-full flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-b from-[#f8fbfe] to-white border border-blue-50/80 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group"
                  >
                    {/* Step Icon Badge */}
                    <div className="h-16 w-16 rounded-2xl bg-white border border-blue-100 shadow-xs flex items-center justify-center text-[#0B2C6B] group-hover:scale-110 group-hover:bg-[#0B2C6B] group-hover:text-white transition-all duration-300">
                      <Icon className="h-7 w-7" strokeWidth={1.8} />
                    </div>

                    {/* Step Number Tag */}
                    <span className="mt-3 inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black tracking-widest text-[#00828A] bg-teal-50 border border-teal-100/60 uppercase">
                      Étape 0{idx + 1}
                    </span>

                    {/* Step Title */}
                    <h3 className="mt-3 text-xs sm:text-sm font-black text-[#0B2C6B] tracking-tight uppercase">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="mt-2 text-xs text-slate-500 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </motion.div>

                  {/* Arrow Connector between steps for desktop */}
                  {idx < ACTION_STEPS.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10 text-slate-300 pointer-events-none">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
