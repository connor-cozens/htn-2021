import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './Navbar.module.css';
import cx from 'classnames';

function Navbar() {

    return (

        <nav className={cx("navbar navbar-expand-lg navbar-light shadow-sm bg-light rounded", styles.navbar)}>
            <Button href="/" variant="light" className={styles.menuButton}>
                Home
            </Button>
            <Button href="/temp1" variant="light" className={styles.menuButton}>
                Page1
            </Button>
            <Button href="/temp2" variant="light" className={styles.menuButton}>
                Page2
            </Button>
            <Button href="/profile" variant="light" className={styles.menuButton}>
                Profile
            </Button>
        </nav>

    )
}

export default Navbar;