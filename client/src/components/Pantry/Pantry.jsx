import React from 'react';
import styles from './Pantry.module.scss';
import Recipe from './Recipe';
import { Button } from 'react-bootstrap';

function Pantry() {
    var IngredientsList = ["Ingredient 1", "Ingredient 2", "Ingredient 3"]
    var RecipesList = ["Recipe 1", "Recipe 2", "Recipe 3"]
    return (
        <div className = {styles.wrapped}>
            <div className = {styles.filters}>
                <div className = 'ingredients'>
                    <h2>Ingredients</h2>
                        <ul className = {styles.ingredientsGroup}>
                            {IngredientsList.map(listitem => (
                                <li className = {styles.ingredientsItems}>
                                    {listitem}
                                </li>
                            ))}
                        </ul>
                </div>
                <div className = {styles.sortingGroup}>
                    <h2>Sort Recipes</h2>
                    <ul className = {styles.sortingList}>
                        <li>Alphabetical Ascending</li>
                        <li>Alphabetical Descending</li>
                        <li>Lowest Cooking Time</li>
                        <li>Highest Experience</li>
                    </ul>
                </div>
                <div className = {styles.filteringGroup}>
                    <h2>Filter Recipes</h2>
                    <ul className = {styles.filtersList}>
                        <li>Breakfast</li>
                        <li>Appetizers</li>
                        <li>Entrees</li>
                        <li>Desserts</li>
                        <li>Snacks</li>
                    </ul>
                </div>
            </div>
            <div className = {styles.recipes}>
                <h2>Recipes</h2>
                <ul className = {styles.recipesGroup}>
                    {RecipesList.map(recipeitem => (
                        <Recipe>
                            <li className = {styles.recipeBlock}>
                                {recipeitem}
                            </li>
                        </Recipe>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Pantry;