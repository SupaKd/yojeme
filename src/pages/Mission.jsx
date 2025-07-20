import { HandHeart, Users, Leaf, Globe } from "lucide-react";

function Mission() {
  return (
    <section className="mission">
      <div className="container">
        <h2>Nos actions principales</h2>
        <div className="mission__grid">
          <div className="mission__card">
            <HandHeart size={40} />
            <h3>Soutien social</h3>
            <p>
              Accompagnement des jeunes en difficulté dans des zones rurales
              isolées.
            </p>
          </div>

          <div className="mission__card">
            <Users size={40} />
            <h3>Éducation</h3>
            <p>
              Mise en place d’ateliers et d’actions pédagogiques avec des
              professionnels.
            </p>
          </div>

          <div className="mission__card">
            <Leaf size={40} />
            <h3>Agriculture</h3>
            <p>
              Sensibilisation à une agriculture durable et respectueuse de
              l’environnement.
            </p>
          </div>

          <div className="mission__card">
            <Globe size={40} />
            <h3>Partenariats</h3>
            <p>
              Travail avec les ONG locales, les écoles et les familles pour un
              impact durable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
