import React from "react";
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
