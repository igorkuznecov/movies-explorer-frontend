import React from 'react';
import './BurgerMenu.css';
import account_pic from '../../images/account_pic.svg';
import { NavLink } from 'react-router-dom';

export default function BurgerMenu({ onClose, isOpen }) {
  return (
    <nav className={`burger-menu ${isOpen ? 'burger-menu_opened' : ''}`}>
      <button
        type='button'
        aria-label='Закрыть'
        className='burger-menu__close-button'
        onClick={onClose}
      />
      <div className='burger-menu__container'>
        <nav className='burger-menu__nav'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              `burger-menu__nav-element ${
                isActive ? 'burger-menu__nav-element-active' : ''
              }`
            }
          >
            Главная
          </NavLink>
          <NavLink
            to='/movies'
            className={({ isActive }) =>
              `burger-menu__nav-element ${
                isActive ? 'burger-menu__nav-element-active' : ''
              }`
            }
          >
            Фильмы
          </NavLink>
          <NavLink
            to='/saved'
            className={({ isActive }) =>
              `burger-menu__nav-element ${
                isActive ? 'burger-menu__nav-element-active' : ''
              }`
            }
          >
            Сохраненные фильмы
          </NavLink>
        </nav>
        <div className='burger-menu__user'>
          <NavLink to='/profile' className='burger-menu__link'>
            <span className='burger-menu__username'>Аккаунт</span>
            <div className='burger-menu__user-img-container'>
              <img className='burger-menu__user-img' alt='Иконка пользователя' src={account_pic} />
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
