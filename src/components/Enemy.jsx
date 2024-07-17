import React from "react";

class Enemy {
  constructor(id, x, y) {
    this.id = id; // Unique ID for the enemy
    this.position = { x, y };
    this.width = 50;
    this.height = 50;
    this.isAlive = true;
  }

  move() {
    // Simple random movement
    this.position.x += Math.random() < 0.5 ? -1 : 1;
  }

  hit() {
    this.isAlive = false; // Logic to remove enemy on hit
  }

  render() {
    if (!this.isAlive) return null;
    return (
      <div
        className="enemy"
        style={{
          position: "absolute",
          left: `${this.position.x}px`,
          bottom: `${this.position.y}px`,
          width: `${this.width}px`,
          height: `${this.height}px`,
          backgroundColor: "red",
        }}
      />
    );
  }
}

export default Enemy;
