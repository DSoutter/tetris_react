import { randomTetromino } from "./Tetrominoes";
class Board {
    constructor(){
    this.rows = 20;
    this.columns = 10;
    this.grid = this.createGrid();
    }

    createGrid() {
        const grid = [];
        for (let row=0; row < this.rows; row++){
            const newRow = [];
            for (let col = 0; col < this.columns; col++) {
                newRow.push(null);
            }
            grid.push(newRow);
        }
        return grid;
    }

    getGrid() {
        return this.grid;
    }

    addTetromino() {
        console.log(randomTetromino());
    }

    isValidMove(piece, offsetX, offsetY) {

    }

    placePiece(piece, offsetX, offsetY) {

    }

    clearLines() {

    }

    isGameOver() {

    }
}
export default Board;