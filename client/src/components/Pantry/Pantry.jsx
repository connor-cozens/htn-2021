import React from 'react';
import styles from './Pantry.module.scss';
import Recipe from './Recipe';
import Ingredient from './ingredient';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

export const Grid = styled.div`

`;

export const Row = styled.div`
    display: flex;
`;

export const Col = styled.div`
    flex: ${(props) => props.size};
`

function Pantry() {
    var IngredientsList = ["Ingredient 1", "Ingredient 2", "Ingredient 3"]
    var RecipesList = ["Recipe 1", "Recipe 2", "Recipe 3"]
    return (
        <div className={styles.wrapped}>
            <div className={styles.filters}>
                <div>
                    <h2 className={styles.ingredientsTitle}>Ingredients</h2>
                    <Grid className={styles.ingredients}>
                        <Row>
                            <Col size={1}>
                                <Ingredient className={styles.ingredient} id = '7c5feeab-ff47-40d1-8fdd-7a4b90a276d4' pos = '0' name="cereal"></Ingredient>
                            </Col>
                            <Col size={1}>
                                <Ingredient className={styles.ingredient} id = '7c5feeab-ff47-40d1-8fdd-7a4b90a276d4' pos = '1'  name="cereal"></Ingredient>
                            </Col>
                        </Row>
                        <Row>
                            <Col size={1}>
                                <Ingredient className={styles.ingredient} id = '7c5feeab-ff47-40d1-8fdd-7a4b90a276d4' pos = '2'  name="cereal"></Ingredient>
                            </Col>
                            <Col size={1}>
                                <Ingredient className={styles.ingredient} id = '7c5feeab-ff47-40d1-8fdd-7a4b90a276d4' pos = '3'  name="cereal"></Ingredient>
                            </Col>
                        </Row>
                        <Row>
                            <Col size={1}>
                                <Ingredient className={styles.ingredient} id = '7c5feeab-ff47-40d1-8fdd-7a4b90a276d4' pos = '4'  name="cereal"></Ingredient>
                            </Col>
                            <Col size={1}>
                                <Ingredient className={styles.ingredient} id = '7c5feeab-ff47-40d1-8fdd-7a4b90a276d4' pos = '5'  name="cereal"></Ingredient>
                            </Col>
                        </Row>
                    </Grid>
                </div>
                <div className={styles.sortingGroup}>
                    <h2 className={styles.sortTitle}>Sort Recipes</h2>
                    <Button className={styles.sortButton}> A-Z</Button>
                    <Button className={styles.sortButton}>Z-A</Button>
                    <Button className={styles.sortButton}>Lowest Cooking Time</Button>
                    <Button className={styles.sortButton}>Highest Experience</Button>
                </div>
                <div className={styles.filteringGroup}>
                    <h2 className={styles.sortTitle}>Filter Recipes</h2>
                    <Button className={styles.sortButton}>Breakfast</Button>
                    <Button className={styles.sortButton}>Appetizers</Button>
                    <Button className={styles.sortButton}>Entrees</Button>
                    <Button className={styles.sortButton}>Desserts</Button>
                    <Button className={styles.sortButton}>Snacks</Button>
                </div>
            </div>
            <div className={styles.recipes}>
                <h2 className={styles.recipesTitle}>Recipes</h2>
                <Grid className={styles.recipeGrid}>
                    <Row>
                        <Col size={1}>
                            <Recipe pos = '0'></Recipe>
                        </Col>
                        <Col size={1}>
                            <Recipe pos = '1'></Recipe>
                        </Col>
                        <Col size={1}>
                            <Recipe pos = '2'></Recipe>
                        </Col>
                    </Row>
                    <Row>
                        <Col size={1}>
                            <Recipe pos = '3'></Recipe>
                        </Col>
                        <Col size={1}>
                            <Recipe pos = '4'></Recipe>
                        </Col>
                        <Col size={1}>
                            <Recipe pos = '5'></Recipe>
                        </Col>
                    </Row>
                </Grid>
            </div>
        </div>
    )
}

export default Pantry;