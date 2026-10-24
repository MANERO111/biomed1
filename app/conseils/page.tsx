"use client";

import { useState } from "react";
import ConseilsHero from "./components/hero";
import FeaturedArticles from "./components/featured-articles";
import ExploreThemes from "./components/explore-themes";
import FaqAndRoutine from "./components/faq-and-routine";
import ConseilsCta from "./components/conseils-cta";

export default function ConseilsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  return (
    <main className="font-sans antialiased text-slate-800 bg-white">
      <ConseilsHero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
      />
      <FeaturedArticles
        searchQuery={searchQuery}
        selectedTag={selectedTag}
      />
      <ExploreThemes />
      <FaqAndRoutine />
      <ConseilsCta />
    </main>
  );
}
