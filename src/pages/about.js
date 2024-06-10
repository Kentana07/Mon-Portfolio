import React from "react";
import backgroundImage1 from "../styles/img/téléchargement.webp";
import backgroundImage2 from "../styles/img/langue2_.webp";
import backgroundImage3 from "../styles/img/langue3.webp";
import backgroundImage4 from "../styles/img/langue.webp";
import "../styles/about.css";

const About = () => (
  <div className="about">
    <h1>À propos de moi</h1>
    
    <section>
      <h2>Formation :</h2>
      <div className="timeline">
        <div className="timeline-item">
          <h3>2019</h3>
          <p>
            Bac (général, technique ou professionnel) ou équivalent - Sciences et
            technologies de l'industrie et du développement durable, spécialité SIN
          </p>
        </div>
        <div className="timeline-item">
          <h3>2020</h3>
          <p>1e année BTS SISN 1er trimestre BTS SISN au lycée Astier Aubenas</p>
        </div>
        <div className="timeline-item">
          <h3>2024</h3>
          <p>
            Openclassrooms ; Développeur intégrateur web - code NSF 326t - Diplôme de
            niveau 5 (bac +2) - certification professionnelle enregistrée au
            Répertoire National des Certifications Professionnelles (RNCP)
          </p>
        </div>
      </div>
    </section>
    
    <section>
      <h2>Compétences :</h2>
      <p>
        Système embarqué, Établir un cahier des charges, Concevoir une application
        web, Informatique scientifique et technique, HTML, CSS, SASS, JavaScript,
        React & Redux, les appels API, Visual Studio Code, le responsive design,
        Git & GitHub
      </p>
    </section>
    <div className="images-container">
      <img src={backgroundImage1} alt="Projet 1" />
      <img src={backgroundImage2} alt="Projet 2" />
      <img src={backgroundImage3} alt="Projet 3" />
      <img src={backgroundImage4} alt="Projet 4" />
    </div>
    
    <section>
      <h2>Savoir-être :</h2>
      <p>Curiosité, Autonomie, Prise de recul, Rigueur</p>
    </section>
    
    <section>
      <h2>Langues :</h2>
      <p>Anglais : Courant</p>
      <p>Espagnol : Débutant</p>
      <p>Japonais : Débutant</p>
    </section>
  </div>
);

export default About;
