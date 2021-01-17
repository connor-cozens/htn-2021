import React, { Component } from 'react';
import styles from './Recipe.module.scss';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

export class Recipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            imgLink: '',
            ingredients: '',
            xp: '',
            recipe_ud: '',
            name: this.props.name,
            user_username: 'joebiden'
            // user_username: window.sessionStorage.getItem("usr_username")
        }
    }

    componentDidMount() {
        const getrecipe = async () => {
            const req_body = { recipe_ud: this.state.uid, recipe_name: this.state.name };
            await axios.post("http://localhost:9000/pantry/get-all-recipes", req_body)
                .then(res => {
                    console.log("Success 1");
                    console.log(res.data);
                    if (res.data) {
                        console.log("Success 2");
                        this.setState({
                            title: res.data[this.props.pos].recipe_name,
                            description: res.data[this.props.pos].recipe_link,
                            imgLink: res.data[this.props.pos].imageurl,
                            xp: res.data[this.props.pos].xp,
                            recipe_ud: res.data[this.props.pos].recipe_ud
                        })
                    }
                })
                .catch(err => {
                    console.log("Error: ", err);
                });
            console.log("ENDED");
        }
        getrecipe();
    }

    addRecipe() {
        const addrecipe = async () => {
            const req_body = { username: this.state.user_username, recipe_id: this.state.recipe_ud };
            await axios.post("http://localhost:9000/pantry/save-recipe", req_body)
                .then(res => {
                    console.log("Success 1");
                    console.log(res.data);
                    if (res.data) {
                        console.log("Success 2");
                    }
                })
                .catch(err => {
                    console.log("Error: ", err);
                });
            console.log("ENDED");
        }
        addrecipe();
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <Card bg='light' border='dark' style={{ width: '18rem' }}>
                    <Card.Img className={styles.recipeImage} variant="top" src={this.state.imgLink} />
                    <Card.Body>
                        <Card.Title>{this.state.title}</Card.Title>
                        <Card.Text>{this.state.description}</Card.Text>
                        <Card.Text>Experience: {this.state.xp}</Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="#">Save Recipe</Card.Link>
                        <Card.Link onClick={this.addRecipe()}>Make Recipe</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Recipe;