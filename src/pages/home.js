import React from "react";
import "../styles/home.css";
import leftImage from "../styles/img/gauche.webp"; 
import rightImage from "../styles/img/droite.webp"; 

const Home = () => (
  <div className="home">
    <img src={leftImage} alt="Left Decoration" className="left-image" />
    <div className="content">
      <h1>Bienvenue sur mon Portfolio</h1>
      <p>Découvrez mes projets et compétences.</p>
      <h1>Intégrateur web</h1>
      <p>Globalement, le rôle de l'intégrateur Web, c'est de fabriquer les pages internet.</p>
      <p>Plus précisément, de prendre les maquettes graphiques et de les mettre en page pour le web.</p>
    </div>
    <img src={rightImage} alt="Right Decoration" className="right-image" />
  </div>
);

export default Home;
