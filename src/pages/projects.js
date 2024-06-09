import React from "react";
import ProjectItem from "../components/projectitem";
import "../styles/projects.css";

const Projects = () => (
  <div className="projects">
    <h1>Mes Projets</h1>
    <ProjectItem
      title="Projet Nina Carducci-Portfolio"
      description="Description = Vous êtes développeur freelance et vous décidez de proposer vos services d’optimisation SEO à de nouveaux clients. 
                    Parmi vos prospects, il y a le site de Nina Carducci, une photographe "
      skills="Skills = optimiser le référencement d’un site, en améliorant sa performance et son accessibilité."
      link="https://kentana07.github.io/NinaCarducci-Projet-9/"
    />
    <ProjectItem
      title="Projet 2"
      description="Description du projet 2"
      skills="Compétences développées"
      link="http://github.com/your-repo/project2"
    />
  </div>
);

export default Projects;
