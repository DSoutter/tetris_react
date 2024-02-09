import React, {useEffect, useState} from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import '../styles/Game.css'
const GameContainer = () => {

    return (
        <div id="game-container">
            <HeaderComponent/>
            <button className="button" onClick={(event) => {console.log("Start")}}><span>Start Game?</span></button>
            <br/>
            <button className="button"><span>High Scores</span></button>
            <div>
                Game Container
            </div>
            <FooterComponent/>
        </div>
    )
}

export default GameContainer