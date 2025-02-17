import React from 'react';
import { NavLink } from 'react-router-dom';  // Import NavLink
import foodielandLogo from '../assets/foodieland.svg';
import facebookIcon from '../assets/facebook.svg';
import twitterIcon from '../assets/twitter.svg';
import instagramIcon from '../assets/instagram.svg';
import './navigation.css';

function Navigation() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={foodielandLogo} alt="Foodieland Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" className="nav-item">Home</NavLink>  {/* Link to Page1 */}
        </li>
        <li>
          <NavLink to="/page2" className="nav-item">Recipes</NavLink>  {/* Link to Page2 */}
        </li>
        <li>
          <div className="nav-item">Blog</div>
        </li>
        <li>
          <div className="nav-item">Contact</div>
        </li>
        <li>
          <div className="nav-item">About Us</div>
        </li>
      </ul>
      <ul className="social-icons">
        <li>
          <img src={facebookIcon} alt="Facebook" />
        </li>
        <li>
          <img src={twitterIcon} alt="Twitter" />
        </li>
        <li>
          <img src={instagramIcon} alt="Instagram" />
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
