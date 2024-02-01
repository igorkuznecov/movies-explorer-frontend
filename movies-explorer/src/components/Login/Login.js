import React, { useContext, useState } from 'react';
import './Login.css';
import logo from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';
import { useFormWithValidation } from '../../utils/validation';
import { CurrentServerErrorContext } from '../../contexts/CurrentServerErrorContext';

const Login = ({ handleLogin }) => {
  const error = useContext(CurrentServerErrorContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const validation = useFormWithValidation();

  function handleEmailChange(e) {
    validation.handleChange(e);
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    validation.handleChange(e);
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validation.isValid) {
      handleLogin(password, email);
    }
  }

  return (
    <section className='login'>
      <div className='login__top-container'>
        <NavLink to='/' className='login__logo'>
          <img className='login__logo_pic' src={logo} alt='Лого' />
        </NavLink>
        <h1 className='login__title'>Рады видеть!</h1>
        <form
          className='login__form'
          onSubmit={handleSubmit}
          id='login__form'
          noValidate
        >
          <p className='login__label'>E-mail</p>
          <input
            required
            minLength='2'
            maxLength='40'
            type='email'
            className='login__input'
            value={email}
            onChange={handleEmailChange}
            name='loginEmailInput'
          />
          <p className='login__warning'>{validation.errors.loginEmailInput}</p>
          <p className='login__label'>Пароль</p>
          <input
            required
            minLength='2'
            maxLength='40'
            type='password'
            className='login__input'
            value={password}
            onChange={handlePasswordChange}
            name='loginPasswordInput'
          />
          <p className='login__warning'>
            {validation.errors.loginPasswordInput}
          </p>
        </form>
      </div>
      <div className='login__bottom-container'>
        <div
          className={`login__server-error ${
            error.visibility ? 'login__server-error_visible' : ''
          }`}
        >
          {error.name}
        </div>
        <button
          type='submit'
          aria-label='Войти'
          className={
            validation.isValid
              ? 'login__button login__button_active'
              : 'login__button'
          }
          form='login__form'
        >
          Войти
        </button>

        <p className='login__description'>
          Ещё не зарегистрированы?
          <NavLink className='login__link' to='/signup'>
            Регистрация
          </NavLink>
        </p>
      </div>
    </section>
  );
};

export default Login;
