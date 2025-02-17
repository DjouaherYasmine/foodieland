import React from 'react';
import foodielandLogo from '../assets/foodieland.svg';
import facebookIcon from '../assets/facebook.svg';
import twitterIcon from '../assets/twitter.svg';
import instagramIcon from '../assets/instagram.svg';
import './footer.css';

function Footer() {
  return (
    <>
      <div className='bottom'>
        <div className="logo">
          <img src={foodielandLogo} alt="Foodieland Logo" />
          <p>Lorem ipsum dolor sit amet, consectetuipisicing elit</p>
        </div>
        <ul className="nav-links">
          <li>
            <div className="nav-item">Recipes</div>
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
      </div>
      <footer className='foot'>
    
  <p>© 2020 Flowbase. Powered by <a href="https://webflow.com">Webflow</a></p>
  <ul className="social-icon">
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
</footer>
    </>
  );
}

export default Footer;
