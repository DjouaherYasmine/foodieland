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
          <NavLink to="/page3" className="nav-item">Blog</NavLink> {/* Link to Page3 */}
        </li>
        <li>
          <NavLink to="/page4" className="nav-item">Contact</NavLink> {/* Link to Page4 */}
        </li>
        <li>
          <NavLink to="/page5" className="nav-item">About Us</NavLink> {/* Link to Page5 */}
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
