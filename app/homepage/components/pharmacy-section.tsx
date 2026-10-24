import React from "react";
import { MapPin, Building2, ShieldCheck, CheckCircle, ArrowRight, Store } from "lucide-react";

export default function PharmacySection() {
  const CITIES = [
    "Casablanca",
    "Rabat",
    "Marrakech",
    "Tanger",
    "Fès",
    "Agadir",
    "Oujda",
    "Meknès",
  ];

  return (
    <section
      id="trouver-en-pharmacie"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#F4F8FD] to-[#EDF3FC] py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-100"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 -mr-40 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -ml-40 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[90%] space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-extrabold tracking-wider text-emerald-800 uppercase border border-emerald-200">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            SECTION PHARMACIE • DISTRIBUTION OFFICIELLE
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0B2C6B]">
            Disponible au Maroc
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Les produits BioMED sont distribués au Maroc par{" "}
            <span className="font-bold text-[#0B2C6B]">
              Intelligence Cosmétique Groupe (ICG)
            </span>{" "}
            et disponibles dans les pharmacies et parapharmacies partenaires.
          </p>
        </div>

        {/* Feature Highlights & Partner Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Official Distribution by ICG */}
          <div className="rounded-2xl bg-white p-7 shadow-sm border border-slate-100/80 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#0B2C6B]">
                  <Building2 className="h-6 w-6" strokeWidth={1.75} />
                </div>
                {/* ICG Emblem Badge */}
                <div className="inline-flex items-center gap-1.5 rounded-lg bg-slate-50 px-2.5 py-1 border border-slate-200/70">
                  <span className="text-xs font-black tracking-tight text-[#0B2C6B]">ICG</span>
                  <span className="text-[8px] font-bold text-slate-500 tracking-wider">OFFICIEL</span>
                </div>
              </div>

              <h3 className="text-base font-black text-[#0B2C6B] uppercase tracking-wide">
                Distribution Exclusive
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">
                Garantie de traçabilité, de conformité aux normes médicales et d’authenticité de chaque produit BioMED distribué au Maroc.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#0B2C6B]">
              <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>100% Produits certifiés</span>
            </div>
          </div>

          {/* Card 2: National Network */}
          <div className="rounded-2xl bg-white p-7 shadow-sm border border-slate-100/80 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                  <Store className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                  Partout au Maroc
                </span>
              </div>

              <h3 className="text-base font-black text-[#0B2C6B] uppercase tracking-wide">
                Pharmacies & Parapharmacies
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">
                Retrouvez notre gamme complète dans votre officine de proximité ou chez nos enseignes parapharmaceutiques partenaires.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#0B2C6B]">
              <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>Plus de 500 points de vente</span>
            </div>
          </div>

          {/* Card 3: Pharmacist Expertise */}
          <div className="rounded-2xl bg-white p-7 shadow-sm border border-slate-100/80 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
                  <ShieldCheck className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#0B2C6B]">
                  Conseil Expert
                </span>
              </div>

              <h3 className="text-base font-black text-[#0B2C6B] uppercase tracking-wide">
                Recommandé par les Professionnels
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">
                Bénéficiez du conseil avisé de votre pharmacien pour choisir le dentifrice et le soin bucco-dentaire adapté à votre besoin.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#0B2C6B]">
              <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>Expertise & écoute</span>
            </div>
          </div>

        </div>

        {/* Pharmacy Finder Banner with CTA */}
        <div className="rounded-3xl bg-[#0B2C6B] p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          {/* Subtle decorative circles */}
          <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-blue-500/20 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-teal-500/15 blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center lg:text-left space-y-3">
              <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest text-emerald-300 uppercase">
                <MapPin className="h-4 w-4 text-emerald-400" />
                GÉOLOCALISATION OFFICINES
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-tight">
                Trouvez le point de vente le plus proche de chez vous
              </h3>
              <p className="text-xs sm:text-sm text-blue-100/90 font-normal leading-relaxed">
                Recherchez parmi nos pharmacies et parapharmacies agréées dans votre ville au Maroc et bénéficiez de notre conseil personnalisé.
              </p>

              {/* City quick pills */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-1.5">
                {CITIES.map((city) => (
                  <span
                    key={city}
                    className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white/90 backdrop-blur-xs border border-white/10"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="shrink-0">
              <a
                href="#localiser"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-xs sm:text-sm font-black tracking-wider text-[#0B2C6B] shadow-lg transition-all hover:bg-emerald-50 hover:text-emerald-900 hover:scale-105 active:scale-95 uppercase"
              >
                <MapPin className="h-4 w-4 text-emerald-600" />
                TROUVER UNE PHARMACIE
                <ArrowRight className="h-4 w-4 text-[#0B2C6B]" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
