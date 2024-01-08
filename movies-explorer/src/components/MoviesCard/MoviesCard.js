import React from 'react';
import './MoviesCard.css';
import testPic from '../../images/test_pic.avif'
import savePic from '../../images/save_pic.svg'

const MoviesCard = () => {
  return (
    <article className='moviescard'>
      <img className='moviescard__pic' src={testPic} />
      <div className='moviescard__title-container'>
        <p className='moviescard__title'>Название фильма</p>
        <img className='moviescard__like' src={savePic} />
      </div>
      <p className='moviescard__movie-length'>1ч42м</p>
    </article>
  );
};

export default MoviesCard;
