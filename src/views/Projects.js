import React, { useEffect, useState } from 'react';
import { Card, Header } from 'semantic-ui-react';
import { getProjects } from '../helpers/data/projectsData';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    getProjects().then(setProjects);
  }, []);
  return (
      <div style={{ fontSize: '30px' }}>
        <Header inverted id='projectsHeader' size='large'>My Projects</Header>
        <Card.Group centered className='projects-container'>
        {projects.map((projectObject) => <ProjectCard
          key={projectObject.id}
          {...projectObject}/>)}
        </Card.Group>
      </div>
  );
};

export default Projects;
