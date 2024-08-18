import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h1><Link to='/'>Bala Vardhan</Link></h1>
        <div 
          className={`${styles.menuIcon} ${isOpen ? styles.rotateOpen : styles.rotateClose}`}
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          {isOpen ? 'X' : '☰'}
        </div>
        <ul className={`${styles.menu} ${isOpen ? styles.showMenu : ''}`}>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
          <li><Link to="/skills" onClick={toggleMenu}>Skills</Link></li>
          <li><Link to="/experience" onClick={toggleMenu}>Experience</Link></li>
          <li><Link to="/education" onClick={toggleMenu}>Education</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
