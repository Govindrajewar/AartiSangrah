import React from "react";
import "../style/View.css";
import { useNavigate, useLocation } from "react-router-dom";

function View() {
  const navigate = useNavigate();
  const location = useLocation();
  const { aarti } = location.state || {}; // Access the passed aarti object

  return (
    <div className="view">
      <div className="display-text">
        {/* <h1>{aarti?.name}</h1> */}
        <img src={aarti?.url} alt={aarti?.name} />
      </div>

      <button className="close-btn" onClick={() => navigate("/")}>
        X
      </button>
    </div>
  );
}

export default View;
