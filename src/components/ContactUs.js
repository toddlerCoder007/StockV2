import React, { useState } from "react";
import Joi from "joi";
import "./ContactUs.css";

const ContactUs = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState("");

    const schema = Joi.object({
        name: Joi.string().trim().min(3).required().messages({
            "string.empty": "Name is required",
            "string.min": "Name should be at least 3 characters long",
        }),
        email: Joi.string().email({ tlds: {allow: false}}).required().messages({
            "string.empty": "Email is required",
            "string.email": "Invalid email format"
        }),
        subject: Joi.string().trim().required().messages({
            "string.empty": "Subject is required"
        }),
        message: Joi.string().trim().min(10).required().messages({
            "string.empty": "Message is required",
            "string.min": "Message must be at least 10 characters long",
          }),
        });
      
        const validateForm = () => {
          const formData = {
            name,
            email,
            subject,
            message,
          };
      
          const { error } = schema.validate(formData, { abortEarly: false });
      
          if (error) {
            const formErrors = {};
            error.details.forEach((detail) => {
              formErrors[detail.path[0]] = detail.message;
            });
            return formErrors;
          }
      
          return {};
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          const formErrors = validateForm();
          if (Object.keys(formErrors).length === 0) {
            // Form is valid, proceed with submission logic
            alert("Message submitted successfully!");
          } else {
            setErrors(formErrors);
          }
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
                {errors.name && <p className="error">{errors.name}</p>}
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <div className="form-group">
                <label>Subject:</label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="form-control"
                />
                {errors.subject && <p className="error">{errors.subject}</p>}
              </div>
              <div className="form-group">
                <label>Message:</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="form-control"
                ></textarea>
                {errors.message && <p className="error">{errors.message}</p>}
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
            {/* Rest of the component */}
          </div>
        );
      };
      
      export default ContactUs;