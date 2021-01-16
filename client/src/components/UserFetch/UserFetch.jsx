import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

function UserFetch() {

    const fetchUsers = async () => {
        await axios.get("http://localhost:9000/users")
            .then(res => {
                console.log("SUCCESS 1");
                if (res.data) {
                    console.log("SUCCESS 2");
                    console.log(res.data);
                }
            })
            .catch(err => {
                console.log("ERROR");
                console.log(err);
            });
    }

    return (

        <Button variant="light" onClick={fetchUsers}>
            Fetch
        </Button>

    )
}

export default UserFetch;