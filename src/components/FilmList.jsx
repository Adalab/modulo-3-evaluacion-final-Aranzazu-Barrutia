import React from 'react';
import FilmItem from './FilmItem';
const FilmList = ({ films }) => {
  if (!films || films.length === 0) {
    return <p>No hay peli disponible</p>;
  }
  const renderFilms = films.map((film) => {
    return (
      <li key={film.id}>
        <FilmItem film={film} />
      </li>
    );
  });
  return (
    <>
      <ul>{renderFilms}</ul>
    </>
  );
};
export default FilmList;
