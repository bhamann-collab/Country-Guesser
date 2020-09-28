import React from 'react';
import { Container, Row, Col } from 'reactstrap';

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
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PageTitle
