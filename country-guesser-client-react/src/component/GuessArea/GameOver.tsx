import React, { useState } from 'react'
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, Input, Label, Form, FormGroup } from 'reactstrap';

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
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <Input type="textarea" placeholder="Enter name"/>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default GameOver
