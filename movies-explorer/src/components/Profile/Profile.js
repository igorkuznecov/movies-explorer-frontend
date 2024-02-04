import React, { useContext, useState } from 'react';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../utils/validation';

const Profile = ({ handleProfileEdit, handleProfileExit }) => {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [emailValidity, setEmailValidity] = useState(false);
  const [nameValidity, setNameValidity] = useState(false);

  const validation = useFormWithValidation();

  function handleEmailChange(e) {
    validation.handleChange(e);
    setEmail(e.target.value);
    if (e.target.value !== currentUser.email) {
      setEmailValidity(true);
    } else {
      setEmailValidity(false);
    }
  }

  function handleNameChange(e) {
    validation.handleChange(e);
    setName(e.target.value);

    if (e.target.value !== currentUser.name) {
      setNameValidity(true);
    } else {
      setNameValidity(false);
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    if (validation.isValid && (emailValidity || nameValidity)) {
      setEmailValidity(false)
      setNameValidity(false)
      handleProfileEdit(name, email)
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
          pattern='[^@\s]+@[^@\s]+\.[^@\s]+'
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
            (validation.isValid && (emailValidity || nameValidity))
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
