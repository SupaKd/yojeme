import React from "react";

// Composants importés normalement
import Hero from "../pages/Hero";
import Marquee from "../pages/Marquee";
import Present from "./present";
import About from "../pages/About";
import Partenaire from "../pages/Partenaire";
import Information from "../pages/Information";
import Mission from "./Mission";
import ImpactSection from "./ImpactSection";

function Home() {
  return (
    <main className="home">
      <Hero />
      <Marquee />
      <Present />

      {/* Affichage direct du composant Mission */}
      <Mission />
      <ImpactSection />

      <About />
      <Partenaire />
      <Information />
    </main>
  );
}

export default Home;
