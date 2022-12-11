import axios from 'axios';

const httpRequest = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    common: {
      Authorization: JSON.parse(localStorage.getItem("user") as string).token || '',
    },
  },
});

export default httpRequest;