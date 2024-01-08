import React from 'react';
import './Login.css';
import logo from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <section className='login'>
      <div className='login__top-container'>
        <NavLink to='/' className='login__logo'>
          <img className='login__logo' src={logo} alt='Лого' />
        </NavLink>
        <h1 className='login__title'>Рады видеть!</h1>
        <form className='login__form'>
          <p className='login__label'>E-mail</p>
          <input
            required
            minLength='2'
            maxLength='40'
            type='text'
            className='login__input'
          />
          <p className='login__label'>Пароль</p>
          <input
            required
            minLength='2'
            maxLength='40'
            type='text'
            className='login__input'
          />
        </form>
      </div>
      <div className='login__bottom-container'>
        <button type='submit' aria-label='Войти' className='login__button'>
          Войти
        </button>

        <p className='login__description'>
          Ещё не зарегистрированы?<NavLink className='login__link' to="/register">Регистрация</NavLink>
        </p>
      </div>
    </section>
  );
};

export default Login;
