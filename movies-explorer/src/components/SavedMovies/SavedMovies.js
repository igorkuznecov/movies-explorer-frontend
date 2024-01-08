import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const SavedMovies = () => {
  return (
    <section className='saved-movies'>
      <SearchForm></SearchForm>
      <MoviesCardList></MoviesCardList>
    </section>
  );
};

export default SavedMovies;
