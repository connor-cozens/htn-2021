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
                                <Ingredient className={styles.ingredient} name="cereal"></Ingredient>
                            </Col>
                            <Col size={1}>
                                <Ingredient className={styles.ingredient} name="cereal"></Ingredient>
                            </Col>
                        </Row>
                        <Row>
                            <Col size={1}>
                                <Ingredient className={styles.ingredient} name="cereal"></Ingredient>
                            </Col>
                            <Col size={1}>
                                <Ingredient className={styles.ingredient} name="cereal"></Ingredient>
                            </Col>
                        </Row>
                        <Row>
                            <Col size={1}>
                                <Ingredient className={styles.ingredient} name="cereal"></Ingredient>
                            </Col>
                            <Col size={1}>
                                <Ingredient className={styles.ingredient} name="cereal"></Ingredient>
                            </Col>
                        </Row>
                    </Grid>
                </div>
                <div className={styles.sortingGroup}>
                    <h2  className={styles.sortTitle}>Sort Recipes</h2>
                    <Button className={styles.sortButton}> A-Z</Button>
                    <Button className={styles.sortButton}>Z-A</Button>
                    <Button className={styles.sortButton}>Lowest Cooking Time</Button>
                    <Button className={styles.sortButton}>Highest Experience</Button>
                </div>
                <div className={styles.filterGroup}>
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
                            <Recipe uid='10069f4e-b3d3-4ddb-b2df-fee878ddb2a6' name='androidstudio'></Recipe>
                        </Col>
                        <Col size={1}>
                            <Recipe uid='48d6e790-91db-44c7-8aea-02e587f67509' name='pistachio steak'></Recipe>
                        </Col>
                        <Col size={1}>
                            <Recipe uid='49024169-1a42-43b3-aeae-72b0d66b891d' name='declaration of independance'></Recipe>
                        </Col>
                    </Row>
                    <Row>
                        <Col size={1}>
                            <Recipe uid='8bb70095-98d0-4ae6-96aa-885216034738' name='subway rat'></Recipe>
                        </Col>
                        <Col size={1}>
                            <Recipe uid='9dc35e30-baf0-4f20-9c4a-9c19336e2cfa' name='cereal'></Recipe>
                        </Col>
                        <Col size={1}>
                            <Recipe uid='9f89682d-ee66-412d-8f56-7a4c9b103fe3' name='oatmeal'></Recipe>
                        </Col>
                    </Row>
                </Grid>
            </div>
        </div>
    )
}

export default Pantry;