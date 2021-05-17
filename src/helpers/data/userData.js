import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;
const createUser = (userObject) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/users.json`, userObject)
    .then((response) => {
      const body = { id: response.data.name };
      axios.patch(`${dbURL}/users/${response.data.name}.json`, body)
        .then((x) => resolve(x.data))
        .catch((error) => reject(error));
    });
});
const getSingleUser = (id) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/users/${id}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});
const getUsers = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/users.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});
export { createUser, getSingleUser, getUsers };
