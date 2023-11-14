import React from 'react';
import { Link } from 'react-router-dom';
import FilmItem from './FilmItem';
const FilmList = ({ films }) => {
  if (!films || films.length === 0) {
    return <p>No hay peli disponible</p>;
  }

  const renderFilms = films.map((film) => {
    return (
      <Link key={film.id} to={'/film/' + film.id} className="films_link">
        <li key={film.id} className="films">
          <FilmItem film={film} />
        </li>
      </Link>
    );
  });
  return (
    <>
      <ul className="ul_container">{renderFilms}</ul>
    </>
  );
};
export default FilmList;
