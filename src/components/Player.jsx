import React from "react";

class Player {
  constructor() {
    this.position = { x: 100, y: 300 };
    this.width = 50;
    this.height = 50;
    this.lives = 3;
    this.velocity = { x: 0, y: 0 };
    this.isJumping = false;
  }

  move(direction) {
    this.position.x += direction === "left" ? -5 : 5;
  }

  jump() {
    if (!this.isJumping) {
      this.velocity.y = -15; // Jump height
      this.isJumping = true;
    }
  }

  update() {
    // Apply gravity
    this.velocity.y += 1; // Gravity
    this.position.y += this.velocity.y;

    // Reset jumping state if on the ground
    if (this.position.y >= 300) {
      this.position.y = 300;
      this.isJumping = false;
      this.velocity.y = 0;
    }
  }

  render() {
    return (
      <div
        className="player"
        style={{
          position: "absolute",
          left: `${this.position.x}px`,
          bottom: `${this.position.y}px`,
          width: `${this.width}px`,
          height: `${this.height}px`,
          backgroundColor: "blue",
        }}
      />
    );
  }
}

export default Player;
