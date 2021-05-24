import React, { useEffect, useState } from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { getProjects } from '../helpers/data/projectsData';
import ProjectCard from '../components/ProjectCard';
import { StyledHeader } from '../components/styledComponents/StyledHeader';
import Footer from '../components/Footer';

const Projects = ({ user }) => {
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
          user={user}
          setProjects={setProjects}
          {...projectObject}/>)}
        </Card.Group>
        <Footer bottom='-35em'/>
      </div>
  );
};
Projects.propTypes = {
  user: PropTypes.any
};

export default Projects;
