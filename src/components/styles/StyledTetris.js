import styled from 'styled-components';

export const StyledTetrisWrapper = styled.div`  
    width: 100vw;
    height: 100vh;
    background-color: gray;
    `

export const StyledTetris  = styled.div`

.board {
  display: grid;
  grid-template-columns: repeat(10, 20px);
  grid-template-rows: repeat(20);
  border: 2px solid rgb(0, 0, 0);
  margin: 0 auto;
  width: fit-content;
  height: 400px;
}

.cell {
  background-color: black;
  border: 1px solid grey;
  display: flex;
  justify-content: center;
  align-items: center;
}
aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px
}
`