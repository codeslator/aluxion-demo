import axios from 'axios';

const usersApi = axios.create({
  baseURL: 'https://randomuser.me/api'
});

export default usersApi;