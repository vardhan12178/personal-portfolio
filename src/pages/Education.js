import React from 'react';
import styles from '../styles/Education.module.scss';

const Education = () => {
  return (
    <main className={styles.main}>
      <h2>Education</h2>
      <section className={styles.educationSection}>
        <div className={styles.card}>
          <div className={styles.cardInner}>
            <div className={styles.cardFront}>
              <h3>
                <i className={`fas fa-graduation-cap ${styles.icon}`}></i>
                IRC, CCBP Tech 4.0 Intensive Program
              </h3>
              <p>Mar 2021 - Nov 2021</p>
            </div>
            <div className={styles.cardBack}>
              <p>Full Stack Web Development</p>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardInner}>
            <div className={styles.cardFront}>
              <h3>
                <i className={`fas fa-building ${styles.icon}`}></i>
                Lakireddy Bali Reddy College of Engineering
              </h3>
              <p>2016 - 2020</p>
            </div>
            <div className={styles.cardBack}>
              <p>B.Tech in ECE [7.76 CGPA]</p>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardInner}>
            <div className={styles.cardFront}>
              <h3>
                <i className={`fas fa-school ${styles.icon}`}></i>
                Sri Chaitanya Junior College
              </h3>
              <p>2014 - 2016</p>
            </div>
            <div className={styles.cardBack}>
              <p>Intermediate (M.P.C) [78%]</p>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardInner}>
            <div className={styles.cardFront}>
              <h3>
                <i className={`fas fa-home ${styles.icon}`}></i>
                Vikas School
              </h3>
              <p>2014</p>
            </div>
            <div className={styles.cardBack}>
              <p>S.S.C [9.5 GPA]</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Education;