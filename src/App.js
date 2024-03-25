import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GameContainer from './containers/GameContainer';
import AboutComponent from './components/AboutComponent';
import HighScoresComponent from './components/HighScores';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <Router>
        <HeaderComponent/>
        <Routes>
          <Route path="/" element={<GameContainer/>}/>
          <Route path="/about" element={<AboutComponent />}/>
          <Route path="/highscores" element={<HighScoresComponent />}/>
        </Routes>
        <FooterComponent/>
    </Router>
  );
}

export default App;
