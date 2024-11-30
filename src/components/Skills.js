import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaBootstrap,
  FaPhp,
  FaAws,
} from 'react-icons/fa';
import {
  SiRedux,
  SiMongodb,
  SiTailwindcss,
  SiPostgresql,
} from 'react-icons/si';
import styles from '../styles/Skills.module.scss';

const skills = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNode /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Bootstrap', icon: <FaBootstrap /> },
  { name: 'SQL', icon: <SiPostgresql /> },
  { name: 'Redux', icon: <SiRedux /> },
  { name: 'PHP', icon: <FaPhp /> },
  { name: 'AWS', icon: <FaAws /> },
];

const Skills = () => {
  return (
    <section className={styles.skills}>
      <h2>Skills</h2>
      <div className={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillCard}>
            <div className={styles.icon}>{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
