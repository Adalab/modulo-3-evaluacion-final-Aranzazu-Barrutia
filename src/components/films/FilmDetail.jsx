import React from 'react';
import { Link } from 'react-router-dom';

const FilmDetail = ({ film }) => {
  return (
    <>
      <section>
        <article>
          <img src={film.image} alt="poster" />
          <h2>{film.movie}</h2>
          <h3>{film.line}</h3>
          <p>{film.director}</p>
          <p>{film.year}</p>
          <Link target="_blank" to={film.audio}>
            WOW! 🔊
          </Link>
        </article>
      </section>
    </>
  );
};
export default FilmDetail;

// const UserItem = ({ user }) => {
//   return (
//     <>
//       <a href="#">
//         <img
//           className="card__img"
//           src={user.picture}
//           alt={user.name}
//           title={user.name}
//         />
//         <h4 className="card__title">{user.name}</h4>
//         <p className="card__description">{`${user.country} / ${user.gender}`}</p>
//       </a>
//     </>
//   );
// };

// export default UserItem;
