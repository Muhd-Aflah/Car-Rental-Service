import React from "react";
import "../styles/styles.css";

function ContactPage() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>
        We’d love to hear from you! Whether you have a question, feedback, or
        need assistance with a booking, our team is here to help.
      </p>

      <div className="contact-info">
        <h2>📞 Get in Touch</h2>
        <ul>
          <li><strong>Phone:</strong> +91 9656212255</li>
          <li><strong>Email:</strong> support@carrental.com</li>
          <li><strong>Address:</strong> Kottakkal , Malappuram , Kerala , india </li>
        </ul>
      </div>

      <div className="contact-form">
        <h2>✉️ Send Us a Message</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
