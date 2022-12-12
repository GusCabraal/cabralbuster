import axios from 'axios';
import 'dotenv/config';

const user = localStorage.getItem('user')

if(!user){
  localStorage.setItem("user", JSON.stringify({ token: ''}))
}

const httpRequest = axios.create({
  baseURL: process.env.DOMAIN || 'http://localhost:3001/',
  headers: {
    common: {
      Authorization: JSON.parse(localStorage.getItem("user") as string).token || '',
    },
  },
});

export default httpRequest;