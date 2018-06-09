import { create } from 'apisauce';

const prod = 'http://88.99.188.0:9091/api/v1/';

// define the api
const api = create({
  baseURL: prod,
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    Authorization: 'Bearer none',
  },
});


export default api;
