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
