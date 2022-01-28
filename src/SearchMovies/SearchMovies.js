import React from 'react';

const SearchMovies = () => {
  return (
    <div>
      <form action="" className="form">
        <label className="label" htmlFor="query">Movie Name</label>
        <input className='input' name='query' type="text" placeholder='i.e. Hello Dolly' />

        <button type="submit" className='button'>Search</button>
      </form>
    </div>
  );
};

export default SearchMovies;