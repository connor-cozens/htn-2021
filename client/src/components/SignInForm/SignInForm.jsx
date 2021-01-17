import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, Spinner } from 'react-bootstrap';
import styles from './SignInForm.module.css';

function SignInForm() {
    const [userInput, setUserInput] = useState("");
    const [passInput, setPassInput] = useState("");

    const getSignInRes = async (in_user, in_pass) => {
        const req_body = {username: in_user, password: in_pass};
        await axios.post("http://localhost:9000/users/login", req_body)
            .then(res => {
                console.log("SUCCESS 1");
                if (res.data) {
                    console.log("SUCCESS 2");

                    // im sorry guys
                    window.sessionStorage.setItem("usr_age", res.data.age);
                    window.sessionStorage.setItem("usr_country", res.data.country);
                    window.sessionStorage.setItem("usr_current_xp", res.data.current_xp);
                    window.sessionStorage.setItem("usr_email", res.data.email);
                    window.sessionStorage.setItem("usr_username", res.data.username);
                    window.location.pathname = "";
                }
            })
            .catch(err => {
                console.log("ERROR");
                console.log(err);
            });
        console.log("ENDED");
    }

    return (
        <Form className={styles.overallForm}>
            <div>
                <Form.Control type="text" placeholder="Email" onChange={(evt) => setUserInput(evt.target.value)} />
            </div>
            <div>
                <Form.Control type="password" placeholder="Password" onChange={(evt) => setPassInput(evt.target.value)} />
            </div>
            <div>
                <Button className={styles.contButton} onClick={() => getSignInRes(userInput, passInput)}>
                    Continue
                </Button>
            </div>
            <div className={styles.alternateBlurb}>
                <a href="signup">Sign Up</a>
            </div>
        </Form>
    )
}

export default SignInForm;