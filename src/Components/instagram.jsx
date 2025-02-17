import React from 'react';
import post1 from '../assets/post1.svg';
import post2 from '../assets/post2.svg';
import post3 from '../assets/post3.svg';
import post4 from '../assets/post4.svg';
import instaLogo from '../assets/insta.svg';
import './instagram.css';

function Instagram() {
  return (
    <>
      <div className='container-insta'>
        <h1 className='insta'>Check out @foodieland on Instagram</h1>
        <p className='para'>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim.
        </p>
        <div className="post-container">
          <img src={post1} alt="Instagram Post 1" className="post-image" />
          <img src={post2} alt="Instagram Post 2" className="post-image" />
          <img src={post3} alt="Instagram Post 3" className="post-image" />
          <img src={post4} alt="Instagram Post 4" className="post-image" />
        </div>
        <button className="insta-button">Visit Our Instagram <img src={instaLogo} alt="Instagram Logo" className="insta-logo" /></button>
      </div>
    </>
  );
}

export default Instagram;
