import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";
import StartPage from "./StartPage";
import Game from "../components/Game";
import EndPage from "./EndPage";
import AboutPage from "./AboutPage";

const GamePage = () => {
  const { gameState } = useContext(GameContext);

  switch (gameState) {
    case "start":
      return <StartPage />;
    case "playing":
      return <Game />;
    case "end":
      return <EndPage />;
    case "about":
      return <AboutPage />;
    default:
      return null;
  }
};

export default GamePage;
