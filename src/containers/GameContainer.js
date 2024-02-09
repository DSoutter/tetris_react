import React, {useEffect, useState} from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';

const GameContainer = () => {

    return (
        <div id="game-container">
            <HeaderComponent/>
            <div>
                Game Container
            </div>
            <FooterComponent/>
        </div>
    )
}

export default GameContainer