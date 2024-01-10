import React from 'react';
import './Footer.css';

const Footer = ({ isOn }) => {
  if (!isOn) {
    return;
  }


  return (
    <footer className='footer'>
      <p className='footer__copyright'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className='footer__nav'>
        <div className='footer__year'>{`© ${new Date().getFullYear()}`}</div>
        <ul className='footer__links'>
          <li className='footer__link'>Яндекс.Практикум</li>
          <li className='footer__link'>Github</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
