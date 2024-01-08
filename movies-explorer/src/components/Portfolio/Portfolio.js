import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <a className='portfolio__link' href="#">Статичный сайт</a>
      <a className='portfolio__link' href="#">Адаптивный сайт</a>
      <a className='portfolio__link' href="#">Одностраничное приложение</a>
    </section>
  );
};

export default Portfolio;
