import React, { useState, useRef } from 'react';
import '../ContactPage.css';
import NavBar from './NavBar';
import emailjs from '@emailjs/browser';

const ContactPage: React.FC = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const serviceId = 'service_sqxcing';
        const templateId = 'template_l5169at';
        const publicKey = '0DWFR9SBoa78jv38a';

        const templateParams = {
            name: name,
            email: email,
            to_name: 'Jarno',
            subject: subject,
            message: message
        }

        emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
            console.log('Email sent succesfully; ', response);
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
        }).catch((error) => {
            console.error('Error sending mail:', error)
        })
    }

  return (
    <div className="contact-page">
      <NavBar />
      <div className="contact-content">
        <div className="contact-info">
          <h1>Contact me</h1>
          <p>
            Get in touch and lets talk about your project!
          </p>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <input type="text" id="name" name="name" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required />

            <input type="email" id="email" name="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />

            <input type="text" id="subject" name="subject" placeholder='Subject' value={subject} onChange={(e) => setSubject(e.target.value)} required />

            <textarea id="message" name="message" rows={5} placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} required />

            <div className="contact-button-container">
              <button className='contact-button' type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
