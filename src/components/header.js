import React from "react";
import { Link } from "react-router-dom";
import '../styles/header.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/">Bienvenue</Link></li>
          <li><Link to="/about">A Propos</Link></li>
          <li><Link to="/projects">Mes Projets</Link></li>
          <li><Link to="/contact">Mes Contacts</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
