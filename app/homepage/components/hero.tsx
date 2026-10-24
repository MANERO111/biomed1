import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck, Leaf, PlusCircle } from "lucide-react";

const FEATURES = [
  {
    icon: "tooth",
    title: "EFFICACITÉ",
    subtitle: "PROUVÉE",
  },
  {
    icon: ShieldCheck,
    title: "RESPECT DE",
    subtitle: "L'ÉMAIL",
  },
  {
    icon: Leaf,
    title: "SENSATION",
    subtitle: "IMMÉDIATE",
  },
  {
    icon: PlusCircle,
    title: "USAGE",
    subtitle: "QUOTIDIEN",
  },
];

function ToothIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M8 2c-2.5 0-4 2-4 4.5 0 2 .5 3 1 5s1 6 2.5 6 1.5-4 2.5-4 1 4 2.5 4 2-4 2.5-6 1-3 1-5c0-2.5-1.5-4.5-4-4.5-1 0-1.5.5-2 .5s-1-.5-2-.5Z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F8FAFC]">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/hero.png"
          alt="BioMED Hero Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center sm:object-right"
        />
        {/* Responsive Overlay Gradient for perfect readability */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent sm:via-white/80 lg:via-white/60" /> */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/80 lg:hidden" /> */}
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-[90%] px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/90 backdrop-blur-sm px-4 py-2 text-xs font-bold tracking-wide text-[#0B2C6B] shadow-sm transition-transform hover:scale-105">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            CLINIQUEMENT TESTÉ & APPROUVÉ
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-[#0B2C6B]">
            Un sourire sain
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2C6B] via-[#1D4ED8] to-[#0284C7]">
              commence ici
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-lg text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
            BioMED développe des solutions dentaires cliniquement testées pour
            nettoyer en profondeur, protéger l'émail et renforcer durablement la santé
            bucco-dentaire de toute la famille.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#produits"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0B2C6B] px-7 py-4 text-xs sm:text-sm font-bold tracking-wider text-white shadow-lg shadow-blue-900/20 transition-all hover:bg-white hover:text-[#0B2C6B] hover:shadow-xl hover:scale-[1.02] active:scale-95 uppercase"
            >
              DÉCOUVRIR NOS PRODUITS
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#science"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#082255] bg-white/90 backdrop-blur-sm px-7 py-4 text-xs sm:text-sm font-bold tracking-wider text-[#0B2C6B] shadow-sm transition-all hover:text-white hover:bg-[#082255] hover:border-[#0B2C6B] uppercase"
            >
              NOS ENGAGEMENTS
            </a>
          </div>

          {/* Responsive Features Row */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-x-6 pt-6 ">
            {FEATURES.map(({ icon: Icon, title, subtitle }) => (
              <div key={title} className="flex flex-col items-start group">
                <div className="mb-2.5 flex h-15 w-15 items-center justify-center rounded-xl bg-blue-50/80 text-[#0B2C6B] transition-colors group-hover:bg-[#0B2C6B] group-hover:text-white">
                  {Icon === "tooth" ? (
                    <ToothIcon className="h-25 w-25" />
                  ) : (
                    <Icon className="h-13 w-13" strokeWidth={1.75} />
                  )}
                </div>
                <p className="text-[11px] font-extrabold leading-tight tracking-wide text-[#0B2C6B]">
                  {title}
                  <br />
                  <span className="font-semibold text-slate-500">{subtitle}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}