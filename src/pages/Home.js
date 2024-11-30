import React from 'react';
import styles from '../styles/Home.module.scss';
import Projects from '../components/Projects';

const Home = () => {
  const fileID = "1gKwRppgqVM7nf7Z4hOIvyh-ibUP3O368";
  const resumeUrl = `https://drive.google.com/uc?id=${fileID}`;

  const handleDownloadResume = () => {
    window.open(resumeUrl, '_blank');
  };

  return (
    <main className={styles.main}>
      <section className={styles.intro}>
        <h1 className={styles.heading}>Bala Vardhan Pula</h1>
        <h3 className={styles.subheading}>Full Stack Developer</h3>
<p>
  Passionate full-stack developer with 3 years of hands-on experience 
  in building responsive, user-friendly web applications using React, 
  Node.js, and Next.js, along with backend development expertise.
</p>

        <div className={styles.cta}>
          <button
            onClick={handleDownloadResume}
            className={styles.resumeButton}
          >
            Download My Resume
          </button>
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
