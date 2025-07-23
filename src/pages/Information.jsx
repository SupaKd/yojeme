import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Informations() {
  return (
    <section className="informations">
      <motion.div
        className="informations__container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="informations__title">Informations officielles</h2>

        <div className="informations__content">
          <p className="informations__item">
            <strong>N° SIRET de l’association :</strong> 945 270 817 00014
            <strong>Code APE :</strong> 94.99Z
          </p>

          <p className="informations__item">
            <strong>Mentions légales :</strong> <Link to="/mentions-legales">Voir la page</Link>
          </p>

          <p className="informations__item">
            <strong>Nous contacter :</strong> <Link to="/contact">Page contact</Link>
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default Informations;
