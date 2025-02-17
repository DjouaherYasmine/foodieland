import React, { useState } from 'react';
import sushi from '../assets/sushi.svg';
import salad from '../assets/salad.svg';
import meat from '../assets/meat.svg';
import cake from '../assets/cake.svg';
import sandwich from '../assets/sandwich.svg';
import chocolate from '../assets/chocolate.svg';
import './categories.css';

function Categories() {
    const [pictures] = useState([
        { name: 'Breakfast', path: sushi, color: '#708246' },    // Olive Green
        { name: 'Vegan', path: salad, color: '#6CC63F' },        // Light Green
        { name: 'Meat', path: meat, color: '#CC261B' },          // Red
        { name: 'Dessert', path: cake, color: '#F09E00' },       // Orange
        { name: 'Lunch', path: sandwich, color: '#000000' },     // Black
        { name: 'Chocolate', path: chocolate, color: '#4B2E2A' } // Brown
    ]);

    return (
        <>
            <h1>Categories</h1>
            <div className="picture-list">
                {pictures.map((picture, index) => (
                    <div
                        className="picture-container"
                        key={index}
                        style={{
                            background: `linear-gradient(to top, ${picture.color}1A 0%, ${picture.color}00 100%)` // Smooth gradient from 10% to 0%
                        }}
                    >
                        <img src={picture.path} alt={picture.name} className="picture-img" />
                        <p className="picture-name">{picture.name}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Categories;
