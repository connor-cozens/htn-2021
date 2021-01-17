import React from 'react';
import styles from './FriendsList.module.scss';
import Friend from './Friend'
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

export const Grid = styled.div`

`;

export const Row = styled.div`
    display: flex;
`;

export const Col = styled.div`
    flex: ${(props) => props.size};
`

function FriendsList() {
    return (
        <div className={styles.Wrapper}>
            <div className={styles.friendsContainer}>
                <h2 className={styles.friendsTitle}>Your Culinary Colleagues</h2>
                <Grid>
                    <Row className={styles.rowSpacer}>
                        <Col size={1}><Friend id='85bd6d67-bc89-4a1c-acb2-09a6405de49b'></Friend></Col>
                    </Row>
                    <Row className={styles.rowSpacer}>
                        <Col size={1}><Friend id='b41f5de7-d59d-495c-b4a0-2eca3d5e3a5a'></Friend></Col>
                    </Row>
                    <Row className={styles.rowSpacer}>
                        <Col size={1}><Friend id='b41f5de7-d59d-495c-b4a0-2eca3d5e3a5a'></Friend></Col>
                    </Row>
                </Grid>
            </div>
        </div>
    )
}

export default FriendsList;