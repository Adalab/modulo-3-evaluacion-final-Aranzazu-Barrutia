import React from 'react';

const FilmItem = ({ film }) => {
  return (
    <>
      <img
        className="filmItem_img"
        src={film.image}
        alt={film.movie}
        title={film.title}
      />
      <h3 className="filmItem_h3">{film.title}</h3>
      <p className="filmItem_line">{film.line}</p>
      <p className="filmItem_year">{film.year}</p>
    </>
  );
};
export default FilmItem;
