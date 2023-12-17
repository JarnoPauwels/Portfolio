// src/components/ProjectCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../ProjectCard.css';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string[];
  skillImages: string[];  
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, description, imageUrl, skillImages  }) => {
    const firstImage = imageUrl[0]
     
    return (
      <Link to={`/project/${id}`} className="project-card-link">
        <div className="project-card">
          <img src={firstImage} alt={title} className="project-image" />
          <div className="project-info">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="project-skills">
                <div className="skill-images">
                    {skillImages.map((skillImage, index) => (
                    <img key={index} src={skillImage} alt={`Skill ${index + 1}`} className="skill-image" />
                    ))}
                </div>
            </div>
          </div>
        </div>
      </Link>
    );
  };

export default ProjectCard;
