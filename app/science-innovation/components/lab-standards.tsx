"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, HeartPulse, Users } from "lucide-react";

const STANDARDS = [
  {
    icon: ShieldCheck,
    title: "CLINIQUEMENT TESTÉ",
    desc: "Sécurité et efficacité évaluées par des tests rigoureux.",
  },
  {
    icon: Sparkles,
    title: "FORMULES AVANCÉES",
    desc: "Ingrédients sélectionnés avec la plus haute exigence.",
  },
  {
    icon: HeartPulse,
    title: "RESPECT DE L'ÉMAIL",
    desc: "Formules douces adaptées à un usage quotidien continu.",
  },
  {
    icon: Users,
    title: "CONÇU POUR TOUS",
    desc: "Toute la famille, tous les jours, en toute sérénité.",
  },
];

export default function LabStandards() {
  return (
    <section className="w-full bg-[#f4f9fd] py-16 lg:py-24 border-y border-blue-100/60 relative overflow-hidden">
      {/* Subtle background laboratory glows */}
      <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-teal-200/30 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Male Researcher / Dental Microscope Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 hidden lg:block"
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-200 group">
              <Image
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
                alt="Chercheur laboratoire BioMED recherche scientifique"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2C6B]/50 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <p className="text-[11px] font-black tracking-wider uppercase">LABORATOIRE QUALITÉ</p>
                <p className="text-[10px] text-white/80">Analyses micro-dentaires</p>
              </div>
            </div>
          </motion.div>

          {/* Center: Standards Content & 4 Cards */}
          <div className="lg:col-span-6 text-center lg:text-left px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <span className="text-xs font-black uppercase tracking-widest text-[#00828A]">
                EXIGENCE & RÉSULTATS
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0B2C6B] tracking-tight uppercase">
                DÉVELOPPÉ SELON DES STANDARDS RIGOUREUX
              </h2>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
                Chaque produit BioMED est développé, testé et validé selon des normes de
                qualité strictes, pour garantir sécurité, efficacité et une expérience
                optimale au quotidien.
              </p>
            </motion.div>

            {/* 4 Pillars Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {STANDARDS.map((std, i) => {
                const Icon = std.icon;
                return (
                  <motion.div
                    key={std.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex flex-col text-left p-4 rounded-2xl bg-white/95 backdrop-blur-sm border border-blue-100 shadow-sm hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-xl bg-teal-50 flex items-center justify-center text-[#00828A] group-hover:scale-110 group-hover:bg-[#00828A] group-hover:text-white transition-all">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-xs font-black uppercase text-[#0B2C6B] tracking-tight">
                        {std.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-xs text-slate-500 font-normal leading-relaxed">
                      {std.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: Female Dental Scientist / Care Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 hidden lg:block"
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-200 group">
              <Image
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80"
                alt="Praticienne et validation clinique BioMED"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2C6B]/50 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <p className="text-[11px] font-black tracking-wider uppercase">VALIDATION CLINIQUE</p>
                <p className="text-[10px] text-white/80">Respect optimal de l&rsquo;émail</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
