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
const createProject = (projectObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/projects.json`, projectObject)
    .then((response) => {
      const body = { id: response.data.name };
      axios.patch(`${dbUrl}/projects/${response.data.name}.json`, body);
    }).catch((error) => reject(error));
});
const deleteProject = (id) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/projects/${id}.json`)
    .then(() => getProjects().then(resolve))
    .catch((error) => reject(error));
});
const editProject = (project, projectId) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/projects/${projectId}.json`, project)
    .then(() => getSingleProject(projectId).then(resolve))
    .catch((error) => reject(error));
});

export {
  getSingleProject, getProjects, createProject, deleteProject, editProject
};
