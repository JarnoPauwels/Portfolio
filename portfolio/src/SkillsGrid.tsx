import React from 'react';
import './App.css';

const SkillsGrid: React.FC = () => {
    const skills = ['https://placehold.co/400', 'https://placehold.co/400', 'https://placehold.co/400', 'https://placehold.co/400', 'https://placehold.co/400'];
  
    return (
      <div className='skills-section'>
        <div className="skills-container">
          <div className="skills-title">
            <h1>Skills</h1> 
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <img key={index} src={skill} alt={`Skill ${index + 1}`} className="skill-logo" />
            ))}
          </div>
        </div>
      </div>
    );
  };

export default SkillsGrid;
