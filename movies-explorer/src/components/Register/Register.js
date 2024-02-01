import React, { useContext, useState } from 'react';
import './Register.css';
import logo from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';
import { useFormWithValidation } from '../../utils/validation';
import { CurrentServerErrorContext } from '../../contexts/CurrentServerErrorContext';

const Register = ({ handleRegister }) => {
  const error = useContext(CurrentServerErrorContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const validation = useFormWithValidation();

  function handleEmailChange(e) {
    validation.handleChange(e);
    setEmail(e.target.value);
  }

  function handleNameChange(e) {
    validation.handleChange(e);
    setName(e.target.value);
  }

  function handlePasswordChange(e) {
    validation.handleChange(e);
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validation.isValid) {
      handleRegister(password, email, name);
    }
  }

  return (
    <section className='register'>
      <div className='register__top-container'>
        <NavLink to='/' className='register__logo'>
          <img className='register__logo-pic' src={logo} alt='Лого' />
        </NavLink>
        <h1 className='register__title'>Добро пожаловать!</h1>
        <form
          className='register__form'
          id='register__form'
          onSubmit={handleSubmit}
          name='registerForm'
          noValidate
        >
          <p className='register__label'>Имя</p>
          <input
            required
            minLength='2'
            maxLength='40'
            type='text'
            className='register__input'
            value={name}
            onChange={handleNameChange}
            name='registerNameInput'
          />
          <p className='register__warning'>
            {validation.errors.registerNameInput}
          </p>
          <p className='register__label'>E-mail</p>
          <input
            required
            minLength='2'
            maxLength='40'
            type='email'
            className='register__input'
            value={email}
            onChange={handleEmailChange}
            name='registerEmailInput'
          />
          <p className='register__warning'>
            {validation.errors.registerEmailInput}
          </p>
          <p className='register__label'>Пароль</p>
          <input
            required
            minLength='2'
            maxLength='40'
            type='password'
            className='register__input'
            value={password}
            onChange={handlePasswordChange}
            name='registerPasswordInput'
          />
          <p className='register__warning'>
            {validation.errors.registerPasswordInput}
          </p>
        </form>
      </div>
      <div className='register__bottom-container'>
      <div
          className={`register__server-error ${
            error.visibility ? 'register__server-error_visible' : ''
          }`}
        >
          {error.name}
        </div>
        <button
          type='submit'
          form='register__form'
          aria-label='Войти'
          className={
            validation.isValid
              ? 'register__button register__button_active'
              : 'register__button'
          }
        >
          Зарегистрироваться
        </button>

        <p className='register__description'>
          Уже зарегистрированы?
          <NavLink className='register__link' to='/signin'>
            Войти
          </NavLink>
        </p>
      </div>
    </section>
  );
};

export default Register;
