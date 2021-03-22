import firebase from 'firebase/app';
import formModal from '../components/formModal';
import showProjects from '../components/showProjects';
import firebaseConfig from './apiKeys';
import getProjects from './data/projectsData';
import domEvents from './domEvents';

const startApp = () => {
  firebase.initializeApp(firebaseConfig);
  getProjects().then((response) => showProjects(response));
  formModal('Tech');
  domEvents();
};

export default startApp;
