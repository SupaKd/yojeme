import React from "react";

// Composants importés normalement
import Hero from "../pages/Hero";
import Marquee from "../pages/Marquee";
import Present from "./present";
import About from "../pages/About";
import Information from "../pages/Information";
import Mission from "./Mission";

function Home() {
  return (
    <main className="home">
      <Hero />
      <Marquee />
      <Present />

      <Mission />

      <About />
      <Information />
    </main>
  );
}

export default Home;
