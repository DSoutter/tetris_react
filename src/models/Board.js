import Cell from './Cell.js';

class Board {
    constructor(rows, columns){
    this.rows = 20;
    this.columns = 10;
    this.grid = this.createEmptyGrid();
    }

    createEmtpyGrid() {
        return Array.from({length: this.rows}, () => Array(this.columns).fill(null));
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