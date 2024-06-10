import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/contactform.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_cixqloq",
        "template_wvkkojg",
        formData,
        "IjSijs_cOtRPqwmjs"
      )
      .then((response) => {
        setSuccessMessage("Message envoyé avec succès !");
        setErrorMessage("");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        setErrorMessage("Une erreur est survenue, veuillez réessayer.");
        setSuccessMessage("");
      });
  };

  return (
    <div className="contact-form-container">
      <h2>Contactez-nous</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </div>
        <button type="submit">Envoyer</button>
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
