import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "../styles/Header.module.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h1>
          <Link
            to="/"
            onClick={closeMenu}
            aria-label="Go to Home"
            className={styles.logo}
          >
            Bala Vardhan
          </Link>
        </h1>
        <div
          className={`${styles.menuIcon} ${
            isOpen ? styles.rotateOpen : styles.rotateClose
          }`}
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
          tabIndex={0} // Ensures keyboard accessibility
          onKeyPress={(e) => e.key === "Enter" && toggleMenu()} // Keyboard support
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`${styles.menu} ${isOpen ? styles.showMenu : ""}`}>
          <li>
            <Link
              to="/"
              onClick={closeMenu}
              className={location.pathname === "/" ? styles.active : ""}
              aria-current={location.pathname === "/" ? "page" : null}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              onClick={closeMenu}
              className={location.pathname === "/projects" ? styles.active : ""}
              aria-current={location.pathname === "/projects" ? "page" : null}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              onClick={closeMenu}
              className={location.pathname === "/skills" ? styles.active : ""}
              aria-current={location.pathname === "/skills" ? "page" : null}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/experience"
              onClick={closeMenu}
              className={location.pathname === "/experience" ? styles.active : ""}
              aria-current={location.pathname === "/experience" ? "page" : null}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="/education"
              onClick={closeMenu}
              className={location.pathname === "/education" ? styles.active : ""}
              aria-current={location.pathname === "/education" ? "page" : null}
            >
              Education
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;