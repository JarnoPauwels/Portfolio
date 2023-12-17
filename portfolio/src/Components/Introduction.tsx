import React from 'react';

const Introduction: React.FC = () => {
  return (
    <div className="introduction">
      <div>
        <h1>Jarno Pauwels</h1>
        <h2>Web & Mobile Developer</h2>
        <a href="https://github.com/JarnoPauwels" target="_blank" rel="noopener noreferrer"><img src="../icons/github.png" alt="Github Logo" /></a>
        <a href="https://www.linkedin.com/in/jarno-pauwels-4592a81b9/" target="_blank" rel="noopener noreferrer"><img src="../icons/linkedin.png" alt="Linkedin Logo" /></a>
        {/* <a href="">Linkedin</a> */}
      </div>
    </div>
  );
};

export default Introduction;
