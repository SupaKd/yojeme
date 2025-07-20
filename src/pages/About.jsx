import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Hook simple pour détecter si on est sur un écran mobile
function useIsMobile(maxWidth = 767) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= maxWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= maxWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [maxWidth]);

  return isMobile;
}

// Données fictives
const teamMembers = [
  { name: "Ali", role: "Educateur", img: "/ado.webp" },
  { name: "Sofia", role: "Médecin", img: "/ado.webp" },
  { name: "Mehdi", role: "Animateur", img: "/ado.webp" },
  { name: "Sarah", role: "Assistante sociale", img: "/ado.webp" },
];

function Equipe() {
  const isMobile = useIsMobile();

  return (
    <section className="equipe">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>
          <Users size={28} /> Notre Équipe
        </h2>
        <p>Découvrez les professionnels engagés pour le bien-être des enfants.</p>

        {isMobile ? (
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="equipe__slider"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="equipe__card"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img src={member.img} alt={member.name} />
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="equipe__grid">
            {teamMembers.map((member, index) => (
              <motion.div
                className="equipe__card"
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <img src={member.img} alt={member.name} />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
    
  );
}

export default Equipe;
