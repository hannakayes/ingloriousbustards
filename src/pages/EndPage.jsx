import React from "react";
import { useNavigate } from "react-router-dom";

const EndPage = () => {
  const navigate = useNavigate();

  return (
    <div className="end-page">
      <h1>Game Over</h1>
      <button onClick={() => navigate("/")}>Restart</button>
      <button onClick={() => navigate("/about")}>About</button>
    </div>
  );
};

export default EndPage;
