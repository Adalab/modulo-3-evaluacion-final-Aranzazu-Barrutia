import { useEffect, useState } from 'react';
import '../styles/App.scss';
import getApi from '../services/Api';
import ls from '../services/LocalStorage';
//import Filters from './Filters';
import FilmList from './FilmList';
import FilmDetail from './FilmDetail';
import Filters from './Filters';

const App = () => {
  // Estados
  const [films, setFilms] = useState(ls.get('films', []));
  const [titleFilter, setTitleFilter] = useState('');
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
  const handleChange = (value) => {
    setTitleFilter(value);
  };
  //cotrolo lo que se elije en el select de year
  const handleChangeYear = (value) => {
    setyearFilter(value);
  };

  //filtro peli x nombre
  const filteredFilms = films.filter((film) =>
    film.title.toLowerCase().includes(titleFilter)
  );
  // .filter((item) => {
  //   if (yearFilter === '') {
  //     return true;
  //   } else {
  //     return yearFilter === item.year;
  //   }
  // });
  const filteredYears = () => {
    const years = films.map((film) => film.year);
    const oneYear = new Set(years);
    const oneYearArray = [...oneYear];
    return oneYearArray.sort();
  };
  <div>
    <header>
      <h1>Owen Wilson's "WOW"</h1>
    </header>
    <main>
      <Filters
        titleFilter={titleFilter}
        handleChange={handleChange}
        yearFilter={yearFilter}
        handleChangeYear={handleChangeYear}
        years={filteredYears}
      />
      <FilmList films={filteredFilms} />
      <FilmDetail />
    </main>
  </div>;
};

export default App;
//years={filteredYears}
