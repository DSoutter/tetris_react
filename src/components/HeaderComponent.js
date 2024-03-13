import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
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
                <button onClick={navigateToAbout}>About</button>
                <button onClick={navigateToHighScores}>High Scores</button>
            </nav>  
            <hr/>
            </div>
    )   
}
export default HeaderComponent;