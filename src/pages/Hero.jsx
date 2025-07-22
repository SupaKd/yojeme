import React from "react";

function Hero() {
  return (
    <section className="hero">
      {/* Image de fond zoomable via CSS */}
      <div className="hero__background" />

      {/* Contenu texte */}
      <div className="hero__content">
        <h1>YOJEME</h1>
        <p>
          Nous accompagnons les jeunes dans les zones désertiques à travers des
          projets éducatifs et sociaux.
        </p>
        <button>Découvrir l'association</button>
      </div>
    </section>
  );
}

export default Hero;
