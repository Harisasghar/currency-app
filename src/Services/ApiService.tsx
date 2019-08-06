import axios from 'axios';
import testdata from '../testdata';

const baseUrl = process.env.REACT_APP_API_BASE_URL;

let config = {
  headers: {
    'Content-Type': 'text/plain',
    'Accept': 'application/json',
    'x-api-key': process.env.REACT_APP_API_ID
  },

}

const ApiService = {    
  get(path:string) {
    // return axios.get(baseUrl+path, config);
    return new Promise((resolve) => { resolve({data:testdata}); });
  }
};

export default ApiService;