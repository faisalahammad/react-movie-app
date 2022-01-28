import React, { useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';

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
      // console.log(data.results);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <form className="form" onSubmit={searchMovie}>
        <label className="label" htmlFor="query">Movie Name</label>
        <input className='input' name='query' type="text"
          placeholder='i.e. Prison Break'
          value={query} onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className='button'>Search</button>
      </form>
      <div className="card-list">
        {
          // remove movie if poster not found by filtering
          movies.filter(movie => movie.poster_path).map(movie => (
            <MovieCard movie={movie} key={movie.id} />
          ))
        }
      </div>
    </>
  );
};

export default SearchMovies;