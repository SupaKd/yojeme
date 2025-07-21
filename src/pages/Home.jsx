import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Importations directes des composants
import Hero from "../pages/Hero";
import Marquee from "../pages/Marquee";
import Present from "./present";
import Mission from "./Mission";
import About from "../pages/About";
import Partenaire from "../pages/Partenaire";
import Information from "../pages/Information";

function Home() {
  // Hook intersection observer pour Mission
  const { ref: missionRef, inView: missionInView } = useInView({
    triggerOnce: true,
    rootMargin: "200px",
  });

  return (
    <motion.main
      className="home"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Hero />
      <Marquee />
      <Present />

      {/* Affiche Mission seulement si visible */}
      <div ref={missionRef}>
        {missionInView ? <Mission /> : <div style={{ height: "500px" }} />}
      </div>

      <About />
      <Partenaire />
      <Information />
    </motion.main>
  );
}

export default Home;
