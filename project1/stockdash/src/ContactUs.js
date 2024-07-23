// src/components/ContactUs.js
import React, { useState } from "react";

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
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Subject: </label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div>
          <label>Message: </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div style={{ marginTop: "20px" }}>
        <p>Email: support@stockportfolio.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Support Hours: Mon-Fri, 9 AM - 5 PM</p>
      </div>
      <div style={{ marginTop: "20px" }}>
        <h3>Follow Us</h3>
        <a href="https://facebook.com">Facebook</a> |{" "}
        <a href="https://twitter.com">Twitter</a> |{" "}
        <a href="https://linkedin.com">LinkedIn</a>
      </div>
    </div>
  );
};

export default ContactUs;
