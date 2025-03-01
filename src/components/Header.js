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
          <Link to="/">Bala Vardhan</Link>
        </h1>
        <div
          className={`${styles.menuIcon} ${
            isOpen ? styles.rotateOpen : styles.rotateClose
          }`}
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`${styles.menu} ${isOpen ? styles.showMenu : ""}`}>
          <li>
            <Link
              to="/"
              onClick={closeMenu}
              className={location.pathname === "/" ? styles.active : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              onClick={closeMenu}
              className={location.pathname === "/projects" ? styles.active : ""}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              onClick={closeMenu}
              className={location.pathname === "/skills" ? styles.active : ""}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/experience"
              onClick={closeMenu}
              className={location.pathname === "/experience" ? styles.active : ""}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="/education"
              onClick={closeMenu}
              className={location.pathname === "/education" ? styles.active : ""}
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