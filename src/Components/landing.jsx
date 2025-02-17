import React from 'react';
import food from '../assets/food.svg';
import badge from '../assets/badge.svg'; 
import script from '../assets/script.svg'; 
import clock from '../assets/clock.svg'; 
import fork from '../assets/fork.svg'; 
import profile from '../assets/profile.svg'; 
import play from '../assets/play.svg';
import './landing.css';

function Landing() {
  return (
    <>
      <div className="container">
        <div className="text">
            <div className="categorie">
                <img src={script} alt="description" />
                <h4>Hot Recipes</h4>
            </div>
          <h1 className='custom-heading'>Spicy delicious chicken wings</h1>
          <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim.</p>
          <div className="box-container">
             <div className="box">
                <img src={clock} alt="description" />
                <h4>30 Minutes</h4>
              </div>
              <div className="box">
                <img src={fork} alt="description" />
                <h4>Chicken</h4>
              </div>
         </div>
         <div className="parent-container">
      <div className="circle-text-container">
        <div className="circle">
          <img src={profile} alt="Profile" />
        </div>
        <div className="text1">
          <h4>John Smith</h4>
          <p>15 March 2022</p>
        </div>
      </div>
      <div className="play">
        <h4>View Recipes</h4>
        <img src={play} alt="Play" />
      </div>
    </div>
        </div>
        <div className="image">
          <img src={food} alt="description" />
        </div>
        <img className="badge" src={badge} alt="badge" />
      </div>
    </>
  );
}

export default Landing;
