import React from 'react';

const MovieCard = (props) => {
  const {title, poster_path, release_date, vote_average, vote_count, overview} = props.movie;
  return (
    <div className="card">
        <img className="card--image"
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}`}
          alt={title + ' poster'} />
        <div className="card--content">
          <h3 className="card--title">{title}</h3>
          <p><small>Release Date: {release_date}</small></p>
          <p><small>Rating: {vote_average} ({vote_count} votes)</small></p>
          <p className="card--desc">{overview}</p>
        </div>
      </div>
  );
};

export default MovieCard;