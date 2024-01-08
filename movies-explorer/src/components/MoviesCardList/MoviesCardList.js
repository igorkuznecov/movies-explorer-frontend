import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = () => {
  return (
    <>
      <section className='moviescardlist'>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
      </section>
      <button type='button' aria-label='Еще' className='moviescardlist__button'>
        Еще
      </button>
    </>
  );
};

export default MoviesCardList;
