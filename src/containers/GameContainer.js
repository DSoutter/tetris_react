import React, {useEffect, useState} from 'react';
import {createStage} from '../models/gameHelper';
import '../styles/Game.css'
import { randomTetromino } from '../models/Tetrominoes';
import Stage from '../components/Stage';
import Display from "../components/Display";

const GameContainer = () => {


     const handleKeyDown = (event) => {
         console.log(event.key + " key pressed in GameContainer");
     }
    return (
        <div id="game-container">
            <button className="button" onClick={(event) => {console.log('Start')}}>
                <span>Start</span>
            </button>
            <div onKeyDown={handleKeyDown} tabIndex="0">
                Game Container
                <Stage stage={createStage()}/>
            </div>
            <aside>
                <div>
                    <Display text="Score: "/>
                    <Display text="Rows: "/>
                    <Display text="Level: "/>
                </div>
            </aside>
        </div>
    )
}

export default GameContainer;