import React, { useState } from "react";
import axios from "axios";
import "../style/NavBar.css";
import { BACKEND_URL } from "../deploymentLink";

function NavBar() {
  const [isAddingAarti, setIsAddingAarti] = useState(false);
  const [name, setName] = useState("");
  const [lyrics, setLyrics] = useState("");

  const handleAddAartiToggle = () => {
    setIsAddingAarti(true);
  };

  //   Add button functionality
  const handleAddAartiButton = async () => {
    if (!name) {
      alert("Please enter Aarti Name");
      return;
    }

    if (!lyrics) {
      alert("Please enter Aarti Lyrics");
      return;
    }

    const aartiData = {
      title: name,
      lyrics,
    };

    try {
      const response = await axios.post(
        `${BACKEND_URL}/addNewAarti`,
        aartiData
      );
      alert(response.data.message);
    } catch (err) {
      console.error("Error adding Aarti:", err);
    }

    setName("");
    setLyrics("");
    setIsAddingAarti(false);
  };

  const handleCloseButton = () => {
    setIsAddingAarti(false);
  };

  return (
    <div className="navbar">
      <button className="add-aarti-toggle" onClick={handleAddAartiToggle}>
        Add Aarti
      </button>

      {isAddingAarti && (
        <>
          <div className="add-aarti">
            <div className="input-div">
              <label htmlFor="name">Aarti Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Aarti Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <br />

            <div className="input-div">
              <label htmlFor="lyrics">Aarti Lyrics</label>
              <input
                type="text"
                name="lyrics"
                id="lyrics"
                placeholder="Enter Aarti lyrics"
                value={lyrics}
                onChange={(e) => setLyrics(e.target.value)}
                required
              />
            </div>

            <br />
            <button className="add-aarti-btn" onClick={handleAddAartiButton}>
              Add
            </button>

            <div className="close-btn" onClick={handleCloseButton}>
              X
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default NavBar;
