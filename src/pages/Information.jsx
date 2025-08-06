import React from "react";
import { Link } from "react-router-dom";

function Informations() {
  return (
    <section className="informations">
      
        <h2 className="informations__title">Informations officielles</h2>

        <div className="informations__content">
          <p className="informations__item">
            <strong>N° SIRET de l’association :</strong> 945 270 817 00014
          </p>
          <p className="informations__item">
            <strong>Code APE :</strong> <strong>V94.99Z</strong>
          </p>
          <p className="informations__item">
            <strong>Mentions légales :</strong> <Link to="/mentions-legales">Voir la page</Link>
          </p>

          <p className="informations__item">
            <strong>Nous contacter :</strong> <Link to="/contact">Page contact</Link>
          </p>
        </div>
    </section>
  );
}

export default Informations;
