import React from 'react';
const AboutComponent = () => {
    return(
        <div>
            <h1>This is a React clone of Tetris made by myself. </h1>
            <h2>Controls:</h2>
            <li>
                <ul>Move Left: 'A' or Left arrow</ul>
                <ul>Move Right: 'D' or Right arrow</ul>
                <ul>Rotate: 'W' or Up arrow</ul>
                <ul>Move Tetromino Down: 'S' or Down arrow</ul>
                <ul>Instantly drop Tetromino to bottom: Space bar</ul>
            </li>
            <h2>Below are a list of the tasks involved with creating this app</h2>
            <li>
                <ol>Create a welcome screen with some basic features in the header like 'Play', 'About' and High Scores</ol>
                <ol>A game screen which renders when 'Play' is selected</ol>
                <ol>A tetris board sized 10x20</ol>
                <ol>Create the tetrominoes (8 in total)</ol>
                <ol>Control the tetrominoes (L/R)</ol>
                <ol>Rotate the tetrominoes (Up)</ol>
                <ol>Drop the tetrominoes to the bottom (Down)</ol>
                <ol>Have the tetrominoes go downwards every tick</ol>
                <ol>Score tracker for current game</ol>
                <ol>High Score page of all current high scores</ol>
            </li>


        </div>
    )
}
export default AboutComponent