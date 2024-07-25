// TO-DO: more validation checks

import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., send email, save to database)
    alert("Message submitted successfully!");
  };

  return (
    <div className="contact-us-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Subject:</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="form-control"
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      <div className="contact-info">
        <p>Email: support@stockportfolio.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Support Hours: Mon-Fri, 9 AM - 5 PM</p>
      </div>
      <div className="social-links">
        <h3>Follow Us</h3>
        <a href="https://facebook.com">Facebook</a> |{" "}
        <a href="https://twitter.com">Twitter</a> |{" "}
        <a href="https://linkedin.com">LinkedIn</a>
      </div>
    </div>
  );
};

export default ContactUs;
