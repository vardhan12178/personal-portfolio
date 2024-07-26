import React from 'react';
import projects from '../data/projects.json';
import styles from '../styles/Projects.module.scss';

const Projects = () => {
  return (
    <section className={styles.projectsSection}>
      <h2 >Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <img src={project.imgUrl} alt={project.name} />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
