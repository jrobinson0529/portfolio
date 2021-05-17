import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';
import { signInUser, signOutUser } from '../helpers/auth';

const trigger = (
  <span>
    &lsaquo; Jesse Robinson /&rsaquo;
  </span>
);
const handleClick = (type) => {
  switch (type) {
    case 'login':
      signInUser();
      break;
    case 'logout':
      signOutUser();
      break;
    default:
  }
};

const options = [
  {
    key: 'login',
    text: 'Sign-in',
    icon: 'sign-in',
    onClick: () => handleClick('login'),
  },
];

const NavNameDropdown = ({ user }) => {
  const loggedInOptions = [
    {
      key: 'welcome',
      text: `Signed in as ${user && user.fullName}`,
      disabled: true,
    },
    {
      key: 'logout',
      text: 'Sign-out',
      icon: 'sign-out',
      onClick: () => handleClick('logout'),
    },
  ];
  return (
  <Dropdown
    trigger={trigger}
    options={user ? loggedInOptions : options}
    pointing='top left'
    icon={null}
  />
  );
};
NavNameDropdown.propTypes = {
  user: PropTypes.any
};

export default NavNameDropdown;
