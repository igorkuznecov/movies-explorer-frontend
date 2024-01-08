import React from 'react'
import './Promo.css'

const Promo = ({ ReadMoreClick }) => {
    return (
        <section className="promo">
          <div className='promo__container'>
          <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
          <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <button className='promo__button' onClick={ReadMoreClick} >Узнать больше</button>
          </div>
        </section>
    )
};

export default Promo
