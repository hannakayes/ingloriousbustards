import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GameProvider } from "./context/GameContext";
import StartPage from "./pages/StartPage";
import GamePage from "./pages/GamePage";
import EndPage from "./pages/EndPage";
import AboutPage from "./pages/AboutPage";
import "./styles/styles.css";

const App = () => {
  return (
    <Router>
      <GameProvider>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/end" element={<EndPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </GameProvider>
    </Router>
  );
};

export default App;
