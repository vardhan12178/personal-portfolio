import React from 'react';
import projects from '../data/projects.json';
import styles from '../styles/Projects.module.scss';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  return (
    <section className={styles.projectsSection}>
      <h2>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={project.imgUrl} alt={project.name} />
            </div>
            <h3>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
            <p className={styles.technologies}>
              <strong>Technologies:</strong> {project.technologies.join(', ')}
            </p>
            <div className={styles.buttons}>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="View on GitHub"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="View Live Demo"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;