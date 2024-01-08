import React from 'react';
import './Footer.css';
import { Location } from 'react-router-dom';

const Footer = ({ isOn }) => {
  if (!isOn) {
    return;
  }


  return (
    <section className='footer'>
      <p className='footer__copyright'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className='footer__nav'>
        <div className='footer__year'>{`© ${new Date().getFullYear()}`}</div>
        <ul className='footer__links'>
          <li className='footer_link'>Яндекс.Практикум</li>
          <li className='footer_link'>Github</li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
