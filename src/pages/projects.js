import React from "react";
import ProjectItem from "../components/projectitem";
import "../styles/projects.css";

const Projects = () => (
  <div className="projects">
    <h1>Mes Projets</h1>
    <ProjectItem
      title="Projet Print-it"
      description="Description = Dynamiser le site Internet statique d’une petite imprimerie"
      skills="Skills = Programmer en utilisant les fondamentaux de JavaScript et manipulation de code deja crée"
      link="https://kentana07.github.io/Java-script_open/"
      code="https://github.com/Kentana07/Java-script_open"
    />
    <ProjectItem
      title="Projet Nina Carducci-Portfolio"
      description="Description = Vous êtes développeur freelance et vous décidez de proposer vos services d’optimisation SEO à de nouveaux clients. 
                    Parmi vos prospects, il y a le site de Nina Carducci, une photographe "
      skills="Skills = optimiser le référencement d’un site, en améliorant sa performance et son accessibilité."
      link="https://kentana07.github.io/NinaCarducci-Projet-9/"
      code="https://github.com/Kentana07/NinaCarducci-Projet-9"
    />
  </div>
);

export default Projects;
