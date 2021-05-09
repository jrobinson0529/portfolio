import React from 'react';
import { animations } from 'react-animation';
import {
  Card, Icon, Image, Reveal, Button
} from 'semantic-ui-react';

const ProjectCard = ({ ...projectObject }) => (
    <Reveal animated='move up'>
      <Reveal.Content visible>
        <div style={{
          width: '45rem',
          margin: '20px',
          animation: animations.fadeInUp,
        }}>
          <Image as={Card} src={projectObject.imageUrl} fluid/>
        </div>
      </Reveal.Content>
      <Reveal.Content hidden>
      <Card style={{
        width: '45rem',
        height: 'auto',
        margin: '20px',
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
        <Button>Click me</Button>
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

export default ProjectCard;
