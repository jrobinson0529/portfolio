import React, { useState } from 'react';
import { animations } from 'react-animation';
import {
  Button,
  Divider,
  Icon, Image, Segment
} from 'semantic-ui-react';
import profilePicture from './assets/images/profilepic.jpg';
import { AboutMeHeader } from './styledComponents/StyledHeader';

const LearnMore = () => <Segment className='h-50' style={{
  backgroundColor: 'transparent',
  color: 'rgb(255, 255, 255, .8)',
  border: 'none',
  boxShadow: 'none',
  padding: '0px 40px 20px',
  fontSize: '1.5em',
  animation: animations.fadeInUp,
}}>
    <p>
      At an early age I was infatuated with technology.
    </p>
    <p>
      I have decided to turn my hobby and creativity towards tools that I can help build a better world with.
    </p>
    <p>
      Through web development I can express my creativity and ingenuity as a hobby and career alike. I am Jesse, an aspiring web developer, PC enthusiast, and fellow human.
    </p>
  </Segment>;

const AboutMeCard = () => {
  const [learnMore, setLearnMore] = useState(false);
  const handleClick = () => {
    setLearnMore((prevState) => !prevState);
  };
  return (
  <Segment className='about-me-container d-flex w-75 justify-content-between mx-auto p-5 flex-wrap' inverted style={{
    marginTop: '50px',
    transition: 'all .3s ease',
    borderTopLeftRadius: '200px',
    borderTopRightRadius: '200px',
    borderRadius: '200px',
    animation: animations.fadeInUp,
  }}>
  <Segment className='h-50' style={{
    backgroundColor: 'transparent',
    color: 'rgb(255, 255, 255, .8)',
    border: 'none',
    boxShadow: 'none',
    padding: '0px 40px 20px',
    fontSize: '1.4em',
    overflow: 'hidden',
    transition: 'all .3s ease-out',
  }}>
    <Image src={profilePicture} size='medium' floated='left' circular style={{ boxShadow: '1px 1px 20px black' }}/>
    <AboutMeHeader inputfontsize='34px'>About Me</AboutMeHeader>
    <Divider inverted style={{ width: '75%', margin: '30px auto' }}></Divider>
    <p>
      At an early age I was infatuated with technology.
    </p>
    <p>
      I have decided to turn my hobby and creativity towards tools that I can help build a better world with.
    </p>
    <p>
      Through web development I can express my creativity and ingenuity as a hobby and career alike. I am Jesse, an aspiring web developer, PC enthusiast, and fellow human.
    </p>
    <div className='d-flex justify-content-center flex-column'>
    <Button inverted onClick={handleClick} className='w-25 mx-auto'>Learn <Icon name='handshake outline' className='mx-auto'/> More</Button>
    </div>
  </Segment>
  { learnMore && <LearnMore />}
 </Segment>
  );
};
export default AboutMeCard;
