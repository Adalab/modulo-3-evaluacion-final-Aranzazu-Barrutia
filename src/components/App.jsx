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
  useEffect(() => {
    //if (ls.get(films, null) === null) {
    if (films.length === 0) {
      getApi().then((cleanData) => {
        setFilms(cleanData);
        ls.set('films', cleanData);
      });
    }
  }, []);
  const handleChange = (value) => {
    setTitleFilter(value);
  };
  return (
    <div>
      <header>
        <h1>Owen Wilson's "WOW"</h1>
      </header>
      <main>
        <Filters titleFilter={titleFilter} handleChange={handleChange} />
        <FilmList films={films} />
        <FilmDetail />
      </main>
    </div>
  );
};

export default App;
