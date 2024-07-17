import React from "react";

class Weapon {
  constructor(player) {
    this.position = { x: player.position.x, y: player.position.y };
    this.width = 10;
    this.height = 5;
    this.direction = "right"; // or 'left'
  }

  throw() {
    // Logic for throwing the weapon
    this.position.x += this.direction === "right" ? 10 : -10;
  }

  render() {
    return (
      <div
        className="weapon"
        style={{
          position: "absolute",
          left: `${this.position.x}px`,
          bottom: `${this.position.y}px`,
          width: `${this.width}px`,
          height: `${this.height}px`,
          backgroundColor: "black",
        }}
      />
    );
  }
}

export default Weapon;
