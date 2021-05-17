import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import Projects from '../views/Projects';
import Tech from '../views/Tech';
import SingleProject from '../views/SingleProject';

function Routes({ user, time }) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={() => <Home user={user} time={time}/>} />
        <Route exact path="/projects" component={() => <Projects user={user} />} />
        <Route path="/projects/:id" component={() => <SingleProject />} />
        <Route exact path="/tech" component={() => <Tech user={user} />} />
      </Switch>
    </div>
  );
}
Routes.propTypes = {
  user: PropTypes.any,
  time: PropTypes.string,
};
export default Routes;
