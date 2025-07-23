import { HandHeart, Users, Leaf, Globe } from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // décalage entre les cartes
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

function Mission() {
  const cards = [
    {
      icon: <HandHeart size={40} />,
      title: "Soutien social",
      desc: "Accompagnement des jeunes en difficulté dans des zones rurales isolées.",
    },
    {
      icon: <Users size={40} />,
      title: "Éducation",
      desc: "Mise en place d’ateliers et d’actions pédagogiques avec des professionnels.",
    },
    {
      icon: <Leaf size={40} />,
      title: "Agriculture",
      desc: "Sensibilisation à une agriculture durable et respectueuse de l’environnement.",
    },
    {
      icon: <Globe size={40} />,
      title: "Partenariats",
      desc: "Travail avec les entreprises locales pour un impact durable.",
    },
  ];

  return (
    <section className="mission">
      <div className="container">
        <h2>Nos actions principales</h2>
        <div className="mission__grid">
          {cards.map(({ icon, title, desc }, i) => (
            <motion.div
              className="mission__card"
              key={title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              {icon}
              <h3>{title}</h3>
              <p>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Mission;
