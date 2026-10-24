"use client";

import { motion } from "framer-motion";
import { Sparkles, Wind, ShieldAlert, ArrowRight } from "lucide-react";

const TIPS = [
  {
    icon: Sparkles,
    title: "Comment blanchir ses dents sans les abîmer",
  },
  {
    icon: Wind,
    title: "Pourquoi la fraîcheur est essentielle",
  },
  {
    icon: ShieldAlert,
    title: "Comment éviter la plaque",
  },
];

export default function TipsSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-extrabold text-[#0B2C6B] sm:text-left"
        >
          Complétez votre routine
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {TIPS.map(({ icon: Icon, title }, i) => (
            <motion.a
              key={title}
              href="#conseil"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col rounded-2xl border border-slate-100 bg-gradient-to-br from-[#f4f7fc] to-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <motion.div
                whileHover={{ rotate: 8, scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#0B2C6B]/5"
              >
                <Icon className="h-6 w-6 text-[#0B2C6B]" strokeWidth={1.75} />
              </motion.div>

              <h3 className="text-base font-bold leading-snug text-[#0B2C6B]">{title}</h3>

              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B2C6B]">
                Lire l&rsquo;article
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </motion.a>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <motion.a
            href="#conseils"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#0B2C6B]/20 bg-white px-6 py-4 text-sm font-bold tracking-wide text-[#0B2C6B] transition-colors hover:bg-[#0B2C6B] hover:text-white"
          >
            VOIR TOUS LES CONSEILS
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}