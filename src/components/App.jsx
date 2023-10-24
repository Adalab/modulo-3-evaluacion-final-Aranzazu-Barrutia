import '../styles/App.scss';
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useLocation, matchPath } from 'react-router';

import ls from '../services/LocalStorage';
import Filters from './filters/Filters';
import FilmList from './films/FilmList';
import FilmDetail from './films/FilmDetail';
import getApi from '../services/Api';

const App = () => {
  // Estados
  const [films, setFilms] = useState(ls.get('films', []));
  const [searchTitleFilter, setSearchTitleFilter] = useState('');
  const [yearFilter, setyearFilter] = useState('');

  //recojo el valor de la API con el objeto ya limpio
  useEffect(() => {
    //if (ls.get(films, null) === null) {
    if (films.length === 0) {
      getApi().then((cleanData) => {
        setFilms(cleanData);
        ls.set('films', cleanData);
      });
    }
  }, []);
  //controlo el vlaor de lo q se introduce en el input  de las pelis
  const handleChangeTitle = (value) => {
    setSearchTitleFilter(value);
  };
  //filtro peli x nombre
  const filteredFilms = films.filter((film) =>
    film.title.toLowerCase().includes(searchTitleFilter.toLowerCase())
  );

  //cotrolo lo que se elije en el select de year
  const handleSelectYear = (value) => {
    setyearFilter(value);
  };
  //eleccion del año
  const getYears = () => {
    const years = films.map((film) => film.year);
    const uniqueYear = new Set(years);
    const uniqueArray = [...uniqueYear];
    return uniqueArray.sort((a, b) => a - b);
  };

  //pathname
  const { pathname } = useLocation();
  const routeData = matchPath('/film/:id', pathname);
  const filmId = routeData !== null ? routeData.params.id : '';
  console.log(filmId);
  const filmData = films.find((film) => film.id === filmId);
  //devuelvo HTML, Router y Link
  return (
    <div>
      <header>
        <h1>Owen Wilson's "WOW"</h1>
      </header>

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  searchTitleFilter={searchTitleFilter}
                  handleChangeTitle={handleChangeTitle}
                  yearFilter={yearFilter}
                  handleSelectYear={handleSelectYear}
                  years={getYears()}
                />

                <FilmList films={filteredFilms} />
                <Link to="/">Back to Home Page</Link>
              </>
            }
          ></Route>

          <Route
            path="/film/:id"
            element={
              <>
                <FilmDetail film={filmData} />
                <Link to="/">Back to films</Link>
              </>
            }
          ></Route>
          <Route
            path="*"
            element={<h1>La peli que buscas no existe</h1>}
          ></Route>
        </Routes>
      </main>
    </div>
  );
};

export default App;

//years={filteredYears}
//films={filteredFilms}
