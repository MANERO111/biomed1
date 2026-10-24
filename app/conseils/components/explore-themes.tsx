"use client";

import { motion } from "framer-motion";
import { Sparkles, Wind, ShieldCheck, Heart, Bath, ArrowRight } from "lucide-react";

const THEMES = [
  {
    title: "Blancheur & sourire",
    desc: "Techniques et formules pour un éclat naturel.",
    icon: Sparkles,
  },
  {
    title: "Fraîcheur & haleine",
    desc: "Conseils pour une haleine durable et pure.",
    icon: Wind,
  },
  {
    title: "Protection quotidienne",
    desc: "Renforcement de l'émail et défense bactérienne.",
    icon: ShieldCheck,
  },
  {
    title: "Gencives & confort",
    desc: "Préservation des tissus mous et apaisement.",
    icon: Heart,
  },
  {
    title: "Routine d'hygiène",
    desc: "Les bons gestes matin et soir pour tous.",
    icon: Bath,
  },
];

export default function ExploreThemes() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-extrabold text-[#0B2C6B] tracking-tight uppercase"
          >
            Explorer par thème
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-sm text-slate-500 font-medium"
          >
            Trouvez les recommandations ciblées adaptées à votre préoccupation du moment.
          </motion.p>
        </div>

        {/* 5 Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {THEMES.map((theme, idx) => {
            const Icon = theme.icon;
            return (
              <motion.div
                key={theme.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.45 }}
                className="rounded-2xl p-6 bg-[#f8fbfe] border border-blue-100/70 shadow-xs hover:shadow-lg hover:border-blue-200 transition-all duration-300 flex flex-col justify-between items-center text-center group cursor-pointer hover:-translate-y-1"
              >
                <div>
                  <div className="h-14 w-14 rounded-2xl bg-white shadow-xs border border-blue-100/60 flex items-center justify-center text-[#0B2C6B] group-hover:scale-110 group-hover:bg-[#00828A] group-hover:text-white transition-all duration-300 mx-auto">
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-4 text-sm font-black text-[#0B2C6B] tracking-tight">
                    {theme.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-500 font-normal leading-relaxed">
                    {theme.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-blue-100/60 w-full flex items-center justify-center gap-1.5 text-xs font-bold text-[#00828A] group-hover:text-[#0B2C6B] transition-colors">
                  <span>Voir les conseils</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
