import axios from 'axios';
const isDevelopment = process.env.NODE_ENV !== 'production';

const user = localStorage.getItem('user')

if(!user){
  localStorage.setItem("user", JSON.stringify({ token: ''}))
}

const httpRequest = axios.create({
  baseURL: isDevelopment? 'http://localhost:3001/': 'https://cabralbuster-production.up.railway.app/',
  headers: {
    common: {
      Authorization: JSON.parse(localStorage.getItem("user") as string).token || '',
    },
  },
});

export default httpRequest;