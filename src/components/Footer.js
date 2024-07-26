import React from 'react';
import styles from '../styles/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Bala Vardhan. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
