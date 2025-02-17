import React from 'react';
import clock from '../assets/clock.svg';
import fork from '../assets/fork.svg';
import profile from '../assets/profile.svg';
import printer from '../assets/printer.svg';
import share from '../assets/share.svg';
import './info.css';

function Info() {
  return (
    <div className="information">
      <div className="info-content">
        <h1 className="title">Healthy Japanese Fried Rice</h1>
        <div className="info-container">
          <div className="circle-text-container">
            <div className="circle">
              <img src={profile} alt="Profile" />
            </div>
            <div className="text1">
              <h4>John Smith</h4>
              <p>15 March 2022</p>
            </div>
          </div>

          <div className="divider"></div>

          <div className="time-info">
            <img src={clock} alt="Prep time icon" />
            <div>
              <h4>PREP TIME</h4>
              <p>15 Minutes</p>
            </div>
          </div>

          <div className="divider"></div>

          <div className="time-info">
            <img src={clock} alt="Cook time icon" />
            <div>
              <h4>COOK TIME</h4>
              <p>30 Minutes</p>
            </div>
          </div>

          <div className="divider"></div>

          <div className="type-info">
            <img src={fork} alt="Type icon" />
            <h4>Chicken</h4>
          </div>
        </div>
      </div>

      {/* Action icons on the far right */}
      <div className="action-icons">
        <div className="circle-text">
          <div className="circle">
            <img src={printer} alt="Print" />
          </div>
          <p className="action-label">Print</p>
        </div>
        <div className="circle-text">
          <div className="circle">
            <img src={share} alt="Share" />
          </div>
          <p className="action-label">Share</p>
        </div>
      </div>
    </div>
  );
}

export default Info;
