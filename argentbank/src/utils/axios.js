import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3001/api/v1/',
  timeout: 1000,
  headers: {'authorization': `Bearer ${localStorage.getItem('token')}`},
});
