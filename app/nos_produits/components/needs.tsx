"use client";

import { motion } from "framer-motion";
import { Wind, ShieldCheck, Smile, HeartPulse } from "lucide-react";

// Precise custom Tooth Icon matching the reference outline
function ToothIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7 2c-2.8 0-4.5 2.2-4.5 5 0 2.2.8 3.5 1.4 5.5 1.2 4 1.5 8 3.6 8 1.4 0 2.1-4 3.5-4 1.4 0 2.1 4 3.5 4 2.1 0 2.4-4 3.6-8 .6-2 1.4-3.3 1.4-5.5 0-2.8-1.7-5-4.5-5-1.5 0-2.6.8-3.5 1.6C10.6 2.8 9.5 2 7 2Z" />
    </svg>
  );
}

const NEEDS = [
  { icon: ToothIcon, label: "Dents plus", sublabel: "blanches", target: "#produits" },
  { icon: Wind, label: "Haleine", sublabel: "fraîche", target: "#produits" },
  { icon: ShieldCheck, label: "Protection", sublabel: "quotidienne", target: "#comparaison" },
  { icon: Smile, label: "Sourire", sublabel: "éclatant", target: "#produits" },
  { icon: HeartPulse, label: "Confort", sublabel: "gingival", target: "#comparaison" },
];

export default function NeedsSection() {
  return (
    <section className="w-full bg-white py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center text-2xl font-bold tracking-tight text-[#0B2C6B] sm:text-3xl"
        >
          Quels sont vos besoins ?
        </motion.h2>

        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-5 sm:gap-4">
          {NEEDS.map(({ icon: Icon, label, sublabel, target }, i) => (
            <motion.a
              key={label + sublabel}
              href={target}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{
                y: -4,
                borderColor: "#1568C9",
                boxShadow: "0 10px 25px -5px rgba(11, 44, 107, 0.08)",
              }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-3.5 rounded-2xl border border-slate-200/90 bg-white px-4 py-4 sm:px-5 sm:py-5 transition-all duration-200 hover:bg-[#f6f9fe]"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-[#0B2C6B] transition-colors group-hover:bg-blue-50 group-hover:text-[#1568C9]">
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <div className="text-left text-xs sm:text-sm font-bold leading-snug text-[#0B2C6B]">
                <div>{label}</div>
                <div>{sublabel}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}