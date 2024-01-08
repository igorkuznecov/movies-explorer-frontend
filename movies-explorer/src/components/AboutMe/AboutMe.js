import React from 'react';
import './AboutMe.css';
import avatar from '../../images/ava.jpg';

const AboutMe = () => {
  return (
    <section className='aboutme'>
      <h2 className='aboutme__title'>Студент</h2>
      <div className='aboutme__content'>
      <div>
        <h3 className='aboutme__subtitle'>Игорь</h3>
        <h4 className='aboutme__description'>Фронтенд-разработчик, 32 года</h4>
        <p className='aboutme__text'>
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
          есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
          Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
          После того, как прошёл курс по веб-разработке, начал заниматься
          фриланс-заказами и ушёл с постоянной работы.
        </p>
        <a className='aboutme__gitlink' href="https://github.com/igorkuznecov">Github</a>
      </div>
      <img className='aboutme__picture' alt='Студент' src={avatar} />
      </div>
    </section>
  );
};

export default AboutMe;
