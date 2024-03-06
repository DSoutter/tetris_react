import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import App from '../App';
import AboutComponent from './About';
import '../styles/HeaderAndFooter.css'

const HeaderComponent = () => {
    return(
        <Router>
            <div>
            <nav classname="headfoot">
                <Link to="/">Game</Link>
                <h3>Tetris React App</h3>
                <Link to="/highscores">High Scores</Link>
                <Link to="/about">About</Link>
            </nav>  
            <hr/>
            <Routes>
            {/* <Route path="/" exact component={App}/> */}
            <Route path="/about" exact component={AboutComponent}/>
            </Routes>
            </div>
        </Router>
    )   
}
export default HeaderComponent;