import React from 'react';
import styles from '../styles/Experience.module.scss';
import { FaLaptopCode, FaTachometerAlt, FaCode, FaProjectDiagram, FaUsers } from 'react-icons/fa';

const Experience = () => {
  return (
    <main className={styles.main}>
      <h2>Experience</h2>
      <section className={styles.experienceSection}>
        <div className={styles.card}>
          <h3>
            <FaLaptopCode className={styles.icon} />
            Front-End Developer at TCS
          </h3>
          <p>Dec 2021 - Jun 2024</p>
          <p>
            As a Front-End Developer at TCS, I worked on various client projects, focusing on creating responsive and user-friendly web applications using modern technologies such as React, JavaScript, and CSS.
          </p>
          <div className={styles.rolesSection}>
            <h4>Roles & Responsibilities</h4>
            <div className={styles.roleCard}>
              <FaTachometerAlt className={styles.icon} />
              <p>Designed and implemented user interfaces for various web applications, ensuring responsive and user-friendly designs.</p>
            </div>
            <div className={styles.roleCard}>
              <FaCode className={styles.icon} />
              <p>Optimized code for better performance and maintainability, following best practices and coding standards.</p>
            </div>
            <div className={styles.roleCard}>
              <FaProjectDiagram className={styles.icon} />
              <p>Managed project timelines and collaborated with cross-functional teams to ensure timely delivery of features and bug fixes.</p>
            </div>
            <div className={styles.roleCard}>
              <FaUsers className={styles.icon} />
              <p>Worked closely with designers, backend developers, and stakeholders to align on project goals and deliverables.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Experience;
