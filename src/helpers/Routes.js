import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import Projects from '../views/Projects';
import Users from '../views/Users';

function Routes({ user, time }) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={() => <Home user={user} time={time}/>} />
        <Route exact path="/projects" component={() => <Projects user={user} />} />
        <Route exact path="/users" component={() => <Users user={user} />} />
      </Switch>
    </div>
  );
}
Routes.propTypes = {
  user: PropTypes.any,
  time: PropTypes.string,
};
export default Routes;
