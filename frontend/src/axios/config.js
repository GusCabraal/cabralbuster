import axios from 'axios';

const httpRequest = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    common: {
      Authorization: localStorage.getItem('token')
    },
  },
});

export default httpRequest;