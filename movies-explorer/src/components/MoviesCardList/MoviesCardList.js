import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = () => {
  return (
    <section className='moviescardlist'>
      <div className='moviescardlist__container'>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
      </div>
      <button type='button' aria-label='Еще' className='moviescardlist__button'>
        Еще
      </button>
    </section>
  );
};

export default MoviesCardList;
