import React, { useState } from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const SavedMovies = ({ savedMovies, savedMoviesLoaded, setSavedMovies, allMovies }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [thumbState, setThumbState] = useState(false);

  if (!savedMovies) {
    return;
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
        savedMovies={savedMovies}
        setSavedMovies={setSavedMovies}
        searchQuery={searchQuery}
        movies={savedMovies}
        setMovies={setSavedMovies}
        moviesLoaded={savedMoviesLoaded}
        setSearchQuery={setSearchQuery}
        thumbState={thumbState}
        saveResult={false}
      ></MoviesCardList>
    </section>
  );
};

export default SavedMovies;
