import React from 'react';
import styles from '../styles/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.socialLinks}>
          <a 
            href="https://github.com/vardhan12178?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <i className="fab fa-github"></i>
          </a>
          <a 
            href="https://www.linkedin.com/in/bala-vardhan-pula-753b011b9"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <p className={styles.copyRight}>© {new Date().getFullYear()} Bala Vardhan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
