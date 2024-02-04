import React, { useEffect, useState } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const Movies = ({ moviesLoaded, allMovies, savedMovies, setSavedMovies }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [thumbState, setThumbState] = useState(false);
  return (
    <section className='movies'>
      <SearchForm
        saveResult={true}
        setSearchQuery={setSearchQuery}
        thumbState={thumbState}
        setThumbState={setThumbState}
      ></SearchForm>
      <MoviesCardList
        savedMovies={savedMovies}
        setSavedMovies={setSavedMovies}
        searchQuery={searchQuery}
        movies={allMovies}
        moviesLoaded={moviesLoaded}
        setSearchQuery={setSearchQuery}
        thumbState={thumbState}
        saveResult={true}
      ></MoviesCardList>
    </section>
  );
};

export default Movies;
