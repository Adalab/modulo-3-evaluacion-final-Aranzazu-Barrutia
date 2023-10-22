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
        poster: film.poster,
        audio: film.audio,
        wow: film.current_wow_in_movie,
        totalWows: film.total_wows_in_movie,
      }));
      return cleanData;
    });
};
export default getApi;
