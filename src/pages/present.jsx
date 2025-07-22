// Presentation.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/autoplay";

const images = ["img1.webp", "img2.webp", "img3.webp"];

function Presentation() {
  return (
    <section className="presentation" id="#present">
      <motion.div
        className="text"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2>Présentation</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, eius
          ducimus expedita, nulla dolorem aperiam vitae, itaque nihil quis ad
          labore dolorum modi doloribus? Ullam necessitatibus blanditiis iure
          minima rerumducimus expedita, nulla dolorem aperiam vitae, itaque
          nihil quis ad labore dolorum modi doloribus? Ullam necessitatibus
          blanditiis iure minima rerum...
        </p>
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
