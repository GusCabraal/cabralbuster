import axios from 'axios';

const user = localStorage.getItem('user')

if(!user){
  localStorage.setItem("user", JSON.stringify({ token: ''}))
}

const httpRequest = axios.create({
  baseURL: 'https://cabralbuster-production.up.railway.app/',
  headers: {
    common: {
      Authorization: JSON.parse(localStorage.getItem("user") as string).token || '',
    },
  },
});

export default httpRequest;