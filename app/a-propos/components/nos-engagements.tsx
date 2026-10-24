"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Heart, Sparkles, HeartPulse, FlaskConical } from "lucide-react";

const ENGAGEMENTS = [
  {
    icon: ShieldCheck,
    title: "CLINIQUEMENT TESTÉ",
    desc: "Sécurité et efficacité évaluées.",
  },
  {
    icon: Heart,
    title: "USAGE QUOTIDIEN",
    desc: "Des soins adaptés à toute la famille.",
  },
  {
    icon: Sparkles,
    title: "RESPECT DE L'ÉMAIL",
    desc: "Formules douces adaptées à un usage quotidien.",
  },
  {
    icon: HeartPulse,
    title: "CONFORT GINGIVAL",
    desc: "Conçues pour respecter et apaiser les gencives.",
  },
  {
    icon: FlaskConical,
    title: "TECHNOLOGIES AVANCÉES",
    desc: "Formules innovantes et performantes.",
  },
];

export default function NosEngagements() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-extrabold text-[#0B2C6B] tracking-tight uppercase"
          >
            Nos Engagements
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-sm text-slate-500 font-medium"
          >
            Une charte de rigueur et d&rsquo;exigence médicale au service de votre santé bucco-dentaire.
          </motion.p>
        </div>

        {/* 5 Engagements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {ENGAGEMENTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="rounded-2xl p-6 bg-[#f8fbfe] border border-blue-100/70 shadow-xs hover:shadow-lg hover:border-blue-200 transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1"
              >
                <div className="h-14 w-14 rounded-2xl bg-white shadow-xs border border-blue-100/60 flex items-center justify-center text-[#00828A] group-hover:scale-110 group-hover:bg-[#0B2C6B] group-hover:text-white transition-all duration-300">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </div>

                <h3 className="mt-4 text-xs font-black uppercase text-[#0B2C6B] tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs text-slate-500 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
