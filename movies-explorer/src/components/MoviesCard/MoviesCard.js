import React, { useEffect, useState } from 'react';
import './MoviesCard.css';
import savePic from '../../images/button_dark.svg';
import deletePic from '../../images/button_green.svg';
import deletePicInSaved from '../../images/delete_pic.svg';
import { createMovie, deleteMovie } from '../../utils/MainApi';
import { useLocation } from 'react-router-dom';

const MoviesCard = ({
  movie,
  savedMovies,
  filterByQuery,
  searchQuery,
  setSavedMovies,
  setMovies,
  renderMovies,
}) => {
  const [likePic, setLikePic] = useState();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/movies') {
      const isSavedCheck = savedMovies.some((i) => i.movieId === movie.id);
      if (isSavedCheck) {
        setLikePic(deletePic);
      } else {
        setLikePic(savePic);
      }
    } else {
      setLikePic(deletePicInSaved);
    }
  }, []);

  function toHoursAndMinutes(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}ч${minutes > 0 ? ` ${minutes}м` : ''}`;
  }

  function handleLikeClick() {
    const thisMovieInSaved = savedMovies.find(
      (item) => item.movieId === movie.id
    );

    if (thisMovieInSaved === undefined && location.pathname === '/movies') {
      createMovie(movie).then((res) => {
        setLikePic(deletePic);
        setSavedMovies([...savedMovies, res]);
      });
    } else if (location.pathname === '/movies') {
      deleteMovie(thisMovieInSaved._id).then(() => {
        setLikePic(savePic);
        setSavedMovies(savedMovies.filter((item) => item.movieId != movie.id));
      });
    } else {
      deleteMovie(movie._id).then(() => {
        const newMoviesMassive = savedMovies.filter(
          (item) => item.movieId != movie.movieId
        );
        setMovies(newMoviesMassive);
        if (searchQuery) {
          renderMovies(filterByQuery(newMoviesMassive, searchQuery));
        } else {
          renderMovies(newMoviesMassive);
        }
      });
    }
  }

  return (
    <article className='moviescard'>
      <a
        className='moviescard__link'
        href={movie.trailerLink ? movie.trailerLink : movie.trailer}
        target='_blank'
      >
        <img
          className='moviescard__pic'
          src={`https://api.nomoreparties.co${
            movie.image.url ? movie.image.url : movie.image
          }`}
          alt='Карточка фильма'
        />
      </a>
      <div className='moviescard__title-container'>
        <p className='moviescard__title'>{movie.nameRU}</p>
        <button type='button' className='moviescard__button'>
          <img
            className='moviescard__like'
            src={likePic}
            alt='Сохранить'
            onClick={handleLikeClick}
          />
        </button>
      </div>
      <p className='moviescard__movie-length'>
        {toHoursAndMinutes(movie.duration)}
      </p>
    </article>
  );
};

export default MoviesCard;
