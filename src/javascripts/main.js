import '../styles/main.scss';
import 'bootstrap';
import createProjectCards from './components/createProjectCards';
import projects from './helpers/data/projectsData';

const init = () => {
  createProjectCards(projects);
};
init();
