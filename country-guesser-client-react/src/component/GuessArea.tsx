import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import axios from 'axios';

const GuessArea = () => {
    const [firstCountry, setFirstCountry] = useState({'flag': "../../img/placeholder-flag.png"});
    const [secondCountry, setSecondCountry] = useState({'flag': "../../img/placeholder-flag.png"});

    useEffect(() => {
        let firstRandNum = Math.floor(Math.random() * 250);
        let secondRandNum =  Math.floor(Math.random() * 250);
        axios
        .get(`https://restcountries.eu/rest/v2/all`)
        .then((res) => {
            console.log(res);
            let countryName = res.data[firstRandNum].name;
            let countryPopulation = res.data[firstRandNum].population;
            let countryArea = res.data[firstRandNum].area;
            let countryCapital = res.data[firstRandNum].capital;
            let countryGini = res.data[firstRandNum].gini;
            let countryFlag = res.data[firstRandNum].flag;

            setFirstCountry({
                'name': countryName, 
                'population': countryPopulation,
                'area': countryArea,
                'capital': countryCapital,
                'gini': countryGini,
                'flag': countryFlag});

                countryName = res.data[secondRandNum].name;
                countryPopulation = res.data[secondRandNum].population;
                countryArea = res.data[secondRandNum].area;
                countryCapital = res.data[secondRandNum].capital;
                countryGini = res.data[secondRandNum].gini;
                countryFlag = res.data[secondRandNum].flag;
    
            setSecondCountry({
                'name': countryName, 
                'population': countryPopulation,
                'area': countryArea,
                'capital': countryCapital,
                'gini': countryGini,
                'flag': countryFlag});
        })


    }, [])

    console.log(firstCountry)

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
                    <Col xs="5">
                        <div className="countryPosition">
                            <h1>{firstCountry.name}</h1>
                            <img src={firstCountry.flag} alt="country"/>
                        </div>
                    </Col>
                    <Col xs="2"></Col>
                    <Col xs="5">
                    <div className="countryPosition">
                            <h1>{secondCountry.name}</h1>
                            <img src={secondCountry.flag} alt="country"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default GuessArea
