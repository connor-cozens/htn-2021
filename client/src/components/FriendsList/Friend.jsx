import React, { Component } from "react";
import { Card } from "react-bootstrap";
import styles from './Friend.module.scss';
import axios from 'axios';

class Friend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            title: '',
            country: '',
            imgLink: ''
        }
    }

    componentDidMount() {
        const getfriend = async () => {
            const req_body = {id: this.props.id};
            await axios.post("http://localhost:9000/users/get-friends", req_body)
                .then(res => {
                    console.log("Success 1");
                    console.log(res.data);
                    if (res.data) {
                        console.log("Success 2");
                        this.setState({
                            name: res.data.username,
                            title: 'sous chef',
                            imgLink: 'https://static.giantbomb.com/uploads/original/9/95666/1910448-yoshi_egg_yoshi_render.png',
                            country: res.data.country
                        })
                    }
                })
                .catch(err => {
                    console.log("Error: ", err);
                });
                console.log("ENDED");
            }
            getfriend();
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <Card bg={'light'} className={styles.Ingredient} border="secondary">
                    <Card.Img variant="bottom" src={this.state.imgLink} className={styles.FriendProfilePic} />
                    <Card.Title className={styles.FriendName}>{this.state.name}</Card.Title>
                    <Card.Subtitle className={styles.FriendTitle}>{this.state.title}</Card.Subtitle>
                    <Card.Text className={styles.friendCountry}>{this.state.country}</Card.Text>
                </Card>
            </div>
        )
    }

}

export default Friend;