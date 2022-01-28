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
      console.log(data.results);
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
            <div className="card" key={movie.id}>
              <img className="card--image"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + ' poster'} />
              <div className="card--content">
                <h3 className="card--title">{movie.title}</h3>
                <p><small>Release Date: {movie.release_date}</small></p>
                <p><small>Rating: {movie.vote_average}</small></p>
                <p className="card--desc">{movie.overview}</p>
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
};

export default SearchMovies;