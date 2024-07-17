import React, { useContext, useEffect } from "react";
import useGameLogic from "../hooks/useGameLogic";
import { GameContext } from "../context/GameContext";

const Game = () => {
  const { setGameState } = useContext(GameContext);
  const { player, platforms, enemies, handleGameOver } =
    useGameLogic(setGameState);

  // Ensure the game updates every render cycle
  useEffect(() => {
    const gameInterval = setInterval(() => {
      if (player) {
        player.update();
        enemies.forEach((enemy) => enemy.move());

        // Check for collisions or game over conditions
        if (player.lives <= 0) {
          handleGameOver();
        }
      }
    }, 100); // Update every 100ms

    return () => clearInterval(gameInterval); // Cleanup on unmount
  }, [player, enemies, handleGameOver]); // Dependencies to monitor

  if (!player || !platforms.length || !enemies.length) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <div className="game-container">
      {player.render()}
      {platforms.map((platform) => (
        <div key={platform.id}>{platform.render()}</div>
      ))}
      {enemies.map((enemy) => (
        <div key={enemy.id}>{enemy.render()}</div>
      ))}
    </div>
  );
};

export default Game;
