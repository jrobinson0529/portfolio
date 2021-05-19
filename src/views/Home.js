import React from 'react';
import { Dimmer, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import AboutMeCard from '../components/AboutMeCard';
import Footer from '../components/Footer';

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
    <>
      {user === null ? <LoadingScreen /> : <AboutMeCard /> }
      <Footer bottom='-25em'/>
    </>
  );
}
Home.propTypes = {
  time: PropTypes.string,
  user: PropTypes.any,
};

export default Home;
