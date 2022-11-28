import React, { useEffect, useState } from 'react';
import httpRequest from '../axios/config';

function Movies() {

  const [movies, setMovies] = useState([]);
useEffect(() => {
  async function fetchApi() {
    const { data } = await httpRequest.get('/movies');
    setMovies(data)
  }
  fetchApi()
}, []);

  return (
    movies.map(({name, description}) =>(
      <div>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    ))
  );
}

export default Movies;