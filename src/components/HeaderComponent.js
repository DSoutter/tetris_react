import React from 'react';
import {useNavigate} from 'react-router-dom';
import StartButton from './StartButton';
import {StyledButton} from './styles/StyledButton';
import {StyledBars} from './styles/StyledBars';

const HeaderComponent = () => {
    const navigate = useNavigate();

    const navigateToPath = (path) => {
        navigate(path);
      };

    return(
      <StyledBars>
        <h2>Tetris React App</h2>
        <div>
          <StyledButton onClick={() =>navigateToPath('/')}>Game</StyledButton>
          <StyledButton onClick={() =>navigateToPath('/about')}>About</StyledButton>
          <StyledButton onClick={() =>navigateToPath('/highscores')}>High Scores</StyledButton>
        </div>
      </StyledBars>  
    )   
}
export default HeaderComponent;