import React from "react";

const MoviesList = (props) => {
  const renderMovieList = () => {
    return <ul className="cards">{renderMovies()}</ul>;
  };

  const renderMovies = () => {
    return props.movies.map((movie) => {
      return (
        <li key={movie.idMovie} className="card">
          <a href={"http://localhost:4000/movie/" + movie.idMovie}>
            <img
              className="card__img"
              src={movie.imageMovie}
              alt={`Carátula de ${movie.titleMovie}`}
            />
            <h3 className="card__title">{movie.titleMovie}</h3>
            <p className="card__description">Género: {movie.genderMovie}</p>
          </a>
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
