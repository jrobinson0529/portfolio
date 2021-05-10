import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  Container, Divider, Header, Button, Icon, Label
} from 'semantic-ui-react';
import { getSingleProject } from '../helpers/data/projectsData';

function SingleProject() {
  const [project, setProject] = useState({});
  const [demo, setDemo] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    getSingleProject(id).then(setProject);
  }, []);
  const history = useHistory();
  const viewProjects = () => {
    history.push('/projects');
  };
  const toggleLiveDemo = () => {
    setDemo((prevState) => !prevState);
  };
  const LiveDemo = () => (
    <Container style={{
      border: '2px solid rgb(27, 28, 29)', margin: '25px', padding: '10px', width: '100%'
    }}>
    <div style={{
      position: 'relative',
      paddingBottom: '58.25%',
      height: '0'
    }}><iframe src={project.videoUrl} frameBorder="0" webkitallowfullscreen mozallowfullscreen allowFullScreen style={{
      position: 'absolute', top: '0', left: '0', width: '100%', height: '95%'
    }}></iframe></div>
  </Container>
  );
  return (
    <div className="single-project-container">
      {demo ? (
        <LiveDemo />
      ) : (
        <div>
          <Container
            style={{
              width: '100%',
              height: '30vh',
              backgroundImage: `url(${project.imageUrl})`,
              backgroundPosition: 'center',
              backgroundSize: 'contain',
            }}
          ></Container>
          <Container textAlign="justified" className="my-5">
            <Header as="h1" inverted id="single-project-header" size="huge">
              {project.title}
            </Header>
            <Button as="div" labelPosition="right">
              <Button icon>
                <Icon name="heart" />
                Like
              </Button>
              <Label as="a" basic pointing="left">
                {project.likes}
              </Label>
            </Button>
            <Divider inverted></Divider>
            <p>{project.description}</p>
            <Divider inverted></Divider>
            <Button.Group inverted>
            <Button inverted as='a' href={project.githubUrl} target='_blank'>
              <Icon name='github' /> GitHub
            </Button>
            <Button inverted as='a' href={project.siteUrl} target='_blank'>
            <Icon name='chrome' /> Site
            </Button>
            <Button inverted onClick={toggleLiveDemo}>
            <Icon name='eye' /> Live Demo
            </Button>
          </Button.Group>
          <Button className='back-to-projects-btn mx-3' onClick={viewProjects}><Icon name="backward" /> Back to projects</Button>
          </Container>
        </div>
      )}
    </div>
  );
}

export default SingleProject;
