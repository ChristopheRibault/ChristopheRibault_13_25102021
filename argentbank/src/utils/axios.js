import axios from 'axios';

const token = localStorage.getItem('token');

export default axios.create({
  baseURL: 'http://localhost:3001/api/v1/',
  timeout: 1000,
  headers: {'authorization': `Bearer ${token}`},
});
