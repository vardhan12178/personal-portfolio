import React from 'react';
import styles from '../styles/Experience.module.scss';
import { FaLaptopCode, FaTachometerAlt, FaCode, FaProjectDiagram, FaUsers } from 'react-icons/fa';

const Experience = () => {
  return (
    <main className={styles.main}>
      <h2 className={styles.sectionHeading}>Experience</h2>
      <section className={styles.experienceSection} aria-label="Work Experience">
        <div className={styles.card}>
          <h3 className={styles.jobTitle}>
            <FaLaptopCode className={styles.icon} />
            Front-End Developer at TCS
          </h3>
          <p className={styles.duration}>Dec 2021 - Jun 2024</p>
          <p className={styles.description}>
            As a Front-End Developer at TCS, I worked on various client projects, focusing on creating responsive and user-friendly web applications using modern technologies such as React, JavaScript, and CSS.
          </p>
          <div className={styles.rolesSection}>
            <h4 className={styles.rolesHeading}>Roles & Responsibilities</h4>
            <div className={styles.roleCard} tabIndex={0}>
              <FaTachometerAlt className={styles.icon} />
              <p>Designed and implemented user interfaces for various web applications, ensuring responsive and user-friendly designs.</p>
            </div>
            <div className={styles.roleCard} tabIndex={0}>
              <FaCode className={styles.icon} />
              <p>Optimized code for better performance and maintainability, following best practices and coding standards.</p>
            </div>
            <div className={styles.roleCard} tabIndex={0}>
              <FaProjectDiagram className={styles.icon} />
              <p>Managed project timelines and collaborated with cross-functional teams to ensure timely delivery of features and bug fixes.</p>
            </div>
            <div className={styles.roleCard} tabIndex={0}>
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