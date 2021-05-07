import React, { useState } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [activeItem, setActiveItem] = useState('home');
  const handleItemClick = (e) => {
    const { target } = e;
    setActiveItem(target.innerHTML);
  };
  return (
    <div>
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item as={Link} to='/'
            name='home'
            active={activeItem === 'Home'}
            onClick={(e) => handleItemClick(e)}
          />
          <Menu.Item
            as={Link}
            to='/about'
            name='messages'
            active={activeItem === 'Messages'}
            onClick={(e) => handleItemClick(e)}
          />
          <Menu.Item
            as={Link} to='/users'
            name='friends'
            active={activeItem === 'Friends'}
            onClick={(e) => handleItemClick(e)}
          />
        </Menu>
      </Segment>
    </div>
  );
};
NavBar.propTypes = {
  user: PropTypes.any
};
export default NavBar;
