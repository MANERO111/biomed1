import AProposHero from "./components/hero";
import MissionVision from "./components/mission-vision";
import NosValeurs from "./components/nos-valeurs";
import ScienceAndMorocco from "./components/science-and-morocco";
import NosEngagements from "./components/nos-engagements";
import AProposCta from "./components/a-propos-cta";

export const metadata = {
  title: "À Propos | BioMED Pharmaceuticals",
  description: "Créer une meilleure hygiène bucco-dentaire, sourire après sourire. Découvrez l'histoire, la mission, les valeurs et les engagements de BioMED au Maroc.",
};

export default function AProposPage() {
  return (
    <main className="font-sans antialiased text-slate-800 bg-white">
      <AProposHero />
      <MissionVision />
      <NosValeurs />
      <ScienceAndMorocco />
      <NosEngagements />
      <AProposCta />
    </main>
  );
}
