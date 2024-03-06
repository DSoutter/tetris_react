import React, {useEffect, useState, event} from 'react';
import './styles/Game.css';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import GameContainer from './containers/GameContainer';
function App() {
  return (
    <div className="Game">
      <HeaderComponent/>
      <GameContainer/>
      <FooterComponent/>
    </div>
  );
}

export default App;
