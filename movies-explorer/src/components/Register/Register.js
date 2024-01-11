import React from 'react';
import './Register.css';
import logo from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <section className='register'>
      <div className='register__top-container'>
        <NavLink to='/' className='register__logo'>
          <img className='register__logo-pic' src={logo} alt='Лого'/>
        </NavLink>
        <h1 className='register__title'>Добро пожаловать!</h1>
        <form className='register__form' id='register__form'>
          <p className='register__label'>Имя</p>
          <input
            required
            minLength='2'
            maxLength='40'
            type='text'
            className='register__input'
          />
          <p className='register__label'>E-mail</p>
          <input
            required
            minLength='2'
            maxLength='40'
            type='text'
            className='register__input'
          />
          <p className='register__label'>Пароль</p>
          <input
            required
            minLength='2'
            maxLength='40'
            type='text'
            className='register__input'
          />
          <p className='register__warning'>Что-то пошло не так...</p>
        </form>
      </div>
      <div className='register__bottom-container'>
        <button
          type='submit'
          form='register__form'
          aria-label='Войти'
          className='register__button'
        >
          Зарегистрироваться
        </button>

        <p className='register__description'>
          Уже зарегистрированы?
          <NavLink className='register__link' to='/login'>
            Войти
          </NavLink>
        </p>
      </div>
    </section>
  );
};

export default Login;
