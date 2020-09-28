import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

const GuessArea = () => {

    useEffect(() => {
        
    }, [])

    return (
        <div className="guessArea">
            <Container>
                <Row>
                    <Col>
                        <h1>Streak: </h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="reactColumn">
                            <div className="questionRegion">
                                <h3>question: Which country has more people?</h3>
                            </div>
                        </div>
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
