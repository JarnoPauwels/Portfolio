// src/pages/HomePage.tsx
import React, { useEffect, useState } from 'react';
import Introduction from './Introduction';
import SkillsGrid from './SkillsGrid';
import ProjectCard from './ProjectCard';
import NavBar from './NavBar';
import projects, { ProjectData } from './ProjectsData'; // Import the data
import './App.css'; // Import the styles

const HomePage: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [filter, setFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState<ProjectData[]>(projects);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      const scrollDirection = event.deltaY > 0 ? 'down' : 'up';

      if (scrollDirection === 'down') {
        setCurrentSection((prev) => prev + 1);
        setFilter('All'); // Reset filter when scrolling down to a new section
      } else {
        setCurrentSection((prev) => Math.max(prev - 1, 0));
        setFilter('All'); // Reset filter when scrolling up to a new section
      }
    };

    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  useEffect(() => {
    const sectionHeight = window.innerHeight;
    const targetSectionTop = sectionHeight * currentSection;
    window.scrollTo({
      top: targetSectionTop,
      behavior: 'smooth',
    });
  }, [currentSection]);

  const handleFilterClick = (newFilter: string) => {
    setFilter(newFilter);
    // Clear the previous filtered projects
    setFilteredProjects([]);
    
    // Add a delay to ensure state updates properly
    setTimeout(() => {
      // Apply the new filter and set the filtered projects
      setFilteredProjects(newFilter === 'All' ? projects : projects.filter((project) => project.category === newFilter));
    }, 0);
  };
  

  return (
    <div className="home-page">
      <NavBar />
      <div className={`section ${currentSection === 0 ? 'active' : ''}`} style={{ backgroundColor: 'lightblue' }}>
        <Introduction />
      </div>
      <div className={`section ${currentSection === 1 ? 'active' : ''}`} style={{ backgroundColor: 'lightgreen' }}>
        <div className="projects-section">
          <div className="projects-container">
            <h2>Projects</h2>
            <div className="filter-buttons">
              <button onClick={() => handleFilterClick('All')} className={filter === 'All' ? 'active' : ''}>
                All
              </button>
              <button onClick={() => handleFilterClick('Web')} className={filter === 'Web' ? 'active' : ''}>
                Web
              </button>
              <button onClick={() => handleFilterClick('Design')} className={filter === 'Design' ? 'active' : ''}>
                Design
              </button>
            </div>
            <div className="projectsCard-container">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={`section ${currentSection === 2 ? 'active' : ''}`} style={{ backgroundColor: 'lightcoral' }}>
        <SkillsGrid />
      </div>
    </div>
  );
};

export default HomePage;
