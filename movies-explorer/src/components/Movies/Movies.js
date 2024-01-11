import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const Movies = () => {
  return (
    <section className='movies'>
      <SearchForm></SearchForm>
      <MoviesCardList></MoviesCardList>
    </section>
  );
};

export default Movies;
