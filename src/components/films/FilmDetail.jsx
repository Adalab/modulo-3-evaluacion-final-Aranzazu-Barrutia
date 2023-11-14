import React from 'react';
import { Link } from 'react-router-dom';

const FilmDetail = ({ film }) => {
  return (
    <>
      <section>
        <article>
          <img className="filmItem_img" src={film.image} alt="poster" />
          <h2>{film.movie}</h2>
          <h3 className="filmItem_h3">{film.line}</h3>
          <p>{film.director}</p>
          <p>{film.year}</p>
          <Link className="audio" target="_blank" to={film.audio}>
            WOW! 🔊
          </Link>
        </article>
      </section>
    </>
  );
};
export default FilmDetail;
