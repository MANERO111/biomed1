import ContactHero from "./components/hero";
import ContactFormSection from "./components/contact-form-section";
import SupportAndFaq from "./components/support-and-faq";
import ContactCta from "./components/contact-cta";

export const metadata = {
  title: "Contact | BioMED Pharmaceuticals",
  description: "Nous sommes à votre écoute. Contactez l'équipe BioMED Pharmaceuticals pour toute question sur nos produits ou leur disponibilité en pharmacie au Maroc.",
};

export default function ContactPage() {
  return (
    <main className="font-sans antialiased text-slate-800 bg-white">
      <ContactHero />
      <ContactFormSection />
      <SupportAndFaq />
      <ContactCta />
    </main>
  );
}
