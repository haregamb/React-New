import axios from 'axios';
import dotenv from 'dotenv'
import fetch from 'node-fetch';

dotenv.config();

const apiUrl = `http://www.omdbapi.com`;
const apiKey = process.env.OMDB_API_KEY;

const getMoviesbySearchTerm = async term => {
  const axiosResults = await axios.get(`${apiUrl}/?apiKey=${""}&t=${term}`);
  const fetchResults = await fetch(`${apiUrl}/?apiKey=${""}&t=${term}`);
  const fetchData = await fetchResults.json();
  // console.log('Results using axios: ', axiosResults.data);
  // console.log('Results using fetch: ', fetchData);
}

const getMoviedetailsById = async movieId => {
  const axiosResults = await axios.get(`${apiUrl}/?apiKey=${""}&i=${movieId}`);

  const fetchResults = await fetch(`${apiUrl}/?apiKey=${""}&i=${movieId}`);
  const fetchData = await fetchResults.json();

  console.log('Detailed results using axios:', axiosResults.data);
  console.log('Detailed results using fetch:', fetchData);
}

getMoviesbySearchTerm('Superman');
getMoviedetailsById('tt0078346');
