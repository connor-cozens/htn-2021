import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import styles from './Navbar.module.css';
import cx from 'classnames';

const BAR_WIDTH = 600;

function getLevelReqs(level) {
    return 100 + 25 * Math.pow(level - 1, 2);
}

function Navbar() {
    const [userLevel, setUserLevel] = useState(1);
    const [userXP, setUserXP] = useState(0);
    const [userXPReq, setUserXPReq] = useState(1);

    useEffect(() => {
        let user_xp = parseInt(window.sessionStorage.getItem("usr_current_xp")) || 0;
        let user_lv = 1;

        let lv_req_xp = getLevelReqs(user_lv);
        while (user_xp >= lv_req_xp) {
            user_xp -= lv_req_xp;
            user_lv++;
            lv_req_xp = getLevelReqs(user_lv);
        }
        setUserLevel(user_lv);
        setUserXP(user_xp);
        setUserXPReq(getLevelReqs(user_lv));
    }, []);

    return (
        <>
            <nav className={cx("navbar navbar-expand-lg navbar-light", styles.header)}>
                <a href="/"><img src="resources/res_icon.png" width="70" height="70" /></a>
                <span className={cx(styles.shadedMenuText, styles.appTitle)}>pit-stach.io</span>
                <div style={{margin: 'auto'}} />
                <div className={styles.xpBarWrapper}>
                    <img src="resources/res_level_lighter.png" className={styles.xpLevelPuff} width="70" height="70" />
                    <div className={styles.xpBar} />
                    <div className={cx(styles.xpBar, styles.xpFill)} style={{width: `${BAR_WIDTH * userXP / userXPReq}px`}} />
                    <div className={cx(styles.xpLevel)}>{userLevel}</div>
                    <span className={styles.xpLabel}>{userXP}/{userXPReq} XP</span>
                </div>
                <div style={{margin: 'auto'}} />
                <a href="/"><img src="resources/res_avatar_def.png" width="70" height="70" style={{float: 'right'}} /></a>
            </nav>

            <nav className={cx("navbar navbar-expand-lg navbar-light shadow-sm", styles.navbar)}>
                <Button href="/" variant="light" className={styles.shadedMenuText}>
                    Profile
                </Button>
                <span className={styles.shadedMenuText}>|</span>
                <Button href="/pantry" variant="light" className={styles.shadedMenuText}>
                    Pantry
                </Button>
                <span className={styles.shadedMenuText}>|</span>
                <Button href="/colleagues" variant="light" className={styles.shadedMenuText}>
                    Culinary Colleagues
                </Button>
            </nav>
        </>
    )
}

export default Navbar;