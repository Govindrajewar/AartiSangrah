import React from "react";
import "../style/View.css";
import { useNavigate, useLocation } from "react-router-dom";

function View() {
  const navigate = useNavigate();
  const location = useLocation();
  const { aarti } = location.state || {};

  let filteredAarti = [];

  if (aarti.lyrics) {
    filteredAarti = aarti.lyrics.split(",");
  }

  return (
    <div className="view">
      <div className="display-text">
        {aarti.lyrics ? (
          <div className="aarti-lyrics">
            <h1>{aarti.title}</h1>
            {filteredAarti.map((line, index) => (
              <div key={index}>
                {line}
                <br />
              </div>
            ))}
          </div>
        ) : (
          <img src={aarti?.url} alt={aarti?.title} />
        )}
      </div>

      <button className="close-btn" onClick={() => navigate("/")}>
        X
      </button>
    </div>
  );
}

export default View;
