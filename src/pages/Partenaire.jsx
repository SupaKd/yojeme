import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import classNames from "classnames";

// Exemple de logos (remplace par les vrais liens ou imports)
const partenaires = [
  { id: 1, name: "Partenaire A", logo: "/ado.webp" },
  { id: 2, name: "Partenaire B", logo: "/ado.webp" },
  { id: 3, name: "Partenaire C", logo: "/ado.webp" },
  { id: 4, name: "Partenaire D", logo: "/ado.webp" },
  { id: 5, name: "Partenaire E", logo: "/ado.webp" },
];

function Partenaires() {
  return (
    <section className="partenaires">
      <h2 className="partenaires__title">Nos partenaires officiels</h2>
      <div>
        <img src="palmier.webp" alt="img-partner" />

        {/* Marquee optionnel */}
        <Marquee
          pauseOnHover
          speed={30}
          gradient={false}
          className="partenaires__marquee"
        >
          {partenaires.map((partenaire) => (
            <img
              key={`marquee-${partenaire.id}`}
              src={partenaire.logo}
              alt={partenaire.name}
              className="partenaires__marquee-logo"
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

export default Partenaires;
