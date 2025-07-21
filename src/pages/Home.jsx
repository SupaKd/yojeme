import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = lazy(() => import("../pages/Hero"));
const Marquee = lazy(() => import("../pages/Marquee"));
const Present = lazy(() => import("./present"));
const Mission = lazy(() => import("./Mission"));
const About = lazy(() => import("../pages/About"));
const Partenaire = lazy(() => import("../pages/Partenaire"));
const Information = lazy(() => import("../pages/Information"));

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
      

      <Suspense fallback={<div>Chargement Marquee...</div>}>
        <Marquee />
      </Suspense>

      <Suspense fallback={<div>Chargement Present...</div>}>
        <Present />
      </Suspense>

      {/* Lazy load Mission seulement si visible */}
      <div ref={missionRef}>
        {missionInView ? (
          <Suspense fallback={<div>Chargement Mission...</div>}>
            <Mission />
          </Suspense>
        ) : (
          // Placeholder pour ne pas casser la mise en page
          <div style={{ height: "500px" }} />
        )}
      </div>

      <Suspense fallback={<div>Chargement About...</div>}>
        <About />
      </Suspense>

      <Suspense fallback={<div>Chargement Partenaire...</div>}>
        <Partenaire />
      </Suspense>

      <Suspense fallback={<div>Chargement Information...</div>}>
        <Information />
      </Suspense>
    </motion.main>
  );
}

export default Home;
