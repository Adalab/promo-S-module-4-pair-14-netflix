import React from "react";

const MoviesList = (props) => {
  const renderMovieList = () => {
    return <ul className="cards">{renderMovies()}</ul>;
  };

  const renderMovies = () => {
    return props.movies.map((movie) => {
      return (
        <li key={movie.idMovie} className="card">
          <img
            className="card__img"
            src={movie.imageMovie}
            alt={`Carátula de ${movie.titleMovie}`}
          />
          <h3 className="card__title">{movie.titleMovie}</h3>
          <p className="card__description">Género: {movie.genderMovie}</p>
        </li>
      );
    });
  };

  const renderEmptyList = () => {
    return <p>No hay películas en este listado</p>;
  };

  return props.movies.length ? renderMovieList() : renderEmptyList();
};

export default MoviesList;
