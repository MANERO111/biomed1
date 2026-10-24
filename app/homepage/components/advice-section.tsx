import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Sparkles, Wind, AlertCircle, ShieldCheck } from "lucide-react";

interface ArticleItem {
  id: string;
  tag: string;
  tagColor: string;
  title: string;
  excerpt: string;
  readTime: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  iconColor: string;
}

const ARTICLES: ArticleItem[] = [
  {
    id: "blanchir-dents",
    tag: "Éclat & Blanchiment",
    tagColor: "bg-blue-50 text-blue-700 border-blue-200/60",
    title: "Comment blanchir ses dents sans les abîmer",
    excerpt:
      "Les méthodes éprouvées pour éclaircir l'émail naturellement et en douceur, sans provoquer d'hypersensibilité ni d'érosion prématurée.",
    readTime: "4 min de lecture",
    icon: Sparkles,
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600",
  },
  {
    id: "fraicheur-essentielle",
    tag: "Haleine & Équilibre",
    tagColor: "bg-teal-50 text-teal-700 border-teal-200/60",
    title: "Pourquoi la fraîcheur est essentielle",
    excerpt:
      "Bien au-delà du confort immédiat, une sensation de fraîcheur durable témoigne d'un microbiote buccal équilibré et protégé.",
    readTime: "3 min de lecture",
    icon: Wind,
    iconBg: "bg-teal-500/10",
    iconColor: "text-teal-600",
  },
  {
    id: "erreurs-brossage",
    tag: "Technique & Soin",
    tagColor: "bg-indigo-50 text-indigo-700 border-indigo-200/60",
    title: "Les erreurs de brossage",
    excerpt:
      "Pression excessive, brossage horizontal ou tête de brosse inadaptée : découvrez les 5 réflexes courants qui agressent vos gencives.",
    readTime: "5 min de lecture",
    icon: AlertCircle,
    iconBg: "bg-indigo-500/10",
    iconColor: "text-indigo-600",
  },
  {
    id: "eviter-la-plaque",
    tag: "Prévention & Émail",
    tagColor: "bg-sky-50 text-sky-700 border-sky-200/60",
    title: "Comment éviter la plaque",
    excerpt:
      "Comprendre la formation du biofilm bactérien et adopter les bons gestes quotidiens pour empêcher le dépôt et la minéralisation du tartre.",
    readTime: "4 min de lecture",
    icon: ShieldCheck,
    iconBg: "bg-sky-500/10",
    iconColor: "text-sky-600",
  },
];

export default function AdviceSection() {
  return (
    <section id="conseils" className="relative bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-100">
      <div className="mx-auto max-w-[90%] space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-extrabold tracking-wider text-[#0B2C6B] uppercase border border-blue-100">
            <BookOpen className="h-3.5 w-3.5 text-[#1568C9]" />
            SECTION CONSEILS
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0B2C6B]">
            Conseils d’experts pour votre sourire
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal max-w-xl mx-auto">
            Découvrez nos articles dédiés à l’hygiène bucco-dentaire rédigés avec
            des professionnels de santé pour vous accompagner au quotidien.
          </p>
        </div>

        {/* 4 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ARTICLES.map((article) => {
            const Icon = article.icon;
            return (
              <article
                key={article.id}
                className="group relative flex flex-col justify-between rounded-2xl bg-white p-6 shadow-xs border border-slate-200/80 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-200"
              >
                <div>
                  {/* Top Bar: Icon + Read Time */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${article.iconBg} ${article.iconColor} transition-transform group-hover:scale-110`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-400">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </span>
                  </div>

                  {/* Category Tag */}
                  <span
                    className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider border ${article.tagColor}`}
                  >
                    {article.tag}
                  </span>

                  {/* Article Title */}
                  <h3 className="mt-3 text-lg font-black text-[#0B2C6B] leading-snug tracking-tight group-hover:text-[#1568C9] transition-colors">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="mt-2.5 text-xs leading-relaxed text-slate-500 font-normal">
                    {article.excerpt}
                  </p>
                </div>

                {/* Read more footer link */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#0B2C6B] group-hover:text-[#1568C9] transition-colors inline-flex items-center gap-2">
                    Lire l'article
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Primary CTA */}
        <div className="flex justify-center pt-4">
          <Link
            href="#tous-les-conseils"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#0B2C6B] px-8 py-4 text-xs sm:text-sm font-extrabold tracking-wider text-white shadow-lg shadow-blue-900/15 transition-all hover:bg-[#082255] hover:scale-105 active:scale-95 uppercase"
          >
            VOIR TOUS LES CONSEILS
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
