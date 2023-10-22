import { useEffect, useState } from 'react';
import '../styles/App.scss';
import getApi from '../services/Api';
import ls from '../services/LocalStorage';
//import Filters from './Filters';
import FilmList from './FilmList';
import FilmDetail from './FilmDetail';

const App = () => {
  // Estados
  const [films, setFilms] = useState(ls.get('films', []));
  useEffect(() => {
    //if (ls.get(films, null) === null) {
    if (films.length === 0) {
      getApi().then((cleanData) => {
        setFilms(cleanData);
        ls.set('films', cleanData);
      });
    }
  }, []);
  return (
    <div>
      <header>
        <h1>Owen Wilson's "WOW"</h1>
      </header>
      <main>
        <FilmList films={films} />
        <FilmDetail />
      </main>
    </div>
  );
};

export default App;
