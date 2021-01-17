import React, { Component } from "react";
import { Card } from "react-bootstrap";
import styles from './ingredient.module.scss';

 
class Ingredient extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: this.props.name,
    }
}
 
  render() {
    return (
        <div className={styles.wrapper}>
          <Card className = {styles.Ingredient} border="success">
            <Card.Title className={styles.Title}>{this.state.name}</Card.Title>
            <Card.Text className={styles.Text}>...is in your pantry!</Card.Text>
          </Card>
        </div>
    )
}

}
 
export default Ingredient;