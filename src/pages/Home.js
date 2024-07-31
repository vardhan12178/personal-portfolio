import React from 'react';
import styles from '../styles/Home.module.scss';
import Projects from '../components/Projects';

const Home = () => {
  return (
    <main className={styles.main}>
      <section className={styles.intro}>
        <h1 className={styles.heading}>Bala Vardhan Pula</h1>
        <h3 className={styles.subheading}>Front End Developer</h3>
        <p>
          Passionate front-end developer with 2.5 years of hands-on experience 
          in building responsive, user-friendly web applications using React, 
          Node, and Next.js.
        </p>
        <div className={styles.cta}>
          <a 
            href="/resume.pdf" 
            download="resume.pdf" 
            className={styles.resumeButton}
          >
            Download My Resume
          </a>
          <a 
            href="https://wa.me/8688412181" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.contactButton}
          >
            Let's Connect
          </a>
        </div>
      </section>
      <Projects />
    </main>
  );
};

export default Home;
