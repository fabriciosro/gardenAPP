import axios from 'axios';

//Api local -> https://localhost:5001

const api = axios.create({
  baseURL: 'http://apigarden.azurewebsites.net',
});

export default api;