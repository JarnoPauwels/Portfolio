// src/pages/ProjectPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import projects, { ProjectData } from './ProjectsData'; // Import the data

const ProjectPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();

  // Find the project based on the project ID
  const project: ProjectData | undefined = projects.find((p) => p.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-page">
      <h2>{project.title}</h2>
      <img src={project.imageUrl} alt={project.title} />
      <p>{project.description}</p>
      <div>{project.content}</div>
    </div>
  );
};

export default ProjectPage;
