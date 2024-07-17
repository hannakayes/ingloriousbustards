import React from "react";
import { useNavigate } from "react-router-dom";

const StartPage = () => {
  const navigate = useNavigate();

  const startGame = () => {
    navigate("/game");
  };

  return (
    <div className="start-page">
      <h1>Untitled Ninja Game</h1>
      <button onClick={startGame}>Start Game</button>
      <button onClick={() => navigate("/about")}>About</button>
    </div>
  );
};

export default StartPage;
