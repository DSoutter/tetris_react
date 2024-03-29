import React, {useEffect, useState} from 'react';
import { createStage } from '../models/gameHelper';
import { StyledTetris, StyledTetrisWrapper  } from '../components/styles/StyledTetris';
import Stage from '../components/Stage';
import Display from "../components/Display";
import StartButton from '../components/StartButton';
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
const GameContainer = () => {

    const[dropTime, setDropTime] = useState(null);
    const[gameOver, setGameOver] = useState(false);
    
    const[player, updatePlayerPos, resetPlayer] = usePlayer();
    const[stage,setStage] = useStage(player);

    console.log('re-render');

     const movePlayer = dir => {
        updatePlayerPos({x: dir, y:0})
     };

     const startGame = () => {
        setStage(createStage());
        resetPlayer();
     };

     const drop = () => {
        updatePlayerPos({x: 0, y: 1, collided : false})
     };
     
     const dropPlayer = () => {
        drop();
     };

     const move = ({keyCode}) => {
        if (!gameOver) {
            if(keyCode === 37 ||  keyCode === 65 ) {
                movePlayer(-1);
            } else if (keyCode === 39 ||  keyCode === 68 ) {
                movePlayer(1);
            } else if (keyCode === 40 || keyCode === 32) {
                dropPlayer();
            }
        }
     }

    return (
        <StyledTetrisWrapper role = "button" tabIndex='0' onKeyDown={e => move(e)}>
            <StyledTetris>
                <Stage stage={stage}/>
                <aside>
                    {gameOver ? (
                        <Display gameOver={gameOver} text = 'Game Over' />
                    ) : (
                    <div>
                        <Display text="Score: "/>
                        <Display text="Rows: "/>
                        <Display text="Level: "/>
                    </div>
                    )}
                    <StartButton onClick={startGame}/>
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default GameContainer;