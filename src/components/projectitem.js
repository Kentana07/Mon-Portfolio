import React from 'react';
import '../styles/projectitem.css';

const ProjectItem = ({ title, description, skills, link }) => (
  <div className="project-item">
    <h2>{title}</h2>
    <p>{description}</p>
    <p>{skills}</p>
    <a href={link} target="_blank" rel="noopener noreferrer">Voir le projet</a>
  </div>
);

export default ProjectItem;
