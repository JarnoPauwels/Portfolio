import React, { useState } from 'react';
import '../ContactPage.css';
import NavBar from './NavBar';
 
const AboutPage: React.FC = () => {
  const downloadPdf = () => {
    // Replace 'your-pdf-file.pdf' with the actual URL of your PDF file
    const pdfUrl = process.env.PUBLIC_URL + '/CV - Jarno Pauwels.pdf';

    // Trigger the download
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'CV - Jarno Pauwels.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="contact-page">
      <NavBar />
      <div className="contact-content">
        <div className="contact-info">
          <h1>About me</h1>
          <p>
            I am a motivated Multimedia and Creative Technologies student looking for an internship to gain practical experience in the industry. Strong in digital media, graphic design, motion and web & app development. Creative, eager to learn and ready to contribute to innovative projects.
          </p>
        </div>
        <div className="contact-info">
          <h1>Experience</h1>
          <p>
            <b>2024</b> Bachelor Multimedia & Creatieve Technologie - Erasmus Brussels University of Applied Sciences and Arts
          </p>
          <p>
            <b>2019</b> Koninklijk Atheneum Asse
          </p>
          <button className='pdf-button' onClick={downloadPdf}>Download CV</button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
