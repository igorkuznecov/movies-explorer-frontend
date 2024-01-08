import React from 'react';
import './SearchForm.css';
import findButton from '../../images/find.svg';
import thumbOn from '../../images/smalltumb.svg';

const SearchForm = () => {
  return (
    <form className='search-form'>
      <div className='search-input-container'>
        <input
          required
          minLength='2'
          maxLength='40'
          placeholder='Фильм'
          type='text'
          className='search-input'
        />
        <button type='submit' className='search-button' name=''>
          <img src={findButton} alt='Кнопка поиска' />
        </button>
      </div>
      <div className='thumb__container'>
      <img className='thumb' src={thumbOn} alt='Короткометражки тумблер' />
      <p className='thumb-description'>Короткометражки</p>
      </div>
    </form>
  );
};

export default SearchForm;
