import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg';
import account_pic from '../../images/account_pic.svg';
import { NavLink } from 'react-router-dom';
import Burger from '../../images/burger.svg';

const Header = ({ isOn, authorized, openBurgerMenu }) => {
  if (!isOn) {
    return;
  }

  if (authorized) {
    return (
      <header className='header'>
        <NavLink to='/'>
          <img className='header__logo' alt='Лого' src={logo} />
        </NavLink>
        <nav className='header__nav-section header__nav-section-authorized'>
          <NavLink to='/movies' className='header__nav-element'>
            Фильмы
          </NavLink>
          <NavLink to='/saved' className='header__nav-element'>
            Сохраненные фильмы
          </NavLink>
        </nav>
        <div className='header__user-section'>
          <NavLink to='/profile' className='header__link'>
            <span className='header__user'>Аккаунт</span>
          </NavLink>
          <div className='header__user-img-container'>
            <img className='header__user-img' alt='Иконка пользователя' src={account_pic} />
          </div>
        </div>
        <button
          type='button'
          className='header__burger'
          onClick={openBurgerMenu}
        >
          <img src={Burger} alt='Меню' />
        </button>
      </header>
    );
  } else {
    return (
      <header className='header'>
        <NavLink to='/'>
          <img className='header__logo' src={logo} alt='Лого' />
        </NavLink>
        <div className='header__nav-section header__nav-section_unauthorized'>
          <NavLink to='/register' className='header__nav-element'>
            Регистрация
          </NavLink>
          <NavLink
            to='/login'
            className='header__nav-element header__nav-element_button'
          >
            Войти
          </NavLink>
        </div>
      </header>
    );
  }
};

export default Header;
