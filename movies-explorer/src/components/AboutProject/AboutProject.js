import React from 'react';
import './AboutProject.css';

const AboutProject = () => {
  return (
    <section className='aboutproject' id='aboutproject'>
      <h2 className='aboutproject__title'>О проекте</h2>
      <div className='aboutproject__textblock'>
        <div>
          <h3 className='aboutproject__text'>
            Дипломный проект включал 5 этапов
          </h3>
          <span className='aboutproject__subtext'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </span>
        </div>
        <div>
          <h3 className='aboutproject__text'>На выполнение диплома ушло 5 недель</h3>
          <span className='aboutproject__subtext'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </span>
        </div>
      </div>
      <div className='aboutproject__timeline'>
        <div className='aboutproject__oneweek'>1 неделя</div>
        <div className='aboutproject__fourweeks'>4 недели</div>
        <div className='aboutproject__timeline-text'>Back-end</div>
        <div className='aboutproject__timeline-text'>Front-end</div>
      </div>
    </section>
  );
};

export default AboutProject;
