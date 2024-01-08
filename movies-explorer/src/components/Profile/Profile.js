import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <section className='profile'>
      <h1 className='profile__title'>Привет, username!</h1>
      <form className='profile__form' id='profile__form'>
        <p className='profile__input-label'>Имя</p>

        <input
          required
          minLength='2'
          maxLength='40'
          placeholder='Имя'
          type='text'
          className='profile__input'
        />
        <p className='profile__input-label'>Почта</p>
        <input
          required
          minLength='2'
          maxLength='40'
          placeholder='Почта'
          type='text'
          className='profile__input'
        />
      </form>
      <div className='profile__buttons'>
        <button
          type='submit'
          aria-label='Редактировать'
          className='profile__edit-button'
          form="profile__form"
        >
          Редактировать
        </button>
        <button
          type='button'
          aria-label='Выйти из аккаунта'
          className='profile__exit-button'
        >
          Выйти из аккаунта
        </button>
      </div>
    </section>
  );
};

export default Profile;
