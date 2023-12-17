import React from 'react';
import '../App.css';

const SkillsGrid: React.FC = () => {
    const skills = ['../icons/HTML.png', '../icons/CSS.png', '../icons/JS.png', '../icons/nodejs.png', '../icons/React.png', '../icons/vue.png', '../icons/tailwind.png', '../icons/mongodb.png', '../icons/mysql.png', '../icons/springboot.png', '../icons/Figma.png', '../icons/xd.png', '../icons/photoshop.png', '../icons/illustrator.png', '../icons/ae.png', ];
  
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
