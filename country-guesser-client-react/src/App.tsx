import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import PageTitle from './component/PageTitle';
import GuessArea from './component/GuessArea';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path='/' exact component={PageTitle} />
                    <Route path='/guessArea' exact component={GuessArea} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
