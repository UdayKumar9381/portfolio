// src/components/ContactSection.js
import React from 'react';
import './Contactsection.css'; // To add specific styles later

function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <h2>GET IN TOUCH</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default ContactSection;
