import { motion } from "framer-motion";

function Present() {
  return (
    <section className="presentation">
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
          minima rerum. Blanditiis dicta, necessitatibus, cumque neque
          voluptatum in consequuntur voluptates dignissimos facilis dolorem quod
          nulla iusto qui porro obcaecati error officiis distinctio consequatur
          molestiae officia nam corporis eius? Sunt, consectetur aliquam! Ipsa,
          qui sint architecto ut pariatur dolorum iure sapiente. Adipisci alias
          provident cumque id sequi deleniti voluptatum voluptatibus amet, fugit
          eos! Temporibus illo, itaque fugit vero dignissimos unde obcaecati
          deleniti. quibusdam dolorem neque a maxime deleniti, eligendi beatae
          dolore. Architecto odit, doloribus expedita maxime eum veniam earum
          magni modi vero culpa. Ea, autem in.
        </p>
      </motion.div>

      <motion.div
        className="img"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <img src="ado.webp" alt="img-presentation" />
      </motion.div>
    </section>
  );
}

export default Present;
