import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import profilePicture from './assets/images/profilepic.jpg';

const AboutMeCard = () => (
  <Card centered={true} fluid={false}>
    <Image src={profilePicture} wrapped ui={false} />
    <Card.Content color='black'
    fluid='false'>
      <Card.Header color='black'>Jesse Robinson</Card.Header>
      <Card.Meta>
        <span className='date'>NSS Student/Junior Web Developer</span>
      </Card.Meta>
      <Card.Description>
        Aspiring to better myself and the world around me through technology.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
);

export default AboutMeCard;
