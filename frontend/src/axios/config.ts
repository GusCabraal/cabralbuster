import axios from 'axios';

let token = '';
const user = localStorage.getItem("user") as string;
if(user){
  token = JSON.parse(user).token;
}

const httpRequest = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    common: {
      Authorization: token || '',
    },
  },
});

export default httpRequest;