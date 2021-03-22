import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;
const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/projects.json?orderBy="available"&equalTo=true`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export default getProjects;
