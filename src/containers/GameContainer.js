import React, {useEffect, useState, event} from 'react';
import Board from '../models/Board';
import '../styles/Game.css'
import { randomTetromino } from '../models/Tetrominoes';
const GameContainer = () => {

    const [board, setBoard] = useState(null);

    useEffect(() => {
        const board = new Board()
        board.createGrid()
    })

     const handleKeyDown = (event) => {
         console.log(event.key + " key pressed in GameContainer");
     }
    return (
        <div id="game-container">
            <button className="button" onClick={(event) => {console.log('Start')}}><span>Start</span></button>
 
            <div onKeyDown={handleKeyDown} tabIndex="0">
                Game Container
            </div>
            
             <div onKeyDown={handleKeyDown}></div>
        </div>
    )
}

export default GameContainer