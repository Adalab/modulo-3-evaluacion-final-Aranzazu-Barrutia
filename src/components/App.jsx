import { useEffect, useState } from 'react';
import '../styles/App.scss';
import getApi from '../services/Api';
//import Filters from './Filters';
import FilmList from './FilmList';

import FilmDetail from './FilmDetail';

const App = () => {
  // Estados
  const [ApiFilm, setApiFilm] = useState([]);
  useEffect(() => {
    getApi().then((cleanData) => {
      setApiFilm(cleanData);
    });
  }, []);
  return (
    <div>
      <header>
        <h1>Owen Wilson's "WOW"</h1>
      </header>
      <main>
        <FilmList />
        <FilmDetail />
      </main>
    </div>
  );
};

export default App;
