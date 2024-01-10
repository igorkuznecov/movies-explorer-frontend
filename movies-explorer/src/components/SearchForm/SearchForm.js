import React, { useEffect, useState } from 'react';
import './SearchForm.css';
import findButton from '../../images/find.svg';
import thumbOn from '../../images/smalltumb.svg';
import thumbOff from '../../images/smalltumboff.svg';

const SearchForm = () => {
  const [thumbState, setThumbState] = useState(true);
  const [thumbPic, setThumbPic] = useState(thumbOn);

  useEffect(() => {
    switch (thumbState) {
      case false:
        setThumbPic(thumbOff);
        break;
      case true:
        setThumbPic(thumbOn);
        break;
      default:
        setThumbPic(thumbOn);
    }
  }, [thumbState]);

  function thumbClick() {
    switch (thumbState) {
      case false:
        setThumbState(true);
        break;
      case true:
        setThumbState(false);
        break;
      default:
        setThumbState(true);
    }
  }

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
      <div className='search-form__thumb__container'>
        <img
          className='search-form__thumb'
          src={thumbPic}
          onClick={thumbClick}
          alt='Короткометражки тумблер'
        />
        <p className='search-form__thumb-description'>Короткометражки</p>
      </div>
    </form>
  );
};

export default SearchForm;
