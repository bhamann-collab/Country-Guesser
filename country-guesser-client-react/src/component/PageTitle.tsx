import React from 'react';
import { Link } from 'react-router-dom';
import Leaderboard from './PageTitle/Leaderboard';
import { Container, Row, Col, Button } from 'reactstrap';

const PageTitle = () => {
    return (
        <div className="pageTitle">
            <Container>
                <Row>
                    <Col>
                        <div className="titleText">
                            <h1>Guess That Country!</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Answer the question with the country you think is more fitted. Get a streak going!</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Leaderboard />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="buttonStart">
                            <Link
                            to={"/guessArea"}
                            >
                                <Button outline color="primary">Click Here To Start</Button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PageTitle
