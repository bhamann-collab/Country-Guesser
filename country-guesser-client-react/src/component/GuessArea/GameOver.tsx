import React, { useState } from 'react'
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import axios from 'axios';

const GameOver = (props) => {
    const [modal, setModal] = useState(false);
    const [unmountOnClose, setUnmountOnClose] = useState(true);
    const [name, setName] = useState('');

    let url = `localhost:8000/createHighscore`

    const toggle = () => setModal(!modal);
    const changeUnmountOnClose = e => {
        let value = e.target.value;
        setUnmountOnClose(JSON.parse(value));
    }

    async function makePostRequest() {
        let params = {
            "nickname": name,
            "streak" : props.streak
        }
        console.log(params);

        // let res = await axios.post(url);

        // console.log(`Status code: ${res.status}`);
        // console.log(`Status text: ${res.statusText}`);
        // console.log(`Request method: ${res.request.method}`);
        // console.log(`Path: ${res.request.path}`);
    
        // console.log(`Date: ${res.headers.date}`);
        // console.log(`Data: ${res.data}`);
        toggle();
    }

    return (
        <div className="GameOver">
            <h1>Game Over</h1>
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <Button size="lg" color="success" onClick={props.setNewCountries}>Play Again</Button>
                    </Col>
                    <Col>
                        <Button size="lg" color="info" onClick={toggle}>Enter Score</Button>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
            <Modal isOpen={modal} toggle={toggle} unmountOnClose={unmountOnClose}>
                <ModalHeader toggle={toggle}><h3 className="text-center">You have a score of {props.streak}<br />Enter your name here</h3></ModalHeader>
                <ModalBody>
                    <Input type="textarea" placeholder="Enter name" onChange={event => setName(event.target.value)}/>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={makePostRequest}>Enter</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default GameOver
