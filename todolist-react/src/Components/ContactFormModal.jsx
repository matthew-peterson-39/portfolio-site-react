import React, { useState } from 'react';

function ContactFormModal({ isOpen, closeModal }) {
    const [email, setEmail] = useState('');
    const [emailIsValid, setEmailIsValid] = useState(true); // Initially, assume email is valid

    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail);
        setEmailIsValid(isValid);
    };

    // Check to make sure email is valid and protect against spam / malicious
    const handleSubmit = (event) => {
        event.preventDefault();
        if (emailIsValid) {
        // valid -> submit logic
        }   
        else {
            // invalid -> error
        }
    };
  
  
    return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Contact Me</h2>
            <form id="contact-form">
            <form id="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" required></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactFormModal;