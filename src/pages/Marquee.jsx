import Marquee from "react-fast-marquee";

function Bande() {
  return (
    <Marquee speed={40} className="marquee" gradient={false}>
      <span className="separator">•</span>
      <p>
        Ensemble, construisons des projets éducatifs, culturels et humains qui ont du sens. Rejoignez l'élan de Yojeme !
      </p>
      <span className="separator">•</span>
      <p>
        Yojeme agit pour l’épanouissement humain à travers des projets solidaires, innovants et porteurs de sens.
      </p>
      <span className="separator">•</span>
      <p>
        Yojeme accompagne, forme et relie ceux qui œuvrent pour un monde plus humain, plus solidaire et plus créatif.
      </p>
    </Marquee>
  );
}

export default Bande;
