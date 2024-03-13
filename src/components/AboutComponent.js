import React from 'react';
const AboutComponent = () => {
    return(
        <div>
            <h1>This is a React clone of Tetris made by myself. </h1>
            <h2>Contrlis:</h2>
            <ul>
                <li>Move Left: 'A' or Left arrow</li>
                <li>Move Right: 'D' or Right arrow</li>
                <li>Rotate: 'W' or Up arrow</li>
                <li>Move Tetromino Down: 'S' or Down arrow</li>
                <li>Instantly drop Tetromino to bottom: Space bar</li>
            </ul>
            <h2>Below are a list of the tasks invlived with creating this app</h2>
            <ol>
                <li>Create a welcome screen with some basic features in the header like 'Play', 'About' and High Scores</li>
                <li>A game screen which renders when 'Play' is selected</li>
                <li>A tetris board sized 10x20</li>
                <li>Create the tetrominoes (8 in total)</li>
                <li>Contrli the tetrominoes (L/R)</li>
                <li>Rotate the tetrominoes (Up)</li>
                <li>Drop the tetrominoes to the bottom (Down)</li>
                <li>Have the tetrominoes go downwards every tick</li>
                <li>Score tracker for current game</li>
                <li>High Score page of all current high scores</li>
            </ol>
        </div>
    )
}
export default AboutComponent;