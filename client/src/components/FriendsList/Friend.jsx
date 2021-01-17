import React, { Component } from "react";
import { Card } from "react-bootstrap";
import styles from './Friend.module.scss';

 
class Friend extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: this.props.name,
    }
}
 
  render() {
    return (
        <div className={styles.wrapper}>
          <Card bg={'light'} className = {styles.Ingredient} border="secondary">
            <Card.Img variant="bottom" src = 'https://static.giantbomb.com/uploads/original/9/95666/1910448-yoshi_egg_yoshi_render.png' className={styles.FriendProfilePic}/>
            <Card.Title className={styles.FriendName}>Yoshi</Card.Title>
            <Card.Subtitle className={styles.FriendTitle}>Sous Chef</Card.Subtitle>
            <Card.Text className={styles.friendCountry}>Mushroom Kingdom</Card.Text>
          </Card>
        </div>
    )
}

}
 
export default Friend;