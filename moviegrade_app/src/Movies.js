import React from 'react';
import PropTypes from 'prop-types';
import './Movies.css';

const Movies = ({ title, year, summary, poster, genres}) => {

    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="mvie__data">
              <h3 className="movie__title">{title}</h3>
              <h5 className="movie__year">{year}</h5>
              <ul className="movie__genres">
                  {genres.map((genre, index) => {
                      return <li key={index} className="movie__genre">{genre}</li>
                  })}
              </ul>
              <p className="moive__summary">{summary.slice(0, 180)}...</p>
            </div>
        </div>
    )
}

Movies.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movies;