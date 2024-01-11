import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <a
        className='portfolio__link'
        href='https://github.com/igorkuznecov/how-to-learn'
        target='_blank'
        rel='noreferrer'
      >
        Статичный сайт
      </a>
      <a
        className='portfolio__link'
        href='https://github.com/igorkuznecov/russian-travel'
        target='_blank'
        rel='noreferrer'
      >
        Адаптивный сайт
      </a>
      <a
        className='portfolio__link'
        href='https://github.com/igorkuznecov/react-mesto-api-full-gha'
        target='_blank'
        rel='noreferrer'
      >
        Одностраничное приложение
      </a>
    </section>
  );
};

export default Portfolio;
