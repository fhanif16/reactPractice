import React from 'react';
import "./Menu.css"
import { Link } from 'react-router-dom';

const Menu = ({meal}) => {
  console.log(meal)

    return (
        <div class="menu">
        <div>
        <img src={meal.strMealThumb} />
        </div>
         <div class="card">
            <h1>{meal.strMeal}</h1>
            <p>{meal.strArea}</p>
            <p>{meal.strCategory}</p>
            
           
            
         </div>
        
        </div>
    );
};

export default Menu;