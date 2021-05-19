import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';
import { signInUser, signOutUser } from '../helpers/auth';

const trigger = (
  <span>
    &lsaquo; Jesse Robinson /&rsaquo;
  </span>
);

const NavNameDropdown = ({ user }) => {
  const history = useHistory();
  const handleClick = (type) => {
    switch (type) {
      case 'login':
        signInUser();
        break;
      case 'logout':
        signOutUser();
        break;
      case 'create':
        history.push('/create-project');
        break;
      default:
    }
  };

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
  const adminOptions = [
    {
      key: 'welcome',
      text: `Signed in as ${user && user.fullName} ADMIN`,
      disabled: true,
    },
    {
      key: 'create project',
      text: 'Create Project',
      icon: 'fire',
      onClick: () => handleClick('create')
    },
    {
      key: 'logout',
      text: 'Sign-out',
      icon: 'sign-out',
      onClick: () => handleClick('logout'),
    },
  ];
  const options = [
    {
      key: 'login',
      text: 'Sign-in',
      icon: 'sign-in',
      onClick: () => handleClick('login'),
    },
  ];
  const AdminDropdown = () => (
    <Dropdown
    trigger={trigger}
    options={adminOptions}
    pointing='top left'
    icon={null}
  />
  );
  let dropdown;
  if (user?.admin) {
    dropdown = <AdminDropdown />;
  } else {
    dropdown = <Dropdown
      trigger={trigger}
      options={ user ? loggedInOptions : options}
      pointing='top left'
      icon={null}
    />;
  }
  return (dropdown);
};
NavNameDropdown.propTypes = {
  user: PropTypes.any
};

export default NavNameDropdown;
