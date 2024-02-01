import React, { useEffect, useState } from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { getSavedMovies } from '../../utils/MainApi';

const SavedMovies = ( savedMovies ) => {

  const [movies, setMovies] = useState([]);
  const [moviesLoaded, setMoviesLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [thumbState, setThumbState] = useState(false);

  useEffect(() => {
    getSavedMovies()
      .then((res) => setMovies(res))
      .then(() => setMoviesLoaded(true));
  }, []);

  function handleMovieLike() {


  }

  if (!movies) {
    return
  }

  return (
    <section className='saved-movies'>
      <SearchForm
        saveResult={false}
        setSearchQuery={setSearchQuery}
        thumbState={thumbState}
        setThumbState={setThumbState}

      ></SearchForm>
      <MoviesCardList
        searchQuery={searchQuery}
        movies={movies}
        setMovies={setMovies}
        moviesLoaded={moviesLoaded}
        setSearchQuery={setSearchQuery}
        thumbState={thumbState}
        saveResult={false}
      ></MoviesCardList>
    </section>
  );
};

export default SavedMovies;
