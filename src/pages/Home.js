import React from 'react';
import styles from '../styles/Home.module.scss';
import Projects from '../components/Projects';

const Home = () => {
  return (
    <main className={styles.main}>
      <section className={styles.intro}>
        <h1>Bala Vardhan Pula</h1>
        <h3>Front End Developer</h3>
        <p>2.5 years of experience with React, Node, and Next.js</p>
        <div className={styles.cta}>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.resumeButton}
          >
            Download Resume
          </a>
          <a 
            href="https://wa.me/8688412181" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.contactButton}
          >
            Contact Me
          </a>
        </div>
      </section>
      <Projects />
    </main>
  );
};

export default Home;
