import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import axios from 'axios';

const GuessArea = () => {
    const [country, setCountry] = useState({'flag': "../../img/placeholder-flag.png"});

    useEffect(() => {
        axios
        .get(`https://restcountries.eu/rest/v2/name/australia`)
        .then((res) => {
            let countryName = res.data[0].name;
            let countryPopulation = res.data[0].population;
            let countryArea = res.data[0].area;
            let countryCapital = res.data[0].capital;
            let countryGini = res.data[0].gini;
            let countryFlag = res.data[0].flag;

            setCountry({
                'name': countryName, 
                'population': countryPopulation,
                'area': countryArea,
                'capital': countryCapital,
                'gini': countryGini,
                'flag': countryFlag});
        })
    }, [])

    console.log(country)

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
                        <div className="countryPosition">
                            <img src={country.flag} alt="country"/>
                            <Button outline color="primary">Click Me</Button>
                        </div>
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
