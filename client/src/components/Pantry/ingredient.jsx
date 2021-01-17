import React, { Component } from "react";
import { Card } from "react-bootstrap";
import styles from './ingredient.module.scss';
import axios from 'axios';

class Ingredient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }

  componentDidMount() {
    const getingredient = async () => {
        const req_body = {recipe_id: this.props.id};
        await axios.post("http://localhost:9000/pantry/get_ingredients", req_body)
            .then(res => {
                console.log("Success 1");
                console.log(res.data);
                if (res.data) {
                    console.log("Success 2");
                    this.setState({
                        name: res.data[this.props.pos].food_item,
                    })
                }
            })
            .catch(err => {
                console.log("Error: ", err);
            });
            console.log("ENDED");
        }
        getingredient();
}

  render() {
    return (
      <div className={styles.wrapper}>
        <Card className={styles.Ingredient} border="success">
          <Card.Title className={styles.Title}>{this.state.name}</Card.Title>
          <Card.Text className={styles.Text}>...is in your pantry!</Card.Text>
        </Card>
      </div>
    )
  }

}

export default Ingredient;