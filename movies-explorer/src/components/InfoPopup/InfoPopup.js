import React, { useEffect, useState } from 'react';
import './InfoPopup.css';

export default function InfoPopup({ isOpen, message, isError }) {
  const [popupType, setPopupType] = useState('');

  return (
    <section
      className={`info-popup ${isOpen ? 'info-popup_opened' : ''} ${
        isError ? 'info-popup_error' : 'info-popup_success'
      }`}
    >
      <div>{message}</div>
    </section>
  );
}
