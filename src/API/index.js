import axios from 'axios';

const testerURL = 'https://cors-anywhere.herokuapp.com/https://test-api.techsee.me/api/ex/'

function handleError (error) {
  console.warn(error);
  return null;
}

export default function getTesters(tester){
  return axios.get(testerURL + tester )
      .then(({data}) => data)
      .catch(handleError)
}
