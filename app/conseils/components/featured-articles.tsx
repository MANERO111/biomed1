"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, ArrowRight, CheckCircle2 } from "lucide-react";

interface FeaturedProps {
  searchQuery: string;
  selectedTag: string | null;
}

const ARTICLES = [
  {
    id: 1,
    tag: "# Blancheur",
    badge: "BLANCHEUR",
    badgeColor: "bg-blue-600",
    title: "Comment blanchir ses dents sans les abîmer",
    desc: "Blanchir ses dents ne signifie pas agresser l'émail. Découvrez les bonnes pratiques pour retrouver un sourire plus éclatant tout en préservant la santé de vos dents.",
    time: "5 min",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    tag: "# Haleine",
    badge: "FRAÎCHEUR",
    badgeColor: "bg-[#00828A]",
    title: "Pourquoi la fraîcheur est essentielle",
    desc: "La sensation de fraîcheur ne concerne pas seulement le confort : elle participe aussi à une meilleure perception de l'hygiène et de la confiance au quotidien.",
    time: "4 min",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    tag: "# Brossage",
    badge: "BROSSAGE",
    badgeColor: "bg-indigo-600",
    title: "Les erreurs de brossage les plus fréquentes",
    desc: "Un mauvais geste peut réduire l'efficacité du brossage. Découvrez les erreurs courantes à éviter pour protéger vos dents et vos gencives.",
    time: "6 min",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    tag: "# Plaque",
    badge: "PROTECTION",
    badgeColor: "bg-[#00828A]",
    title: "Comment éviter la plaque dentaire",
    desc: "Comprenez comment la plaque se forme et découvrez les gestes simples permettant de préserver une bonne santé bucco-dentaire.",
    time: "5 min",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
  },
];

const EXPERT_BULLETS = [
  "Brossez-vous les dents pendant 2 minutes",
  "Matin et soir",
  "N'oubliez pas les zones difficiles d'accès",
  "Changez votre brosse régulièrement",
];

export default function FeaturedArticles({ searchQuery, selectedTag }: FeaturedProps) {
  const filteredArticles = ARTICLES.filter((art) => {
    const matchesSearch =
      searchQuery === "" ||
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = !selectedTag || art.tag === selectedTag;
    return matchesSearch && matchesTag;
  });

  return (
    <section className="w-full bg-[#f8fbfe] py-16 lg:py-24 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2C6B] tracking-tight">
              Articles à la une
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Des guides pratiques rédigés avec des professionnels de santé bucco-dentaire.
            </p>
          </div>
          <button
            onClick={() => {}}
            className="mt-4 sm:mt-0 inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-[#00828A] hover:text-[#006e75] transition-colors"
          >
            Voir tous les articles
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Layout: 4 Articles on Left (8 cols) + Expert Card on Right (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* 4 Articles Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredArticles.length === 0 ? (
              <div className="sm:col-span-2 text-center py-12 bg-white rounded-3xl border border-slate-200">
                <p className="text-slate-500 font-medium">Aucun article ne correspond à votre recherche.</p>
              </div>
            ) : (
              filteredArticles.map((art, idx) => (
                <motion.div
                  key={art.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="rounded-3xl bg-white border border-slate-200/80 shadow-md shadow-slate-900/5 overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                >
                  <div>
                    {/* Image Thumbnail */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                      <Image
                        src={art.image}
                        alt={art.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className={`text-[10px] font-black uppercase tracking-wider text-white px-2.5 py-1 rounded-md shadow-sm ${art.badgeColor}`}>
                          {art.badge}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 sm:p-6">
                      <h3 className="text-base font-extrabold text-[#0B2C6B] tracking-tight group-hover:text-[#00828A] transition-colors leading-snug">
                        {art.title}
                      </h3>
                      <p className="mt-2.5 text-xs text-slate-600 line-clamp-3 leading-relaxed font-normal">
                        {art.desc}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                      <Clock className="h-3.5 w-3.5 text-slate-400" />
                      {art.time}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-black text-[#0B2C6B] group-hover:text-[#00828A] transition-colors">
                      Lire l&rsquo;article
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </motion.div>
              ))
            )}
          </div>

          {/* Right Column: Expert Advice Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 rounded-3xl bg-white border border-blue-100 shadow-xl shadow-blue-900/5 p-6 sm:p-8 relative overflow-hidden"
          >
            {/* Soft decorative background accent */}
            <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-teal-50 blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <span className="text-[10px] font-black tracking-widest uppercase text-[#00828A] bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
                L&rsquo;AVIS SCIENTIFIQUE
              </span>

              <h3 className="mt-4 text-xl font-black text-[#0B2C6B] tracking-tight">
                Le conseil de l&rsquo;expert
              </h3>

              {/* Quote Block */}
              <div className="mt-4 relative pl-4 border-l-2 border-[#00828A]">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal italic">
                  &ldquo;Une bonne hygiène bucco-dentaire ne dépend pas uniquement du brossage.
                  La régularité, la durée et le choix de produits adaptés jouent un rôle
                  essentiel dans la santé de votre sourire.&rdquo;
                </p>
              </div>

              {/* Bullet Points */}
              <div className="mt-6 space-y-3">
                {EXPERT_BULLETS.map((bullet, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-teal-50 text-[#00828A] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span className="text-xs font-semibold text-slate-700">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>

              {/* Expert Profile Footer */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-4">
                <div className="relative h-14 w-14 rounded-2xl overflow-hidden border-2 border-[#00828A]/40 shrink-0 shadow-sm">
                  <Image
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80"
                    alt="Dr. Amine R. Expert en santé bucco-dentaire"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-black text-[#0B2C6B]">Dr. Amine R.</h4>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Expert en santé bucco-dentaire
                  </p>
                  <span className="text-[10px] text-[#00828A] font-bold">
                    BioMED Conseil Scientifique
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
