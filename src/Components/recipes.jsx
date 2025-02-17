import React, { useState } from 'react';
import burger from '../assets/burger.svg'; 
import poisson from '../assets/poisson.svg'; 
import pancake from '../assets/pancake.svg'; 
import vegy from '../assets/vegy.svg'; 
import viande from '../assets/viande.svg'; 
import mandarine from '../assets/mandarine.svg'; 
import rice from '../assets/rice.svg';
import pate from '../assets/pate.svg';
import adImage from '../assets/ads.svg';
import clockIcon from '../assets/clock.svg';
import forkIcon from '../assets/fork.svg';
import heartFill from '../assets/heart_fill.svg'; 
import heartUnfill from '../assets/heart_unfill.svg';


import './recipes.css';

function Recipes() {
  const [cards, setCards] = useState([
    {
      id: 1,
      name: 'Big and Juicy Wagyu Beef Cheeseburger',
      time: '30 Minutes',
      category: 'Snack',
      liked: false,
      image: burger,
    },
    {
      id: 2,
      name: 'Fresh Lime Roasted Salmon with Ginger Sauce',
      time: '30 Minutes',
      category: 'Fish',
      liked: false,
      image: poisson,
    },
    {
      id: 3,
      name: 'Strawberry Oatmeal Pancake with Honey Syrup',
      time: '30 Minutes',
      category: 'Breakfast',
      liked: false,
      image: pancake,
    },
    {
      id: 4,
      name: 'Fresh and Healthy Mixed Mayonnaise Salad',
      time: '30 Minutes',
      category: 'Healthy',
      liked: false,
      image: vegy,
    },
    {
      id: 5,
      name: 'Chicken Meatballs with Cream Cheese',
      time: '30 Minutes',
      category: 'Meat',
      liked: false,
      image: viande,
    },
    {
      id: 6,
      name: 'Fruity Pancake with Orange & Blueberry',
      time: '30 Minutes',
      category: 'Sweet',
      liked: false,
      image: mandarine,
    },
    {
      id: 7,
      name: 'The Best Easy One Pot Chicken and Rice',
      time: '30 Minutes',
      category: 'Snack',
      liked: false,
      image: rice,
    },
    {
      id: 8,
      name: 'The Creamiest Creamy Chicken and Bacon Pasta',
      time: '30 Minutes',
      category: 'Noodles',
      liked: false,
      image: pate,
    },
  ]);

  const toggleLike = (id) => {
    setCards(cards.map(card => (
      card.id === id ? { ...card, liked: !card.liked } : card
    )));
  };

  return (
    <>
      <h1 className='recipes'>Simple and tasty recipes</h1>
      <p className='paragraph'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim</p>
      <div className="cards-grid">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <div className="card-image-container">
              <img src={card.image} alt={card.name} className="card-image" />
              <button
  className={`like-button ${card.liked ? 'liked' : ''}`}
  onClick={() => toggleLike(card.id)}
>
  <img 
    src={card.liked ? heartFill : heartUnfill} 
    alt="Heart" 
    className="heart-icon" 
  />
</button>
            </div>
            <div className="card-details">
              <h3>{card.name}</h3>
              <div className="time-category">
                <span>
                  <img src={clockIcon} alt="Clock" className="icon" /> {card.time}
                </span>
                <span>
                  <img src={forkIcon} alt="Fork" className="icon" /> {card.category}
                </span>
              </div>
            </div>
          </div>
        ))}
         <div className="picture">
          <img src={adImage} alt="Ad" />
        </div>
      </div>  
    </>
  );
}

export default Recipes;
