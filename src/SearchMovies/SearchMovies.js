import React, { useState } from 'react';

const SearchMovies = () => {
  // user search query for movies
  const [query, setQuery] = useState('');
  // create the state for movie, and update that state appropriate
  const [movies, setMovies] = useState([]);

  const searchMovie = async (e) => {
    e.preventDefault();
    const api = 'c446c97c72fc404e8801e438c65482b9';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${api}&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <form className="form" onSubmit={searchMovie}>
        <label className="label" htmlFor="query">Movie Name</label>
        <input className='input' name='query' type="text"
          placeholder='i.e. Hello Dolly'
          value={query} onChange={(e) => setQuery(e.target.value)}
        />

        <button type="submit" className='button'>Search</button>
      </form>
    </div>
  );
};

export default SearchMovies;