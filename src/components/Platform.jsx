import React from "react";

class Platform {
  constructor(id, x, y, width) {
    this.id = id; // Unique ID for the platform
    this.position = { x, y };
    this.width = width;
    this.height = 10;
  }

  render() {
    return (
      <div
        className="platform"
        style={{
          position: "absolute",
          left: `${this.position.x}px`,
          bottom: `${this.position.y}px`,
          width: `${this.width}px`,
          height: `${this.height}px`,
          backgroundColor: "green",
        }}
      />
    );
  }
}

export default Platform;
