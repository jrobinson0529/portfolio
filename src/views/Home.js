import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import AboutMeCard from '../components/AboutMeCard';

const LoadingScreen = () => (
     <Dimmer active>
        <Loader size='massive'>Loading</Loader>
      </Dimmer>
);
function Home({ user }) {
  return (
    <>
      {user === null ? <LoadingScreen /> : <AboutMeCard /> }
    </>
  );
}
Home.propTypes = {
  time: PropTypes.string,
  user: PropTypes.any,
};

export default Home;
