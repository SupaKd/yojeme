// Presentation.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/autoplay";

const images = ["img1.webp", "img2.webp", "img3.webp"];

function Presentation() {
  return (
    <section id="presentation" className="presentation">
      <motion.div
        className="text"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="text-container">
          <h2>Présentation</h2>
          <h3>À propos de l'association Yojeme</h3>
          <p>
            L'association <strong>Yojeme</strong> à pour objet le conseil, la
            conception, l'ingénierie ou l'organisation de projets
            socio-éducatifs, culturels ou sportifs. Sa finalité est l'aide à
            l'épanouissement humain par le développement de plusieurs axes qui
            sont :
          </p>
          <div className="list-container">
            <ul>
              <li>
                Des <strong>projets</strong> répondant à des besoins humains.
              </li>
              <li>
                Un réseau de partenaires partageant les <strong>valeurs</strong>{" "}
                de l'association.
              </li>
              <li>
                L'aide aux membres sur leurs projets en proposant son
                savoir-faire ou celui de son réseau.
              </li>
              <li>
                Des formations ou actions de formations à destination de ses
                membres ou de personnes y participant via l'association ou une
                structure membre.
              </li>
              <li>Le développement et l'innovation.</li>
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="slider"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={800}
          loop={images.length > 1}
          spaceBetween={20}
          slidesPerView={1}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img src={src} alt={`slide-${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}

export default Presentation;
