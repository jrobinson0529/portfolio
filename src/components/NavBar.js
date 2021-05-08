import React, { useState } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NavNameDropdown from './NavNameDropdown';

const NavBar = ({ user }) => {
  const [activeItem, setActiveItem] = useState('About');
  // const name = '< Jesse Robinson />';
  const handleItemClick = (e) => {
    const { target } = e;
    setActiveItem(target.innerHTML);
  };
  return (
    <div>
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item as={Link} to='/'
            name='about'
            className='about'
            active={activeItem === 'About'}
            onClick={(e) => handleItemClick(e)}
          />
          <Menu.Item
            as={Link}
            to='/projects'
            name='projects'
            active={activeItem === 'Projects'}
            onClick={(e) => handleItemClick(e)}
          />
          <Menu.Item
            as={Link} to='/users'
            name='friends'
            active={activeItem === 'Friends'}
            onClick={(e) => handleItemClick(e)}
          />
          <Menu.Menu position='right' className='right-name'>
            <NavNameDropdown user={user}/>
          </Menu.Menu>
        </Menu>
      </Segment>
    </div>
  );
};
NavBar.propTypes = {
  user: PropTypes.any
};
export default NavBar;
