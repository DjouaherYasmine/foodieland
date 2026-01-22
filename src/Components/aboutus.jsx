import React from "react";
import "./aboutus.css";
import authorImage from "/profile.svg"; // Replace with actual image
import chefImage from "/chef2.svg"; // Replace with actual image

const Aboutus = () => {
  return (
    <div className="article-container">
      <div className="article-header">
        <h1 className="article-title">Full Guide to Becoming a Professional Chef</h1>

        <div className="article-meta">
          <img src={authorImage} alt="John Smith" className="author-image" />
          <span className="author-name">John Smith</span>
          <span className="divider"></span>
          <span className="article-date">15 March 2022</span>
        </div>

        <p className="article-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at 
          congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar.
        </p>
      </div>
      <div className="article-image-container">
        <img src={chefImage} alt="Chef Cooking" className="article-image" />
      </div>
    </div>
  );
};

export default Aboutus;
