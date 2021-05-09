import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;
const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/projects.json?orderBy="available"&equalTo=true`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});
const getSingleProject = (id) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/projects/${id}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export { getSingleProject, getProjects };
