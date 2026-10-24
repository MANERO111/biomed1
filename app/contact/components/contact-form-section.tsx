"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Mail, 
  Send, 
  Truck, 
  MapPin, 
  ArrowRight, 
  CheckCircle2 
} from "lucide-react";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        nom: "",
        email: "",
        telephone: "",
        sujet: "",
        message: "",
      });
    }, 4000);
  };

  return (
    <section id="formulaire" className="w-full bg-[#f8fbfe] py-16 lg:py-24 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-3xl bg-white border border-blue-100/80 shadow-xl shadow-blue-900/5 p-7 sm:p-10"
          >
            {/* Header with Mail Icon */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-blue-50 text-[#0B2C6B] flex items-center justify-center shrink-0 border border-blue-100">
                <Mail className="h-6 w-6" strokeWidth={1.8} />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-[#0B2C6B] tracking-tight">
                  Envoyez-nous un message
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 font-normal">
                  Remplissez le formulaire ci-dessous. Notre équipe vous répondra dans les meilleurs délais.
                </p>
              </div>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center justify-center text-center bg-teal-50/60 rounded-2xl border border-teal-200 p-8"
              >
                <div className="h-14 w-14 rounded-full bg-[#00828A] text-white flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-black text-[#0B2C6B]">Message envoyé avec succès !</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-md">
                  Merci de nous avoir contactés. Nos équipes scientifiques et commerciales vous répondront très rapidement.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nom complet */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Nom complet <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nom}
                      onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                      placeholder="Votre nom"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-[#0B2C6B] focus:ring-2 focus:ring-[#0B2C6B]/15 outline-none transition-all"
                    />
                  </div>

                  {/* Adresse email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Adresse email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Votre email"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-[#0B2C6B] focus:ring-2 focus:ring-[#0B2C6B]/15 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Téléphone */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Téléphone <span className="text-slate-400 font-normal">(optionnel)</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.telephone}
                      onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                      placeholder="Votre numéro"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-[#0B2C6B] focus:ring-2 focus:ring-[#0B2C6B]/15 outline-none transition-all"
                    />
                  </div>

                  {/* Sujet */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Sujet <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={formData.sujet}
                      onChange={(e) => setFormData({ ...formData, sujet: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-800 focus:bg-white focus:border-[#0B2C6B] focus:ring-2 focus:ring-[#0B2C6B]/15 outline-none transition-all cursor-pointer"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="information-produits">Information sur les produits</option>
                      <option value="disponibilite-pharmacie">Disponibilité en pharmacie</option>
                      <option value="partenariat-professionnel">Partenariat professionnel / Pharmacien</option>
                      <option value="reclamation-service">Question médicale / Service client</option>
                      <option value="autre">Autre demande</option>
                    </select>
                  </div>
                </div>

                {/* Votre message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Votre message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Écrivez votre message ici..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-[#0B2C6B] focus:ring-2 focus:ring-[#0B2C6B]/15 outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full mt-2 inline-flex items-center justify-center gap-3 rounded-full bg-[#0B2C6B] hover:bg-[#082255] px-8 py-4 text-xs sm:text-sm font-extrabold tracking-wider text-white shadow-lg shadow-[#0B2C6B]/20 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  ENVOYER LE MESSAGE
                </button>
              </form>
            )}
          </motion.div>

          {/* Right Column: 2 Cards (Disponible au Maroc & Retrouvez BioMED) (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Card 1: Disponible au Maroc & ICG */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl bg-white border border-blue-100 shadow-md shadow-blue-900/5 p-7 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl bg-blue-50 text-[#0B2C6B] flex items-center justify-center shrink-0">
                  <Truck className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-black text-[#0B2C6B]">
                  Disponible au Maroc
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Les produits BioMED sont distribués au Maroc par Intelligence Cosmétique Groupe,
                afin de rendre l&rsquo;innovation en hygiène bucco-dentaire accessible à travers
                un réseau de pharmacies et parapharmacies partenaires.
              </p>

              {/* ICG Branding & Location Indicator */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <div className="inline-flex items-center gap-2 select-none">
                  <span className="text-2xl font-black tracking-tight text-[#07225B]">
                    ICG
                  </span>
                  <div className="flex flex-col text-[7.5px] font-bold tracking-wider text-[#07225B] uppercase leading-[1.15]">
                    <span>INTELLIGENCE</span>
                    <span>COSMÉTIQUE GROUPE</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-bold text-[#00828A]">
                  <MapPin className="h-4 w-4 text-[#00828A]" />
                  Maroc
                </div>
              </div>
            </motion.div>

            {/* Card 2: Retrouvez BioMED près de chez vous */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="rounded-3xl bg-white border border-teal-100 shadow-md shadow-teal-900/5 p-7 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl bg-teal-50 text-[#00828A] flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-black text-[#0B2C6B]">
                  Retrouvez BioMED près de chez vous
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Découvrez les pharmacies et parapharmacies partenaires proposant
                les produits BioMED à travers le Maroc.
              </p>

              <div className="mt-6">
                <a
                  href="#trouver-en-pharmacie"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#00828A] hover:bg-[#006e75] px-6 py-3.5 text-xs font-extrabold tracking-wider text-white shadow-md shadow-[#00828A]/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  TROUVER UNE PHARMACIE
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
