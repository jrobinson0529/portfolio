import React, { useEffect, useState } from 'react';
import { Card } from 'semantic-ui-react';
import { getProjects } from '../helpers/data/projectsData';
import ProjectCard from '../components/ProjectCard';
import { StyledHeader } from '../components/styledComponents/StyledHeader';
import Footer from '../components/Footer';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    getProjects().then(setProjects);
  }, []);
  return (
      <div style={{ fontSize: '30px' }}>
        <StyledHeader>Projects</StyledHeader>
        <Card.Group centered className='projects-container'>
        {projects.map((projectObject) => <ProjectCard
          key={projectObject.id}
          setProjects={setProjects}
          {...projectObject}/>)}
        </Card.Group>
        <Footer bottom='-35em'/>
      </div>
  );
};

export default Projects;
