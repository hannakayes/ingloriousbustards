import { useEffect, useState } from "react";
import Player from "../components/Player";
import Platform from "../components/Platform";
import Enemy from "../components/Enemy";

const useGameLogic = (setGameState) => {
  const [player, setPlayer] = useState(null);
  const [platforms, setPlatforms] = useState([]);
  const [enemies, setEnemies] = useState([]);

  useEffect(() => {
    const newPlayer = new Player(50, 50); // Initial position
    const newPlatforms = createPlatforms();
    const newEnemies = createEnemies();

    setPlayer(newPlayer);
    setPlatforms(newPlatforms);
    setEnemies(newEnemies);
  }, []);

  const createPlatforms = () => {
    const platformArray = [];
    for (let i = 0; i < 5; i++) {
      platformArray.push(new Platform(i, i * 100, 150 + i * 50, 100)); // Pass unique ID
    }
    return platformArray;
  };

  const createEnemies = () => {
    const enemyArray = [];
    for (let i = 0; i < 3; i++) {
      enemyArray.push(new Enemy(i, 150 + i * 100, 100)); // Pass unique ID
    }
    return enemyArray;
  };

  const handleGameOver = () => {
    setGameState("end");
  };

  return { player, platforms, enemies, handleGameOver };
};

export default useGameLogic;
