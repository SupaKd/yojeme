import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import classNames from "classnames";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const links = [
    { path: "/", label: "Accueil" },
    { path: "/about", label: "À propos" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="header">
      <div className="container">
        <Link to="/">
        <img src="/ado.webp" alt="logo" className="logo" />
        </Link>

        <nav className={classNames("nav", { open: menuOpen })}>
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={location.pathname === link.path ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
          
        <div
          className={classNames("burger", { open: menuOpen })}
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </div>
      </div>

      {/* Animation Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
