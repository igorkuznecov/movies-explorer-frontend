import React, { useEffect, useState } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { getMovies } from '../../utils/MoviesApi';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [moviesLoaded, setMoviesLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [thumbState, setThumbState] = useState(true);

  useEffect(() => {
    getMovies()
      .then((res) => {
        setMovies(res);
      })
      .then(() => setMoviesLoaded(true));
  }, []);

  function handleMovieLike() {}

  return (
    <section className='movies'>
      <SearchForm
        saveResult={true}
        setSearchQuery={setSearchQuery}
        thumbState={thumbState}
        setThumbState={setThumbState}
      ></SearchForm>
      <MoviesCardList
        searchQuery={searchQuery}
        movies={movies}
        moviesLoaded={moviesLoaded}
        setSearchQuery={setSearchQuery}
        thumbState={thumbState}
        saveResult={true}
      ></MoviesCardList>
    </section>
  );
};

export default Movies;
