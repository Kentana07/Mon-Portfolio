import React from "react";
import '../styles/contact.css';
import { Link } from "react-router-dom";

const Contact = () => (
  <div className="contact">
    <h1>Contactez-moi</h1>
    <p>Email :   Kellian07@gmail.com </p>
    <h2><Link to="/contact-form">M'envoyer un message</Link></h2>
  </div>
);

export default Contact;
