import React, { useContext, useState } from 'react';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../utils/validation';
import { CurrentServerErrorContext } from '../../contexts/CurrentServerErrorContext';

const Profile = ({ handleProfileEdit, handleProfileExit }) => {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);

  const error = useContext(CurrentServerErrorContext);
  const validation = useFormWithValidation();

  function handleEmailChange(e) {
    validation.handleChange(e)
    setEmail(e.target.value);
  }

  function handleNameChange(e) {
    validation.handleChange(e)
    setName(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    if (validation.isValid) {
    handleProfileEdit(name, email);
  }
  }

  function onExit() {
    handleProfileExit();
  }

  return (
    <section className='profile'>
      <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
      <form className='profile__form' id='profile__form' onSubmit={onSubmit}>
        <p className='profile__input-label'>Имя</p>
        <input
          required
          minLength='2'
          maxLength='40'
          placeholder='Имя'
          type='text'
          className='profile__input'
          value={name}
          onChange={handleNameChange}
          name='nameProfileInput'
        />
        <p className='profile__input-label'>Почта</p>
        <input
          required
          minLength='2'
          maxLength='40'
          placeholder='Почта'
          type='email'
          className='profile__input'
          value={email}
          onChange={handleEmailChange}
          name='emailProfileInput'
        />
      </form>
      <div className='profile__buttons'>
        <button
          type='submit'
          aria-label='Редактировать'
          className={
            validation.isValid
              ? 'profile__edit-button profile__edit-button_active'
              : 'profile__edit-button'
          }
          form='profile__form'
        >
          Редактировать
        </button>
        <button
          type='button'
          aria-label='Выйти из аккаунта'
          className='profile__exit-button'
          onClick={onExit}
        >
          Выйти из аккаунта
        </button>
      </div>
    </section>
  );
};

export default Profile;
