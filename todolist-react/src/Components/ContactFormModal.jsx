import React, { useState } from 'react';

function ContactFormModal({ isOpen, closeModal }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('');

    const [emailIsValid, setEmailIsValid] = useState(true); // Initially, assume email is valid    


    // Check to make sure email is valid and protect against spam / malicious
    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);  //check email 
        console.log(event.name.value)
        if (emailIsValid) {
          console.log('valid')
        // valid -> submit logic
        // fs.writeFile(`${}`)
        }   
        else {
            // invalid -> error
            console.log('valid')
        }
    };
    
    return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Contact Me</h2>
            <form onSubmit={(e) => handleSubmit(e.target.value)} id="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" 
                  id="name" 
                  name="name" 
                  onChange={e => setName(e.target.value)}
                  required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" 
                  id="email" 
                  name="email" 
                  onChange={e => setEmail(e.target.value)} 
                  required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" 
                  name="message" 
                  rows="4" 
                  onChange={e => setMessage(e.target.value)} 
                  required />
              </div>
              <button id='submit-btn' type='submit'>Send Message</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactFormModal;