// USE WITH FIREBASE AUTH
// import checkLoginStatus from './helpers/auth';

import '../styles/main.scss';
import createProjectCards from './components/createProjectCards';
import projects from './helpers/data/projectsData';

const init = () => {
  createProjectCards(projects);
};
init();
