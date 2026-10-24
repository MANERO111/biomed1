import Hero from './components/hero'
import NeedsSection from './components/needs'
import ProductShowcase from './components/productShowcase'
import ComparisonSection from './components/comparaison'
import FeaturesStrip from './components/fstrip'
import AvailabilitySection from './components/availablity'

export const metadata = {
  title: "Nos Produits | BioMED Pharmaceuticals",
  description: "Découvrez notre gamme de soins dentaires : BioMED Effective Whiteness et BioMED Extreme & Intense Freshness.",
};

export default function OurProductsPage() {
  return (
    <main className="font-sans antialiased text-slate-800 bg-white">
      <Hero />
      <NeedsSection />
      <ProductShowcase />
      <ComparisonSection />
      <FeaturesStrip />
      <AvailabilitySection />
    </main>
  );
}