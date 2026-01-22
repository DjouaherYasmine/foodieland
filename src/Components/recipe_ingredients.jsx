import React , { useState } from "react";
import "./recipe_ingredients.css";
import viande from "/viande.svg";
import pate from "/pate.svg";
import rice from "/rice.svg";
import ads from "/ads.svg";


function Ingredients(){
  const [ingredients, setIngredients] = useState([
    { id: 1, name: "Lorem ipsum dolor sit amet", checked: false, category: "Main dish" },
    { id: 2, name: "Lorem ipsum dolor sit amet", checked: false, category: "Main dish" },
    { id: 3, name: "Lorem ipsum dolor sit amet", checked: false, category: "Main dish" },
    { id: 4, name: "Lorem ipsum dolor sit amet", checked: false, category: "Main dish" },
    { id: 5, name: "Lorem ipsum dolor sit amet", checked: false, category: "Sauce" },
    { id: 6, name: "Lorem ipsum dolor sit amet", checked: false, category: "Sauce" },
    { id: 7, name: "Lorem ipsum dolor sit amet", checked: false, category: "Sauce" },
  ]);
  const recipes = [
    {
      id: 1,
      image: viande,
      title: "Chicken Meatball with Creamy Cheese",
      author: "By Andreas Paula",
    },
    {
      id: 2,
      image: pate,
      title: "The Creamiest Creamy Chicken and...",
      author: "By Andreas Paula",
    },
    {
      id: 3,
      image: rice,
      title: "The Best Easy One Pot Chicken and Rice",
      author: "By Andreas Paula",
    },
  ];
  
  const toggleCheck = (id) => {
    setIngredients(
      ingredients.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };
return(
  <div className="ingredients">
	<p className='paragraph-recipe'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <div className="container2">
      {/* Ingredients List Section (2/3 Width) */}
      <div className="ingredients-section">
        <h2 className="header2">Ingredients</h2>
        <div className="category2">
          <h3 className="header3">For Main Dish</h3>
          {ingredients
            .filter((item) => item.category === "Main dish")
            .map((item) => (
              <label key={item.id} className={`ingredient ${item.checked ? "checked" : ""}`}>
                <input type="checkbox" checked={item.checked} onChange={() => toggleCheck(item.id)} />
                {item.name}
              </label>
            ))}
        </div>

        <div className="category2">
          <h3 className="header3">For the Sauce</h3>
          {ingredients
            .filter((item) => item.category === "Sauce")
            .map((item) => (
              <label key={item.id} className={`ingredient ${item.checked ? "checked" : ""}`}>
                <input type="checkbox" checked={item.checked} onChange={() => toggleCheck(item.id)} />
                {item.name}
              </label>
            ))}
        </div>
      </div>

      {/* Empty Section (1/3 Width) */}
      <div>
      <div className="recipe-list">
      <h2 className="title5">Other Recipe</h2>
      {recipes.map((recipe) => (
        <div className="recipe-card" key={recipe.id}>
          <img src={recipe.image} alt={recipe.title} className="recipe-image1" />
          <div className="recipe-details">
            <h3 className="recipe-title">{recipe.title}</h3>
            <p className="recipe-author">{recipe.author}</p>
          </div>
        </div>
      ))}
    </div>
    <img src={ ads } alt = "ads" className="ads"></img>
      </div>
    </div>
  </div>
);
}
export  default Ingredients;
