import React, { Component } from 'react';
import styles from './Recipe.module.scss';

export class Recipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "temp title",
            description: "temp description",
            imgLink: "https://1843784937.rsc.cdn77.org/wp-content/uploads/2019/04/krabby-patty-400x200.jpg",
            ingredients: []
        }
    }
    
    getRecipes() {
        
    }
    
    render() {
        return (
            <div className={styles.wrapper}>
                <div className={styles.recipe}>
                    <h2 className = {styles.title}>{this.state.title}</h2>
                    <p>{this.state.description}</p>
                    <p>{this.state.ingredients}</p>
                </div>
            </div>
        )
    }
}

export default Recipe;