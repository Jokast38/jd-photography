import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_48btisz",     // à remplacer par ton service ID EmailJS
        "template_slykp0f",    // à remplacer par ton template ID EmailJS
        form.current,
        "Ddy8lhHHXB_yOwo-y"       // à remplacer par ta clé publique EmailJS
      )
      .then(
        () => {
          alert("Message envoyé !");
          form.current.reset();
        },
        (error) => {
          alert("Erreur lors de l'envoi : " + error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contactez-moi</h1>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="contact-field">
          <label className="contact-label">Nom</label>
          <input type="text" name="name" required className="contact-input" placeholder="Votre Nom" />
        </div>
        <div className="contact-field">
          <label className="contact-label">Email</label>
          <input type="email" name="email" required className="contact-input" placeholder="email@example.com" />
        </div>
        <div className="contact-field">
          <label className="contact-label">Message</label>
          <textarea name="message" rows="5" required className="contact-textarea" placeholder="Votre Message ..."></textarea>
        </div>
        <button type="submit" className="contact-button">Envoyer</button>
      </form>
    </div>
  );
}