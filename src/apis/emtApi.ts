import axios from 'axios';

const emtApi = axios.create({
  baseURL: 'https://openapi.emtmadrid.es/v1/mobilitylabs/user/login',
  headers: {
    email: 'andres.22.melendez@gmail.com',
    password: 'C0d3sl4t0r22.'
  },
});

export default emtApi;