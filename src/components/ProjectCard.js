import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { animations } from 'react-animation';
import { useHistory } from 'react-router-dom';
import {
  Card, Icon, Image, Reveal, Button, Confirm, TransitionablePortal
} from 'semantic-ui-react';
import { deleteProject } from '../helpers/data/projectsData';

const ProjectCard = ({ user, setProjects, ...projectObject }) => {
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const viewProject = () => {
    history.push(`/projects/${projectObject.id}`);
  };
  const handleClick = (type) => {
    switch (type) {
      case 'open':
        setOpen((prevState) => !prevState);
        break;
      case 'delete':
        deleteProject(projectObject.id).then(setProjects);
        break;
      default:
    }
  };

  return (
    <Reveal animated='move up'>
      <Reveal.Content visible>
        <div style={{
          width: '45rem',
          margin: '20px',
          animation: animations.fadeInUp,
        }}>
          <Image src={projectObject.imageUrl} fluid style={{
            height: '300px', border: '2px solid rgba(255, 255, 255, .9)', borderRadius: '10px'
          }}/>
        </div>
      </Reveal.Content>
      <Reveal.Content hidden>
      <Card style={{
        width: '43rem',
        height: 'auto',
        margin: '25px auto',
        animation: animations.fadeInUp,
        color: 'black',
      }}>
      <Card.Content>
        <Card.Header as='h1'>{projectObject.title}</Card.Header>
        <Card.Description>
          {projectObject.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button onClick={viewProject}>View</Button>
        <Button negative onClick={() => handleClick('open')}>Delete</Button>
        <TransitionablePortal open={open}>
        <Confirm className='delete-modal'
          open={open}
          content={`Would you like to delete ${projectObject.title}?`}
          onCancel={() => handleClick('open')}
          onConfirm={() => {
            handleClick('delete');
            handleClick('open');
          }}
        />
        </TransitionablePortal>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='like' />
          {projectObject.likes} Likes
        </a>
      </Card.Content>
      </Card>
      </Reveal.Content>
    </Reveal>
  );
};
ProjectCard.propTypes = {
  setProjects: PropTypes.func,
  user: PropTypes.any
};

export default ProjectCard;
