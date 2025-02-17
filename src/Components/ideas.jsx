import React, { useState } from 'react';
import pic1 from '../assets/pic1.svg';
import pic2 from '../assets/pic2.svg';
import pic3 from '../assets/pic3.svg';
import pic4 from '../assets/pic4.svg';
import pic5 from '../assets/pic5.svg';
import pic6 from '../assets/pic6.svg';
import pic7 from '../assets/pic7.svg';
import pic8 from '../assets/pic8.svg';
import clockIcon from '../assets/clock.svg';
import forkIcon from '../assets/fork.svg';
import heartFill from '../assets/heart_fill.svg'; 
import heartUnfill from '../assets/heart_unfill.svg';


import './ideas.css';

function Ideas() {
  const [cards, setCards] = useState([
    {
      id: 1,
      name: 'Mixed Tropical Fruit Salad with Superfood Boosts ',
      time: '30 Minutes',
      category: 'Healthy',
      liked: false,
      image: pic1,
    },
    {
      id: 2,
      name: 'Big and Juicy Wagyu Beef Cheeseburger',
      time: '30 Minutes',
      category: 'Western',
      liked: false,
      image: pic2,
    },
    {
      id: 3,
      name: 'Healthy Japanese Fried Rice with Asparagus',
      time: '30 Minutes',
      category: 'Healthy',
      liked: false,
      image: pic3,
    },
    {
      id: 4,
      name: 'Cauliflower Walnut Vegetarian Taco Meat',
      time: '30 Minutes',
      category: 'Eastern',
      liked: false,
      image: pic4,
    },
    {
      id: 5,
      name: 'Rainbow Chicken Salad with Almond Honey Mustard Dressing',
      time: '30 Minutes',
      category: 'Healthy',
      liked: false,
      image: pic5,
    },
    {
      id: 6,
      name: 'Barbeque Spicy Sandwiches with Chips ',
      time: '30 Minutes',
      category: 'Snack',
      liked: false,
      image: pic6,
    },
    {
      id: 7,
      name: 'Firecracker Vegan Lettuce Wraps - Spicy! ',
      time: '30 Minutes',
      category: 'Seafood',
      liked: false,
      image: pic7,
    },
    {
      id: 8,
      name: 'Chicken Ramen Soup with Mushroom',
      time: '30 Minutes',
      category: 'Japenese',
      liked: false,
      image: pic8,
    },
  ]);

  const toggleLike = (id) => {
    setCards(cards.map(card => (
      card.id === id ? { ...card, liked: !card.liked } : card
    )));
  };

  return (
    <>
      <div className='head'>
      <h1 className='ideas'>Try this delicious recipe to make your day</h1>
      <p className='parag'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
      </div>
      <div className="card-grid">
        {cards.map((card) => (
          <div className="cards" key={card.id}>
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
            <div className="card-detail">
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
        
      </div>  
    </>
  );
}

export default Ideas;
