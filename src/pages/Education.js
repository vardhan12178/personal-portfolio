import React from 'react';
import { FaGraduationCap, FaBuilding, FaSchool, FaHome } from 'react-icons/fa';
import styles from '../styles/Education.module.scss';

const Education = () => {
  return (
    <main className={styles.main}>
      <h2 className={styles.sectionHeading}>Education</h2>
      <section className={styles.educationSection} aria-label="Educational Background">
        <div className={styles.card} tabIndex={0}>
          <div className={styles.cardInner}>
            <div className={styles.cardFront}>
              <FaGraduationCap className={styles.icon} />
              <h3>IRC, CCBP Tech 4.0 Intensive Program</h3>
              <p>Mar 2021 - Nov 2021</p>
            </div>
            <div className={styles.cardBack}>
              <p>Full Stack Web Development</p>
              <p>Key Skills: React, Node.js, MongoDB</p>
            </div>
          </div>
        </div>

        <div className={styles.card} tabIndex={0}>
          <div className={styles.cardInner}>
            <div className={styles.cardFront}>
              <FaBuilding className={styles.icon} />
              <h3>Lakireddy Bali Reddy College of Engineering</h3>
              <p>2016 - 2020</p>
            </div>
            <div className={styles.cardBack}>
              <p>B.Tech in ECE [7.76 CGPA]</p>
            </div>
          </div>
        </div>

        <div className={styles.card} tabIndex={0}>
          <div className={styles.cardInner}>
            <div className={styles.cardFront}>
              <FaSchool className={styles.icon} />
              <h3>Sri Chaitanya Junior College</h3>
              <p>2014 - 2016</p>
            </div>
            <div className={styles.cardBack}>
              <p>Intermediate (M.P.C) [78%]</p>
            </div>
          </div>
        </div>

        <div className={styles.card} tabIndex={0}>
          <div className={styles.cardInner}>
            <div className={styles.cardFront}>
              <FaHome className={styles.icon} />
              <h3>Vikas School</h3>
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