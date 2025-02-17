import React from "react";
import rice from "../assets/pic3.svg";
import "./recipe_detail.css";

function RecipeDetail() {
    return (
        <div className="recipe-container">
            <div className="recipe-image-container">
                <img src={rice} alt="Rice" className="recipe-image" /> 
            </div>
            <div className="blue-box">
                <h3 className="nutrition-title">Nutrition Information</h3>
                <ul className="nutrition-list">
                    <li>
                        <span>Calories</span>
                        <span>219.9 kcal</span>
                    </li>
                    <li>
                        <span>Total Fat</span>
                        <span>10.7 g</span>
                    </li>
                    <li>
                        <span>Protein</span>
                        <span>7.9 g</span>
                    </li>
                    <li>
                        <span>Carbohydrate</span>
                        <span>22.3 g</span>
                    </li>
                    <li>
                        <span>Cholesterol</span>
                        <span>37.4 mg</span>
                    </li>
                </ul>
                
            </div>
        </div>
    );
}
export default RecipeDetail;