import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section className="hero" ref={heroRef}>
      {/* Image de fond zoomable */}
      <motion.div className="hero__background" style={{ scale: scaleBg }} />

      {/* Contenu texte */}
      <motion.div
        className="hero__content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>YOJEME</h1>
        <p>
          Nous accompagnons les jeunes dans les zones désertiques à travers des
          projets éducatifs et sociaux.
        </p>
        <button>Découvrir l'association</button>
      </motion.div>
    </section>
  );
}

export default Hero;
