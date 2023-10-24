import uuid from 'react-uuid';

const getApi = () => {
  //llamo a la API
  return fetch(
    'https://owen-wilson-wow-api.onrender.com/wows/random?results=50'
  )
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((film) => ({
        id: uuid(),
        title: film.movie,
        year: film.year,
        director: film.director,
        image: film.poster,
        audio: film.audio,
        line: film.full_line,
      }));
      return cleanData;
    });
};
export default getApi;
