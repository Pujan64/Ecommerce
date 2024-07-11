// Contact.js
import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add code to send the contact form data to your server or email service
    // For example, you could use the Fetch API to send a POST request to your server
    fetch('/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, gender, contactNumber, email, message }),
    })
    .then((response) => response.json())
    .then((data) => {
        setSent(true);
      })
    .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="contact-form">
      <h2>Get in Touch</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <br />
        <label>
          Gender:
          <select value={gender} onChange={(event) => setGender(event.target.value)}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />
        <label>
          Contact Number:
          <input type="tel" value={contactNumber} onChange={(event) => setContactNumber(event.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <br />
        <label>
          Message:
          <textarea value={message} onChange={(event) => setMessage(event.target.value)} />
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
      {sent? <p>Thank you for contacting us! We'll get back to you soon.</p> : null}
    </div>
  );
}

export default Contact;
