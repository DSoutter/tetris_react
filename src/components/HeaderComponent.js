import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import AboutComponent from './AboutComponent';
import '../styles/HeaderAndFooter.css'

const HeaderComponent = () => {
    const navigate = useNavigate();

    const navigateToAbout = () => {
        navigate('/about');
      };
    const navigateToHighScores = () => {
        navigate('/highscores');
      };

    return(
            <div>
            <nav classname="headfoot">
                <Link to="/">Game</Link>
                <h3>Tetris React App</h3>
                {/* <Link to="/highscores">High Scores</Link>
                <Link to="/about">About</Link> */}
                <button onClick={navigateToAbout}>About</button>
                <button onClick={navigateToHighScores}>High Scores</button>
            </nav>  
            <hr/>
            {/* <Route path="/" exact component={App}/> */}
            {/* <Route path="/about" exact component={AboutComponent}/> */}
            </div>
    )   
}
export default HeaderComponent;