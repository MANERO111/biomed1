import ScienceHero from "./components/hero";
import TechSection from "./components/technologies";
import HowItWorks from "./components/how-it-works";
import LabStandards from "./components/lab-standards";
import ScienceCta from "./components/science-cta";

export const metadata = {
  title: "Science & Innovation | BioMED Pharmaceuticals",
  description: "La science au cœur de chaque sourire. Découvrez nos technologies clés : Microparticules de polissage dentaire et Microbilles de menthol.",
};

export default function ScienceInnovationPage() {
  return (
    <main className="font-sans antialiased text-slate-800 bg-white">
      <ScienceHero />
      <TechSection />
      <HowItWorks />
      <LabStandards />
      <ScienceCta />
    </main>
  );
}
