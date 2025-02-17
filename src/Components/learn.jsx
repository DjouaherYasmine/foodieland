import React from 'react';
import './learn.css';
import exampleImage from '../assets/chef.svg'; // Import your image

function Learn() {
  return (
    <div className="learn-container">
      <div className="learn-content">
        <h1>Everyone can be a
        chef in their own kitchen</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim 
        </p>
        <button className="learn-button">Learn More</button>
      </div>
      <div className="learn-image">
        <img src={exampleImage} alt="Learn More" />
      </div>
    </div>
  );
}

export default Learn;
