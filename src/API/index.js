import axios from 'axios';

const url = 'https://cors-anywhere.herokuapp.com/https://test-api.techsee.me/api/ex/'

export default function getTesters(name){
  return axios.get(url + name )
      .then(({data}) => data)
      .catch(errorHandler)
}

function errorHandler (error) {
  console.warn(error);
  return null;
}
