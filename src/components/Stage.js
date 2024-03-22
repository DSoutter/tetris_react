import React from "react";
import Cell from "./Cell";
import "./../styles/Game.css"
const Stage = ({grid}) => {
    return (
        <div className="board">
          {grid.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
              {row.map((cell, colIndex) => (
                <Cell key={`${rowIndex}-${colIndex}`} value={cell} />
              ))}
            </div>
          ))}
        </div>
      );
    };

export default Stage;