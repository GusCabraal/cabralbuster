import axios from 'axios';
const { token } = JSON.parse(localStorage.getItem("user") as string);

const httpRequest = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    common: {
      Authorization: token,
    },
  },
});

export default httpRequest;