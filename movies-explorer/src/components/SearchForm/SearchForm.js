import React, { useEffect, useRef, useState } from 'react';
import './SearchForm.css';
import findButton from '../../images/find.svg';
import thumbOn from '../../images/smalltumb.svg';
import thumbOff from '../../images/smalltumboff.svg';

const SearchForm = ({
  saveResult,
  setSearchQuery,
  thumbState,
  setThumbState,
}) => {
  const [errorIsVisible, setErrorIsVisible] = useState(false);

  const [isSearchInputValid, setIsSearchInputValid] = React.useState(false);
  const [searchInputError, setSearchInputError] = useState('');

  const input = useRef();

  useEffect(() => {
    if (saveResult) {
      let savedThumbState = localStorage.getItem('thumbState');
      if (savedThumbState === 'false') {
        setThumbState(false);
      } else {
        setThumbState(true);
      }
    }
    return;
  }, []);

  function thumbClick() {
    if (thumbState) {
      setThumbState(false);
      if (saveResult) {
        localStorage.setItem('thumbState', false);
      }
    } else {
      setThumbState(true);
      if (saveResult) {
        localStorage.setItem('thumbState', true);
      }
    }
    console.log(localStorage.getItem('thumbState'));
  }

  const handleChanges = (e) => {
    input.current.value = e.target.value;
    checkSearchValidity();

    if (saveResult) {
      localStorage.setItem('searchInput', e.target.value);
    }
  };

  function onSubmit(e) {
    e.preventDefault();
    checkSearchValidity();

    if (isSearchInputValid) {
      setSearchQuery(input.current.value);
    } else {
      setErrorIsVisible(true);
      setTimeout(() => {
        setErrorIsVisible(false);
      }, 1000);
    }
  }

  function checkSearchValidity() {
    if (input.current.value === '') {
      setSearchInputError('Нужно ввести ключевое слово');
      setIsSearchInputValid(false);
      return;
    }

    setIsSearchInputValid(true);
    return;
  }

  useEffect(() => {
    if (saveResult) {
      const savedInput = localStorage.getItem('searchInput');
      if (savedInput) {
        input.current.value = savedInput;
        checkSearchValidity();
        return;
      }
      return;
    }
  }, []);

  return (
    <form
      className='search-form'
      name='search-form'
      onSubmit={onSubmit}
      noValidate
    >
      <div className='search-input-container'>
        <input
          ref={input}
          placeholder='Фильм'
          type='text'
          className='search-input'
          name='search'
          onChange={handleChanges}
        />
        <div
          className={`search-form__error ${
            errorIsVisible ? 'search-form__error_visible' : ''
          }`}
        >
          {searchInputError}
        </div>
        <button type='submit' className='search-button' name=''>
          <img src={findButton} alt='Кнопка поиска' />
        </button>
      </div>
      <div className='search-form__thumb__container'>
        <img
          className='search-form__thumb'
          src={thumbState ? thumbOn : thumbOff}
          onClick={thumbClick}
          alt='Короткометражки тумблер'
        />
        <p className='search-form__thumb-description'>Короткометражки</p>
      </div>
    </form>
  );
};

export default SearchForm;
