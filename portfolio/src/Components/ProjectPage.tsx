// src/pages/ProjectPage.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import projects, { ProjectData } from './ProjectsData'; // Import the data
import NavBar from './NavBar';
import ImageModal from './ImageModal';

const ProjectPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();

  // Find the project based on the project ID
  const project: ProjectData | undefined = projects.find((p) => p.id === projectId);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  if (!project) {
    return <div>Project not found</div>;
  }

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="project-page">
      <NavBar />
      <div className='project-details-container'>
        <Link to="/" className="back-to-home-link">
           &#129128; 
        </Link>
        <div className='project-page-title-container'>
          <h1 className="project-page-title">{project.title}</h1> 
          {project.category !== 'Design' && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <img src="../icons/github.png" alt="Github Logo" />
            </a>
          )}
        </div>
        <div className="project-details">
          <div className="project-info">
            <h1>Project info</h1>
            <p className="project-p" >{project.content}</p>
          </div>
          <div className="technologies">
            <h1>Technologies</h1>
            <div className="projectpage-skill-logos">
              {project.skillImages.map((skillImage, index) => (
                <img key={index} src={skillImage} alt={`Skill ${index + 1}`} className="projectpage-skill-logo" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* <img src={project.imageUrl} alt={project.title} className="project-image" /> */}
      <div className='project-images-container'>
        <h1>Images</h1>
        <div className="project-images">
          {project.imageUrl.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt={`Project ${index + 1}`} className="project-page-image" onClick={() => openModal(imageUrl)}/>
          ))}
        </div>
      </div>

      <ImageModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        imageUrl={selectedImage}
      />

    </div>
  );
};

export default ProjectPage;
