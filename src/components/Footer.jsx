import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="footer">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="footer__top">
          <div className="footer__logo">
            <img src="/logo-yojeme.webp" alt="logo" />
            <p>Agir pour un avenir meilleur</p>
          </div>

          <nav className="footer__nav">
            <Link to="/">Accueil</Link>
            <Link to="/about">À propos</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/mention">Mentions légales</Link>
          </nav>

          <div className="footer__socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f" />
            </a>
            
            <a href="mailto:contact@monassociation.org">
              <i className="fas fa-envelope" />
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} YOJEME. Tous droits réservés.</p>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
