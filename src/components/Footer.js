import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  const handleScroll = () => {
    setShowScroll(window.scrollY > 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.socialLinks}>
          <a
            href="https://github.com/vardhan12178?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/bala-vardhan-pula-753b011b9"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
        <div className={styles.divider}></div>
        <p className={styles.copyRight}>
          © {new Date().getFullYear()} Bala Vardhan. All rights reserved.
        </p>
      </div>
      <div className={styles.scrollToTop}>
        {showScroll && (
          <button onClick={scrollToTop} aria-label="Scroll to top">
            <FaArrowUp />
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
