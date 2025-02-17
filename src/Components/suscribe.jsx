import React from 'react';
import './suscribe.css';
import pic from '../assets/subscribe.svg';

function Suscribe() {
  return (
    <div className='subscribe-container' style={{ backgroundImage: `url(${pic})` }}>
      <div className='overlay'>
        <h1 className='subscribe-header'>Deliciousness to your inbox</h1>
        <p className='subscribe-paragraph'>
        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim 
        </p>
        <div className="subscribe-input-wrapper">
  <div className='subscribe-input'>
    <input type='email' placeholder='Your email address' className='email-input' />
    <button className='subscribe-button'>Subscribe</button>
  </div>
</div>
      </div>
    </div>
  );
}

export default Suscribe;
