"use client";

import { motion } from "framer-motion";
import { Target, Eye, Gem } from "lucide-react";

const PILLARS = [
  {
    icon: Target,
    title: "NOTRE MISSION",
    color: "text-[#00828A]",
    bgColor: "bg-teal-50",
    paragraphs: [
      "Améliorer l'hygiène bucco-dentaire grâce à des solutions efficaces, accessibles et adaptées aux besoins réels du quotidien.",
      "Nous croyons qu'un produit d'hygiène ne doit pas seulement nettoyer : il doit également procurer confort, confiance et bien-être.",
    ],
  },
  {
    icon: Eye,
    title: "NOTRE VISION",
    color: "text-[#0B2C6B]",
    bgColor: "bg-blue-50",
    paragraphs: [
      "Construire une nouvelle génération de soins dentaires qui associe innovation scientifique, simplicité d'utilisation et résultats visibles.",
      "Parce qu'un sourire sain contribue au bien-être et à la confiance, nous souhaitons rendre l'hygiène bucco-dentaire plus accessible à tous.",
    ],
  },
  {
    icon: Gem,
    title: "NOTRE RAISON D'ÊTRE",
    color: "text-[#00828A]",
    bgColor: "bg-teal-50",
    paragraphs: [
      "Accompagner chaque personne dans sa routine quotidienne avec des solutions fiables, agréables et efficaces.",
      "Notre engagement : offrir des soins dentaires inspirés de la science, au service de sourires plus sains chaque jour.",
    ],
  },
];

export default function MissionVision() {
  return (
    <section className="w-full bg-[#f8fbfe] py-16 lg:py-24 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        
        {/* Top Header: Qui sommes-nous ? */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <span className="text-xs font-black uppercase tracking-widest text-[#00828A]">
              QUI SOMMES-NOUS ?
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B2C6B] tracking-tight">
              Une expertise dédiée au sourire
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-7 space-y-3.5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal"
          >
            <p>
              BioMED est une marque spécialisée dans les soins bucco-dentaires,
              développant des solutions innovantes alliant efficacité, sécurité
              et expérience sensorielle.
            </p>
            <p>
              Nos formules sont pensées pour répondre aux besoins essentiels de l&rsquo;hygiène
              quotidienne tout en respectant l&rsquo;émail et l&rsquo;équilibre naturel de la bouche.
            </p>
            <p className="font-semibold text-[#0B2C6B]">
              Chaque produit est développé selon une approche scientifique rigoureuse
              pour offrir une expérience complète : nettoyer, protéger et améliorer
              durablement le sourire.
            </p>
          </motion.div>
        </div>

        {/* 3 Pillars Grid: Mission, Vision, Raison d'être */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PILLARS.map((col, idx) => {
            const Icon = col.icon;
            return (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12, duration: 0.5 }}
                className="rounded-3xl bg-white border border-blue-100 shadow-md shadow-blue-900/5 p-7 sm:p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div>
                  <div className={`h-14 w-14 rounded-2xl ${col.bgColor} flex items-center justify-center ${col.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-7 w-7" strokeWidth={1.8} />
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-[#0B2C6B] tracking-tight uppercase">
                    {col.title}
                  </h3>

                  <div className="mt-4 space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {col.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#00828A]">
                  <span className="h-2 w-2 rounded-full bg-[#00828A]" />
                  Engagement BioMED
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
