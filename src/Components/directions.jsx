import React from "react";
import "./Directions.css";
import direct from "../assets/directions.svg";

const directions = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt...",
    image: direct,
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt...",
    image: null, // No image for this step
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt...",
    image: null,
  },
];

const Directions = () => {
    const toggleCheck = (id) => {
        setIngredients(
          ingredients.map((step) =>
            step.id === id ? { ...step, checked: !step.checked } : step
          )
        );
      };
  return (
    <div className="directions">
      <h2 className="title6">Directions</h2>
      {directions.map((step) => (
        <div className="direction-step" key={step.id}>
          <div className="direction-text">
            <h3>
              <input type="checkbox" checked={step.checked} onChange={() => toggleCheck(step.id)} />
              <span className="step-number">{step.id}. </span>
              {step.title}
            </h3>
            <p>{step.description}</p>
          </div>
          {step.image && <img src={step.image} alt={step.title} className="direction-image" />}
        </div>
      ))}
    </div>
  );
};

export default Directions;
