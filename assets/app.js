import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import PageTitle from './components/PageTitle';
import GuessArea from './components/GuessArea';
import './styles/app.css';

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


ReactDOM.render(<App/>, document.getElementById('root'));