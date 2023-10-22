import React from 'react';

const FilmItem = ({ film }) => {
  return (
    <>
      <img src={film.image} alt={film.movie} title={film.title} />
      <h3>{film.title}</h3>
      <p>{film.line}</p>
      <p>{film.year}</p>
    </>
  );
};
export default FilmItem;
