import React from 'react';
import { Dimmer, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import AboutMeCard from '../components/AboutMeCard';
import Footer from '../components/Footer';
import banner from '../components/assets/images/banner-image.jpg';

const LoadingScreen = () => (
     <Dimmer active>
       <Icon.Group size='huge'>
          <Icon loading name='spinner' size='huge'/>
          <Icon name='earlybirds' size='large' inverted/>
       </Icon.Group>
      </Dimmer>
);
function Home({ user }) {
  return (
    <div style={{
      height: '100vh',
      backgroundImage: `url(${banner})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }} className='home-container'>
      {user === null ? <LoadingScreen /> : <AboutMeCard /> }
      <Footer bottom='-25em'/>
    </div>
  );
}
Home.propTypes = {
  time: PropTypes.string,
  user: PropTypes.any,
};

export default Home;
