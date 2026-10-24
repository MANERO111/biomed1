import React from "react";
import Hero from "@/app/homepage/components/hero";
import FeaturesSection from "@/app/homepage/components/features-section";
import AdviceSection from "@/app/homepage/components/advice-section";
import PharmacySection from "@/app/homepage/components/pharmacy-section";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <FeaturesSection />
      <AdviceSection />
      <PharmacySection />
    </main>
  );
}