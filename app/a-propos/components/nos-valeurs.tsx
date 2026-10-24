"use client";

import { motion } from "framer-motion";
import { 
  FlaskConical, 
  ShieldCheck, 
  Sparkles, 
  Users, 
  HeartHandshake 
} from "lucide-react";

const VALUES = [
  {
    icon: FlaskConical,
    title: "INNOVATION SCIENTIFIQUE",
    desc: "Développer des technologies avancées pour améliorer l'efficacité quotidienne.",
  },
  {
    icon: ShieldCheck,
    title: "RESPECT & SÉCURITÉ",
    desc: "Créer des solutions conçues pour respecter l'émail et le confort gingival.",
  },
  {
    icon: Sparkles,
    title: "EFFICACITÉ VISIBLE",
    desc: "Offrir des résultats perceptibles tout en conservant une approche douce.",
  },
  {
    icon: Users,
    title: "ACCESSIBILITÉ",
    desc: "Rendre l'hygiène bucco-dentaire plus simple et plus accessible.",
  },
  {
    icon: HeartHandshake,
    title: "ENGAGEMENT",
    desc: "Agir de manière responsable pour le bien-être des consommateurs.",
  },
];

export default function NosValeurs() {
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
            Nos Valeurs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-sm text-slate-500 font-medium"
          >
            Les principes fondamentaux qui guident chacune de nos formulations.
          </motion.p>
        </div>

        {/* 5 Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {VALUES.map((val, idx) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="rounded-2xl p-6 bg-[#f8fbfe] border border-blue-100/70 shadow-xs hover:shadow-lg hover:border-blue-200 transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1"
              >
                <div className="h-14 w-14 rounded-2xl bg-white shadow-xs border border-blue-100/60 flex items-center justify-center text-[#0B2C6B] group-hover:scale-110 group-hover:bg-[#00828A] group-hover:text-white transition-all duration-300">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </div>

                <h3 className="mt-4 text-xs font-black uppercase text-[#0B2C6B] tracking-tight">
                  {val.title}
                </h3>

                <p className="mt-2 text-xs text-slate-500 leading-relaxed font-normal">
                  {val.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
