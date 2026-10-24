"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Leaf, Sparkles, Users } from "lucide-react";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Cliniquement testé",
    text: "Des formules testées pour garantir efficacité et sécurité.",
  },
  {
    icon: Leaf,
    title: "Respect de l'émail",
    text: "Des technologies douces qui préservent l'émail et les gencives.",
  },
  {
    icon: Sparkles,
    title: "Résultats visibles",
    text: "Des actions ciblées pour des résultats perceptibles dès les premières utilisations.",
  },
  {
    icon: Users,
    title: "Usage quotidien",
    text: "Des soins adaptés à toute la famille pour une routine simple et efficace.",
  },
];

export default function FeaturesStrip() {
  return (
    <section className="w-full bg-[#F8FAFD] py-10 lg:py-12 border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:divide-x lg:divide-slate-200">
          {FEATURES.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-start gap-4 lg:px-4 lg:first:pl-0"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#0B2C6B] shadow-xs border border-blue-100/60 transition-transform hover:scale-110">
                <Icon className="h-6 w-6 text-[#0B2C6B]" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-[#0B2C6B] tracking-tight">{title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-500 font-normal">{text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}