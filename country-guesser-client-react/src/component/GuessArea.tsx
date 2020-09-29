import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const GuessArea = () => {
    const [firstCountry, setFirstCountry] = useState({'flag': "../../img/placeholder-flag.png"});
    const [secondCountry, setSecondCountry] = useState({'flag': "../../img/placeholder-flag.png"});
    //1 means you are correct, 2 means you are incorrect
    const [questionStatus, setQuestionStatus] = useState(0)

    useEffect(() => {
        let firstRandNum = Math.floor(Math.random() * 250);
        let secondRandNum =  Math.floor(Math.random() * 250);
        axios
        .get(`https://restcountries.eu/rest/v2/all`)
        .then((res) => {
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

    function whoHasMorePeople(country1, country2) {
        if (country1.population > country2.population) {
            return country1.name;
        } else {
            return country2.name;
        }
    }

    function handleclick(countryName) {
        if (countryName === whoHasMorePeople(firstCountry, secondCountry)) {
            toast.success("Correct!");
        } else {
            toast.error("Incorrect!");
        }
        console.log(countryName);
        console.log(whoHasMorePeople(firstCountry, secondCountry));
    }

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
                            <img src={firstCountry.flag} onClick={() => handleclick(firstCountry.name)} alt="country"/>
                        </div>
                    </Col>
                    <Col xs="2"></Col>
                    <Col xs="5">
                        <div className="countryPosition">
                            <h1>{secondCountry.name}</h1>
                            <img src={secondCountry.flag} onClick={() => handleclick(secondCountry.name)} alt="country"/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>Place Holder</h1>
                        <ToastContainer 
                        hideProgressBar={true}
                        autoClose={2000}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default GuessArea
