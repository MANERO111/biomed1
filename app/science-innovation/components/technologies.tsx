"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ChevronRight, 
  Sparkles, 
  Droplets, 
  ShieldCheck, 
  Zap, 
  Wind, 
  CheckCircle2,
  Smile
} from "lucide-react";

export default function TechSection() {
  return (
    <section id="technologies" className="w-full bg-[#f8fbfe] py-16 lg:py-24 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#00828A]"
          >
            NOTRE APPROCHE SCIENTIFIQUE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B2C6B] tracking-tight"
          >
            NOS TECHNOLOGIES CLÉS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed"
          >
            Chaque formule BioMED est conçue selon une approche scientifique rigoureuse
            pour offrir efficacité, sécurité et confort au quotidien.
          </motion.p>
        </div>

        {/* The 2 Core Technologies Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Card 1: Microparticules (Blancheur) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-white border border-blue-100/80 shadow-xl shadow-blue-900/5 overflow-hidden flex flex-col justify-between"
          >
            <div>
              {/* Header Badge */}
              <div className="bg-[#0B2C6B] px-6 py-4 text-white text-center">
                <h3 className="text-sm sm:text-base font-black tracking-wide uppercase">
                  TECHNOLOGIE DES MICROPARTICULES
                </h3>
                <p className="text-xs text-blue-200 font-medium mt-0.5">
                  Exfoliation douce & polissage dentaire
                </p>
              </div>

              {/* Card Body with Visual & Description */}
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  {/* Glowing visual */}
                  <div className="relative h-32 w-32 shrink-0  flex items-center justify-center group">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="relative h-full w-full"
                    >
                      <Image
                        src="/img/tooth.png"
                        alt="Microparticules polissage émail"
                        fill
                        className="object-contain"
                      />
                    </motion.div>
                  </div>

                  <p className="text-sm leading-relaxed text-slate-600">
                    Les microparticules agissent comme un agent exfoliant doux permettant
                    d&rsquo;éliminer les impuretés et les résidus présents à la surface des dents.
                    Elles lissent la surface dentaire pour un <span className="font-semibold text-[#0B2C6B]">effet naturellement plus éclatant</span>.
                  </p>
                </div>

                {/* Mechanism of Action */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <p className="text-[11px] font-extrabold tracking-wider uppercase text-[#0B2C6B] mb-4 flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-[#00828A]" />
                    MÉCANISME D&rsquo;ACTION
                  </p>

                  <div className="grid grid-cols-5 gap-2 text-center">
                    {[
                      { step: "Élimination des impuretés", icon: Droplets },
                      { step: "Nettoyage en profondeur", icon: Sparkles },
                      { step: "Polissage doux", icon: Zap },
                      { step: "Blanchiment naturel", icon: Smile },
                      { step: "Respect de l'émail", icon: ShieldCheck },
                    ].map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <div key={item.step} className="flex flex-col items-center">
                          <div className="h-9 w-9 rounded-xl bg-blue-50 flex items-center justify-center text-[#0B2C6B] mb-2 shadow-xs transition-transform hover:scale-110">
                            <Icon className="h-4 w-4" />
                          </div>
                          <span className="text-[10px] sm:text-[11px] font-bold text-slate-700 leading-tight">
                            {item.step}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Card 2: Microbilles de Menthol (Fraîcheur) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-3xl bg-white border border-teal-100/80 shadow-xl shadow-teal-900/5 overflow-hidden flex flex-col justify-between"
          >
            <div>
              {/* Header Badge */}
              <div className="bg-[#00828A] px-6 py-4 text-white text-center">
                <h3 className="text-sm sm:text-base font-black tracking-wide uppercase">
                  MICROBILLES DE MENTHOL
                </h3>
                <p className="text-xs text-teal-100 font-medium mt-0.5">
                  Fraîcheur intense & haleine durable
                </p>
              </div>

              {/* Card Body with Visual & Description */}
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  {/* Mint Leaves visual */}
                  <div className="relative h-32 w-32 shrink-0 rounded-2xl flex items-center justify-center group">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1], rotate: [0, 2, 0] }}
                      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                      className="relative h-full w-full"
                    >
                      <Image
                        src="/img/mint_freshness.jpg"
                        alt="Microbilles de menthol fraîcheur"
                        fill
                        className="object-contain rounded-xl"
                      />
                    </motion.div>
                  </div>

                  <p className="text-sm leading-relaxed text-slate-600">
                    Les microbilles de menthol libèrent progressivement une sensation de
                    fraîcheur intense dès le brossage et procurent une <span className="font-semibold text-[#00828A]">haleine fraîche et durable</span> tout au long de la journée.
                  </p>
                </div>

                {/* Mechanism of Action */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <p className="text-[11px] font-extrabold tracking-wider uppercase text-[#00828A] mb-4 flex items-center gap-1.5">
                    <Wind className="h-3.5 w-3.5 text-[#00828A]" />
                    MÉCANISME D&rsquo;ACTION
                  </p>

                  <div className="grid grid-cols-5 gap-2 text-center">
                    {[
                      { step: "Sensation immédiate", icon: Zap },
                      { step: "Libération progressive", icon: Droplets },
                      { step: "Fraîcheur intense", icon: Wind },
                      { step: "Haleine fraîche", icon: Smile },
                      { step: "Protection quotidienne", icon: ShieldCheck },
                    ].map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <div key={item.step} className="flex flex-col items-center">
                          <div className="h-9 w-9 rounded-xl bg-teal-50 flex items-center justify-center text-[#00828A] mb-2 shadow-xs transition-transform hover:scale-110">
                            <Icon className="h-4 w-4" />
                          </div>
                          <span className="text-[10px] sm:text-[11px] font-bold text-slate-700 leading-tight">
                            {item.step}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
