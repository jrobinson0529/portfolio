import React from 'react';
import PropTypes from 'prop-types';
import AboutMeCard from '../components/AboutMeCard';

function Home() {
  return (
    <>
      <AboutMeCard />
    </>
  );
}
Home.propTypes = {
  time: PropTypes.string
};

export default Home;
