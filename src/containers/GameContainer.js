import React, {useEffect, useState} from 'react';
import {createStage} from '../models/gameHelper';
import { randomTetromino } from '../models/Tetrominoes'; 
import { StyledTetris, StyledTetrisWrapper  } from '../components/styles/StyledTetris';
import Stage from '../components/Stage';
import Display from "../components/Display";
import StartButton from '../components/StartButton';

const GameContainer = () => {

     const handleKeyDown = (event) => {
         console.log(event.key + " key pressed in GameContainer");
     }
    return (
        <StyledTetrisWrapper>
            <StyledTetris>
                <Stage stage={createStage()}/>
                <aside>
                    <div>
                        <Display text="Score: "/>
                        <Display text="Rows: "/>
                        <Display text="Level: "/>
                    </div>
                    <StartButton/>
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default GameContainer;