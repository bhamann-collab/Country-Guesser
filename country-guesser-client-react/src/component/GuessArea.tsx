import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

const GuessArea = () => {
    return (
        <div className="guessArea">
            <Container>
                <Row>
                    <Col>
                        Streak
                    </Col>
                </Row>
                <Row>
                    <Col>
                        question
                    </Col>
                </Row>
                <Row>
                    <Col xs="4">
                        <h1>Country</h1>
                        <Button outline color="primary">Click Me</Button>
                    </Col>
                    <Col xs="4"></Col>
                    <Col xs="4">
                        <h1>Country</h1>
                        <Button outline color="primary">Click Me</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default GuessArea
