import React, { useState } from 'react'
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';

const GameOver = (props) => {
    const [modal, setModal] = useState(false);
    const [unmountOnClose, setUnmountOnClose] = useState(true);

    const toggle = () => setModal(!modal);
    const changeUnmountOnClose = e => {
        let value = e.target.value;
        setUnmountOnClose(JSON.parse(value));
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
                    <Input type="textarea" placeholder="Enter name"/>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Enter</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Canacel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default GameOver
