import React, { useEffect, useState } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import { getSavedMovies } from '../../utils/MainApi';

const MoviesCardList = ({
  movies,
  setMovies,
  moviesLoaded,
  searchQuery,
  setSearchQuery,
  thumbState,
  saveResult,
}) => {
  const [moviesStorage, setMoviesStorage] = useState([]);
  const [moviesForRender, setMoviesForRender] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  const [moviesNotFound, setMoviesNotFound] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    if (saveResult) {
      const savedSearchQuery = localStorage.getItem('searchInput');
      if (savedSearchQuery) {
        setSearchQuery(savedSearchQuery);
      }
    }

    if (moviesLoaded && !searchQuery) {
      renderMovieCards(movies);
    }
    return;
  }, [moviesLoaded, width]);

  function filterByQuery(arr, searchQuery) {
    return arr.filter(function (item) {
      if (
        item.nameRU.toUpperCase().includes(searchQuery.toUpperCase()) ||
        item.nameEN.toUpperCase().includes(searchQuery.toUpperCase())
      ) {
        if (thumbState) {
          if (item.duration < 40) {
            return item;
          }
        } else {
          return item;
        }
      }
    });
  }

  useEffect(() => {
    if (moviesLoaded && searchQuery) {
      const resultMovies = filterByQuery(movies, searchQuery);
      renderMovieCards(resultMovies);
    }
    return;
  }, [searchQuery, moviesLoaded, thumbState]);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);

  function renderMovieCards(arr) {
    setMoviesStorage(arr);
    const selectedMovies = [];
    let moviesAmount = 0;

    if (width >= '1280') {
      moviesAmount = 16;
    }
    if (width < '1280' && width > '320') {
      moviesAmount = 8;
    }
    if (width <= '320') {
      moviesAmount = 5;
    }

    for (let i = 0; i < moviesAmount; i += 1) {
      if (arr[i]) {
        selectedMovies.push(arr[i]);
      }
    }

    if (selectedMovies.length === 0) {
      setMoviesNotFound(true);
    } else {
      setMoviesNotFound(false);
    }

    setMoviesForRender(selectedMovies);
  }

  function handleButtonClick() {
    const selectedMovies = [];

    if (width >= '1280') {
      for (let i = 0; i < moviesForRender.length + 4; i += 1) {
        if (moviesStorage[i]) {
          selectedMovies.push(moviesStorage[i]);
        }
      }
    }
    if (width < '1280' && width > '320') {
      for (let i = 0; i < moviesForRender.length + 2; i += 1) {
        if (moviesStorage[i]) {
          selectedMovies.push(moviesStorage[i]);
        }
      }
    }
    if (width <= '320') {
      for (let i = 0; i < moviesForRender.length + 1; i += 1) {
        if (moviesStorage[i]) {
          selectedMovies.push(moviesStorage[i]);
        }
      }
    }

    setMoviesForRender(selectedMovies);
  }

  useEffect(() => {
    getSavedMovies().then((res) => setSavedMovies(res));
  }, []);

  return (
    <section className='moviescardlist'>
      <div className='moviescardlist__container'>
        {moviesLoaded ? (
          !moviesNotFound ? (
            moviesForRender.map((item) => (
              <MoviesCard
                allMovies={movies}
                setMovies={setMovies}
                savedMovies={savedMovies}
                setSavedMovies={setSavedMovies}
                renderMovies={renderMovieCards}
                movie={item}
                key={item.id ? item.id : item.movieId}
              />
            ))
          ) : (
            <div className='moviescardlist__notfound-text'>
              Ничего не найдено
            </div>
          )
        ) : (
          <Preloader />
        )}
      </div>
      {moviesLoaded && moviesForRender < moviesStorage ? (
        <button
          type='button'
          aria-label='Еще'
          className='moviescardlist__button'
          onClick={handleButtonClick}
        >
          Еще
        </button>
      ) : null}
    </section>
  );
};

export default MoviesCardList;
