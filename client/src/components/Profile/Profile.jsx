import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import styles from './Profile.module.css';
import cx from 'classnames';

function Badge(props) {
    return (
        <div className={styles.badgeCard}>
            <table style={{width: '100%', height: '100%'}}>
                <tbody>
                    <tr>
                        <td style={{width: '125px'}}>
                            <img src="resources/res_badge.png" width="100" height="100" className={styles.badgeIcon} />
                        </td>
                        <td className={styles.badgeText}>
                            <div className={styles.badgeTitle}>{props.title}</div>
                            <div className={styles.badgeDescr}>{props.descr}</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

function DispMyAccount(props) {
    return (
        <div className={styles.accWrapper}>
            <Form>
                <Form.Group controlId="profile-name">
                    <Form.Label>Display Name</Form.Label>
                    <Form.Control type="text" value={props.name} onChange={(evt) => props.setName(evt.target.value)} />
                </Form.Group>

                <Form.Group controlId="profile-email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={props.email} onChange={(evt) => props.setEmail(evt.target.value)} />
                </Form.Group>

                <Button variant="secondary" style={{marginTop: '50px'}} onClick={() => {
                    window.sessionStorage.setItem("usr_username", props.name);
                    window.sessionStorage.setItem("usr_email", props.email);
                    window.location.reload();
                }}>Change</Button>
            </Form>
        </div>
    );
}

function DispBadges() {
    return (
        <>
            <Badge title="Poissonnier" descr="Completed 10 fish and seafood dishes." />
            <Badge title="Garçon de cuisine" descr="Completed 10 recipes." />
        </>
    );
}

function Profile() {
    const [disp, setDisp] = useState(0);
    const [name, setName] = useState(window.sessionStorage.getItem("usr_username") || "");
    const [title, setTitle] = useState(window.sessionStorage.getItem("usr_title") || "Pistachios are great!");
    const [email, setEmail] = useState(window.sessionStorage.getItem("usr_email") || "");

    return (

        <div className={styles.profileWrapper}>
            <div className={styles.profCover}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <img src="resources/res_avatar_def.png" width="250" height="250" className={styles.userAvatar} />
                            </td>
                            <td>
                                <div className={styles.userLabels}>
                                    <div className={styles.userName}>{name}</div>
                                    <div className={cx(styles.userName, styles.userTitle)}>{title}</div>
                                </div>
                            </td>
                            <td>
                                {/* Buttons: Change Avatar / Profile Cover / Title */}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <nav className={cx("navbar navbar-expand-lg navbar-light shadow-sm", styles.navbar, styles.profNav)}>
                <Button variant="light" className={styles.shadedMenuText} onClick={() => setDisp(0)}>
                    My Account
                </Button>
                <span className={styles.shadedMenuText}>|</span>
                <Button variant="light" className={styles.shadedMenuText} onClick={() => setDisp(1)}>
                    Badges
                </Button>
                <span className={styles.shadedMenuText}>|</span>
                <Button variant="light" className={styles.shadedMenuText} onClick={() => setDisp(2)}>
                    My Recipes
                </Button>
                <span className={styles.shadedMenuText}>|</span>
                <Button variant="light" className={styles.shadedMenuText} onClick={() => setDisp(3)}>
                    Saved Recipes
                </Button>
                <span className={styles.shadedMenuText}>|</span>
                <Button variant="light" className={styles.shadedMenuText} onClick={() => setDisp(4)}>
                    Completed Recipes
                </Button>
            </nav>
            <div className={styles.profDetails}>
                {(disp == 0) ? <DispMyAccount name={name} email={email} setName={setName} setEmail={setEmail} /> : <div />}
                {(disp == 1) ? <DispBadges /> : <div />}
                {(disp == 2) ? <div /> : <div />}
                {(disp == 3) ? <div /> : <div />}
                {(disp == 4) ? <div /> : <div />}
            </div>
        </div>

    )
}

export default Profile;