import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap';

const GameOver = (props) => {
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
                        <Button size="lg" color="info">Enter Score</Button>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}

export default GameOver
