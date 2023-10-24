import React from 'react';
import { Link } from 'react-router-dom';
import FilmItem from './FilmItem';
const FilmList = ({ films }) => {
  if (!films || films.length === 0) {
    return <p>No hay peli disponible</p>;
  }

  const renderFilms = films.map((film) => {
    return (
      <Link key={film.id} to={'/film/' + film.id}>
        <li key={film.id}>
          <FilmItem film={film} />
        </li>
      </Link>
    );
  });
  return (
    <>
      <ul>{renderFilms}</ul>
    </>
  );
};
export default FilmList;
