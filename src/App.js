import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/Game.css';
import GameContainer from './containers/GameContainer';
import AboutComponent from './components/AboutComponent';
import HighScoresComponent from './components/HighScores';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <Router>
      <div className="Game">
        <HeaderComponent/>
        <Routes>
          <Route path="/" exact component={GameContainer}/>
          <Route path="/about" element={<AboutComponent />} /> {AboutComponent}
          <Route path="/highscores" element={<HighScoresComponent />} />{HighScoresComponent}/>
        </Routes>
        <FooterComponent/>
      </div>
    </Router>
  );
}

export default App;
