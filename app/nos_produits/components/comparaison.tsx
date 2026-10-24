"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Minus, ArrowRight, FlaskConical } from "lucide-react";

interface CompareRow {
  benefit: string;
  whiteness: boolean;
  freshness: boolean;
}

const COMPARISON_ROWS: CompareRow[] = [
  { benefit: "Blanchiment naturel", whiteness: true, freshness: false },
  { benefit: "Élimine les taches", whiteness: true, freshness: false },
  { benefit: "Fraîcheur intense", whiteness: false, freshness: true },
  { benefit: "Haleine fraîche durable", whiteness: false, freshness: true },
  { benefit: "Respecte l'émail", whiteness: true, freshness: true },
  { benefit: "Protection anti-caries", whiteness: false, freshness: true },
  { benefit: "Confort gingival", whiteness: false, freshness: true },
  { benefit: "Usage quotidien", whiteness: true, freshness: true },
];

export default function ComparisonSection() {
  return (
    <section id="comparaison" className="w-full bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 items-stretch">
          
          {/* ================= LEFT COLUMN: Tooth Glowing Sphere Visual ================= */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-[#EAF3FD] to-[#DFECFB] p-6 lg:col-span-3 min-h-[300px] lg:min-h-[460px] border border-[#d6e5f8]"
          >
            {/* Background animated glow */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400/30 via-transparent to-transparent pointer-events-none"
            />
            
            {/* Tooth image */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-[240px] aspect-square"
            >
              <Image
                src="/img/nos_produits_tooth_compare1.png"
                alt="Protection émail BioMED"
                fill
                className="object-contain drop-shadow-md"
              />
            </motion.div>
          </motion.div>

          {/* ================= CENTER COLUMN: Comparison Table ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col justify-between rounded-3xl bg-white p-6 sm:p-8 lg:col-span-6 border border-slate-200/80 shadow-sm"
          >
            <div>
              <h2 className="text-center text-xl sm:text-2xl font-extrabold text-[#0B2C6B] tracking-tight">
                Quelle solution est faite pour vous ?
              </h2>

              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[420px] text-xs sm:text-[13px]">
                  <thead>
                    <tr className="border-b border-slate-100 pb-3">
                      <th className="py-2.5 text-left font-black tracking-wider text-slate-500 text-[11px] uppercase">
                        BÉNÉFICES
                      </th>
                      <th className="py-2.5 text-center font-black tracking-wider text-[#0B2C6B] text-[11px] uppercase">
                        EFFECTIVE WHITENESS
                      </th>
                      <th className="py-2.5 text-center font-black tracking-wider text-[#17A398] text-[11px] uppercase">
                        EXTREME &amp; INTENSE FRESHNESS
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {COMPARISON_ROWS.map((row, idx) => (
                      <motion.tr
                        key={row.benefit}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.04 }}
                        className="hover:bg-slate-50/60 transition-colors"
                      >
                        <td className="py-2.5 text-slate-700 font-medium">
                          {row.benefit}
                        </td>
                        <td className="py-2.5 text-center">
                          <span className="flex items-center justify-center">
                            {row.whiteness ? (
                              <Check className="h-4 w-4 text-[#0B2C6B]" strokeWidth={2.5} />
                            ) : (
                              <Minus className="h-3.5 w-3.5 text-slate-300" strokeWidth={2} />
                            )}
                          </span>
                        </td>
                        <td className="py-2.5 text-center">
                          <span className="flex items-center justify-center">
                            {row.freshness ? (
                              <Check className="h-4 w-4 text-[#17A398]" strokeWidth={2.5} />
                            ) : (
                              <Minus className="h-3.5 w-3.5 text-slate-300" strokeWidth={2} />
                            )}
                          </span>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT COLUMN: Scientific Approach Card ================= */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col justify-between rounded-3xl bg-[#F6FAFD] p-7 lg:col-span-3 border border-[#e1edf9]"
          >
            <div>
              {/* Flask icon */}
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#0B2C6B] shadow-xs border border-blue-100/60">
                <FlaskConical className="h-6 w-6 text-[#0B2C6B]" strokeWidth={1.8} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-extrabold text-[#0B2C6B] leading-tight">
                Développés selon
                <br />
                une approche scientifique
              </h3>

              {/* Text */}
              <p className="mt-3.5 text-xs sm:text-[13px] leading-relaxed text-slate-600">
                Nos formules associent efficacité, sécurité et confort d&rsquo;utilisation pour une
                hygiène bucco-dentaire complète au quotidien.
              </p>
            </div>

            <div className="mt-6">
              <motion.a
                href="#science"
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-2 rounded-full border border-[#0B2C6B]/30 bg-white px-5 py-2.5 text-xs font-bold tracking-wider text-[#0B2C6B] transition-colors hover:bg-[#0B2C6B] hover:text-white"
              >
                EN SAVOIR PLUS
                <ArrowRight className="h-3.5 w-3.5" />
              </motion.a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}