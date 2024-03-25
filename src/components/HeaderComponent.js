import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import '../styles/HeaderAndFooter.css'
import { StyledButton } from './styles/StyledButton';
import StartButton from './StartButton';
import { StyledBars } from './styles/StyledBars';

const HeaderComponent = () => {
    const navigate = useNavigate();

    const navigateToAbout = () => {
        navigate('/about');
      };
    const navigateToHighScores = () => {
        navigate('/highscores');
      };
    
    const navigateToGame = () => {
      navigate('/');
    }

    return(
      <StyledBars>
        <h2>Tetris React App</h2>
        <div>
          <StyledButton onClick={navigateToGame}>Game</StyledButton>
          <StyledButton onClick={navigateToAbout}>About</StyledButton>
          <StyledButton onClick={navigateToHighScores}>High Scores</StyledButton>
        </div>
      </StyledBars>  
    )   
}
export default HeaderComponent;