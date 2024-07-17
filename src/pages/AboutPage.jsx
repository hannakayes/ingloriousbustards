import React from "react";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      <h1>About the Game</h1>
      <p>
        In the Untitled Ninja Game, you go on an adventure to save the
        princess...
      </p>
      <button onClick={() => navigate("/")}>Back to Start</button>
    </div>
  );
};

export default AboutPage;
