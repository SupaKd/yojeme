import { motion } from "framer-motion";

import Hero from "../pages/Hero";
import Marquee from "../pages/Marquee";
import Present from "./present";
import Mission from "./Mission";
import About from "../pages/About";
import Partenaire from "../pages/Partenaire";
import Information from "../pages/Information";

function Home() {
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
      <Mission />
      <About />
      <Partenaire />
      <Information />
    </motion.main>
  );
}

export default Home;
