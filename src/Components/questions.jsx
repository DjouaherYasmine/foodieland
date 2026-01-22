import React from "react";
import "./questions.css";
import cookingImage from "/directions.svg"; // Replace with actual image
import facebook from "/facebook.svg"; // Icons
import instagram from "/instagram.svg"; // Icons
import twitter from "/twitter.svg"; // Icons


const InterviewSection = () => {
  return (
    <div className="interview-wrapper">
      {/* Main Content */}
      <div className="interview-container">
        <div className="interview-question">
          <h2>How did you start out in the food industry?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, 
            at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. 
            Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.
          </p>
        </div>

        <div className="interview-question">
          <h2>What do you like most about your job?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, 
            at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. 
            Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.
          </p>
        </div>

        <div className="interview-question">
          <h2>Do you cook at home on your days off?</h2>
          <div className="interview-image-container">
            <img src={cookingImage} alt="Cooking at home" className="interview-image" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, 
            at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. 
            Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.
          </p>
        </div>

        <div className="interview-question">
          <h2>What would your advice be to young people looking to get their foot in the door?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, 
            at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. 
            Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.
          </p>
        </div>

        <blockquote className="interview-quote">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.”
        </blockquote>

        <div className="interview-question">
          <h2>What is the biggest misconception that people have about being a professional chef?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, 
            at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. 
            Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.
          </p>
        </div>
      </div>

      {/* Social Media Section */}
      <aside className="social-share">
        <p>SHARE THIS ON:</p>
        <img src={facebook} className="social" />
        <img src={twitter} className="social" />
        <img src={instagram} className="social" />
      </aside>
    </div>
  );
};

export default InterviewSection;
