import axios from 'axios';

const stopsApi = axios.create({
  baseURL: 'https://openapi.emtmadrid.es/v1/transport/busemtmad',
});

export default stopsApi;