import Image from "next/image";
import {
  ArrowRight,
  FlaskConical,
  ShieldCheck,
  Users,
  Sparkles,
} from "lucide-react";

function ToothOutlineIcon({ className }: { className?: string }) {
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
      <path d="M8 2c-2.5 0-4 2-4 4.5 0 2 .5 3 1 5s1 6 2.5 6 1.5-4 2.5-4 1 4 2.5 4 2-4 2.5-6 1-3 1-5c0-2.5-1.5-4.5-4-4.5-1 0-1.5.5-2 .5s-1-.5-2-.5Z" />
    </svg>
  );
}

export default function FeaturesSection() {
  return (
    <section className="bg-[#F4F7FC] py-10 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[90%] space-y-6">
        
        {/* Top 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Card 1: Science (Dark Navy Blue) */}
          <div className="group relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-2xl bg-[#0B2C6B] p-7 text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            {/* Soft decorative background glow */}
            <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-blue-500/20 blur-2xl pointer-events-none" />
            
            <div className="relative z-10">
              {/* Icon Circle */}
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-inner transition-transform group-hover:scale-110">
                <ToothOutlineIcon className="h-7 w-7 text-white" />
              </div>

              {/* Title */}
              <h3 className="mb-3 text-lg font-black tracking-wider text-white leading-snug uppercase">
                LA SCIENCE AU CŒUR
                <br />
                DE CHAQUE FORMULE
              </h3>

              {/* Description */}
              <p className="text-xs leading-relaxed text-blue-100/90 font-normal">
                Des technologies avancées pour une hygiène efficace et un sourire visiblement plus sain.
              </p>
            </div>

            {/* CTA */}
            <div className="relative z-10 mt-8">
              <a
                href="#science"
                className="inline-flex items-center gap-2 text-xs font-extrabold tracking-wider text-white transition-all group-hover:translate-x-1 uppercase"
              >
                EN SAVOIR PLUS
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Card 2: Effective Whiteness */}
          <div className="group relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-2xl bg-white p-7 shadow-sm border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            
            {/* Responsive Card Background Image (Tooth Glow) */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
              <Image
                src="/img/tooth-glow.jpg"
                alt="Effective Whiteness"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover object-right-bottom mix-blend-multiply opacity-50 sm:opacity-100 transition-scale duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
            </div>

            {/* Card Content */}
            <div className="relative z-10">
              {/* Pill Badge */}
              <span className="inline-block rounded-full bg-[#DCE9FE] px-3.5 py-1 text-[10px] font-extrabold tracking-wider text-[#1D4ED8] uppercase shadow-xs">
                BLANCHIMENT
              </span>

              {/* Title */}
              <h3 className="mt-5 text-xl font-black tracking-tight text-[#0B2C6B] leading-tight">
                EFFECTIVE
                <br />
                WHITENESS
              </h3>

              {/* Description */}
              <p className="mt-3 max-w-[200px] text-xs leading-relaxed text-slate-600 font-medium">
                Blanchit naturellement, lisse la surface des dents et respecte l'émail.
              </p>
            </div>

            {/* CTA */}
            <div className="relative z-10 mt-8">
              <a
                href="#whiteness"
                className="inline-flex items-center gap-2 text-xs font-extrabold tracking-wider text-[#0B2C6B] transition-all group-hover:translate-x-1 uppercase"
              >
                DÉCOUVRIR
                <ArrowRight className="h-4 w-4 text-[#1D4ED8]" />
              </a>
            </div>
          </div>

          {/* Card 3: Extreme & Intense Freshness */}
          <div className="group relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-2xl bg-white p-7 shadow-sm border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            
            {/* Responsive Card Background Image (Mint Freshness) */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
              <Image
                src="/img/mint_freshness.jpg"
                alt="Extreme Freshness"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover object-right-bottom mix-blend-multiply opacity-50 sm:opacity-75 transition-scale duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent" />
            </div>

            {/* Card Content */}
            <div className="relative z-10">
              {/* Pill Badge */}
              <span className="inline-block rounded-full bg-[#CCFBF1] px-3.5 py-1 text-[10px] font-extrabold tracking-wider text-[#0F766E] uppercase shadow-xs">
                FRAÎCHEUR
              </span>

              {/* Title */}
              <h3 className="mt-5 text-xl font-black tracking-tight text-[#0B2C6B] leading-tight">
                EXTREME &
                <br />
                INTENSE FRESHNESS
              </h3>

              {/* Description */}
              <p className="mt-3 max-w-[200px] text-xs leading-relaxed text-slate-600 font-medium">
                Fraîcheur intense dès le brossage et haleine durable tout au long de la journée.
              </p>
            </div>

            {/* CTA */}
            <div className="relative z-10 mt-8">
              <a
                href="#freshness"
                className="inline-flex items-center gap-2 text-xs font-extrabold tracking-wider text-[#0B2C6B] transition-all group-hover:translate-x-1 uppercase"
              >
                DÉCOUVRIR
                <ArrowRight className="h-4 w-4 text-[#0F766E]" />
              </a>
            </div>
          </div>

          {/* Card 4: Needs Finder */}
          <div className="group flex min-h-[300px] flex-col justify-between rounded-2xl bg-[#EEF3FB] p-6 text-center shadow-sm border border-slate-200/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div>
              <h3 className="text-sm font-black tracking-wider text-[#0B2C6B] uppercase">
                QUELS SONT VOS BESOINS ?
              </h3>
              <p className="mt-1 text-[11px] leading-tight text-slate-500 px-2">
                Nous vous aidons à trouver la solution adaptée à votre sourire.
              </p>

              {/* 5 Icons Grid */}
              <div className="mt-6 grid grid-cols-5 gap-1.5">
                {/* Need 1 */}
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0B2C6B] shadow-xs border border-slate-200/60 transition-transform hover:scale-110 cursor-pointer">
                    <ToothOutlineIcon className="h-4 w-4" />
                  </div>
                  <span className="mt-2 text-[9px] font-semibold leading-tight text-slate-600">
                    Dents plus blanches
                  </span>
                </div>

                {/* Need 2 */}
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0B2C6B] shadow-xs border border-slate-200/60 transition-transform hover:scale-110 cursor-pointer">
                    <Sparkles className="h-4 w-4 text-sky-500" />
                  </div>
                  <span className="mt-2 text-[9px] font-semibold leading-tight text-slate-600">
                    Haleine fraîche
                  </span>
                </div>

                {/* Need 3 */}
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0B2C6B] shadow-xs border border-slate-200/60 transition-transform hover:scale-110 cursor-pointer">
                    <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="mt-2 text-[9px] font-semibold leading-tight text-slate-600">
                    Protection gencives
                  </span>
                </div>

                {/* Need 4 */}
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0B2C6B] shadow-xs border border-slate-200/60 transition-transform hover:scale-110 cursor-pointer">
                    <ToothOutlineIcon className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="mt-2 text-[9px] font-semibold leading-tight text-slate-600">
                    Prévention caries
                  </span>
                </div>

                {/* Need 5 */}
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0B2C6B] shadow-xs border border-slate-200/60 transition-transform hover:scale-110 cursor-pointer">
                    <ToothOutlineIcon className="h-4 w-4 text-indigo-600" />
                  </div>
                  <span className="mt-2 text-[9px] font-semibold leading-tight text-slate-600">
                    Sensibilité dentaire
                  </span>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="mt-6 flex justify-center">
              <a
                href="#routine"
                className="inline-flex items-center gap-2 rounded-full bg-[#0B2C6B] px-5 py-2.5 text-[11px] font-extrabold tracking-wider text-white shadow-md transition-all hover:bg-[#082255] hover:scale-105 active:scale-95 uppercase"
              >
                TROUVER MA ROUTINE
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Horizontal Value Props Banner */}
        <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm border border-slate-100">
          <div className="grid grid-cols-1 gap-6 divide-y divide-slate-100 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:divide-slate-200/80">
            
            {/* Feature 1 */}
            <div className="flex items-center gap-4 lg:px-6 first:pl-0">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#0B2C6B]">
                <FlaskConical className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <div>
                <h4 className="text-xs font-black tracking-wider text-[#0B2C6B] uppercase">
                  FORMULES INNOVANTES
                </h4>
                <p className="mt-0.5 text-[11px] leading-tight text-slate-500 font-normal">
                  Développées selon des standards scientifiques rigoureux
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-4 pt-4 sm:pt-0 lg:px-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#0B2C6B]">
                <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#0B2C6B]">
                  <span className="text-sm font-black leading-none">+</span>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-black tracking-wider text-[#0B2C6B] uppercase">
                  RECOMMANDÉ PAR LES PROS
                </h4>
                <p className="mt-0.5 text-[11px] leading-tight text-slate-500 font-normal">
                  Approuvé par les experts de la santé bucco-dentaire
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-4 pt-4 lg:pt-0 lg:px-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#0B2C6B]">
                <ShieldCheck className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <div>
                <h4 className="text-xs font-black tracking-wider text-[#0B2C6B] uppercase">
                  PROTECTION & EFFICACITÉ
                </h4>
                <p className="mt-0.5 text-[11px] leading-tight text-slate-500 font-normal">
                  Action complète pour des dents saines et des gencives protégées
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-center gap-4 pt-4 lg:pt-0 lg:px-6 last:pr-0">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#0B2C6B]">
                <Users className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <div>
                <h4 className="text-xs font-black tracking-wider text-[#0B2C6B] uppercase">
                  ENGAGEMENT
                </h4>
                <p className="mt-0.5 text-[11px] leading-tight text-slate-500 font-normal">
                  Pour une hygiène bucco-dentaire accessible à tous
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
