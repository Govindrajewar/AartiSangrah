import React, { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../deploymentLink";
import "../style/HomePage.css";
import { useNavigate } from "react-router-dom";
import aarti_shivraja from "../assets/aarti_shivraja.jpg";
import anusaya_nandana from "../assets/anusaya_nandana.jpg";
import durge_durgat_bhari from "../assets/durge_durgat_bhari.jpg";
import jaiganeshjaiganesh from "../assets/jaiganeshjaiganesh.jpg";
import lavthavti_vikrala from "../assets/lavthavti_vikrala.jpg";
import lolo_lagla from "../assets/lolo_lagla.jpg";
import pahilyan_basvin_1 from "../assets/pahilyan_basvin_1.jpg";
import shendur_laal from "../assets/shendur_laal.jpg";
import sonyachya_pavlane from "../assets/sonyachya_pavlane.jpg";
import sukhkarta from "../assets/sukhkarta.jpg";
import udo_udo_udo_udog from "../assets/udo_udo_udo_udog.jpg";
import yei_o_renuke from "../assets/yei_o_renuke.jpg";
import NavBar from "../components/NavBar";

function HomePage() {
  const navigate = useNavigate();

  // eslint-disable-next-line
  const [isMobile, setIsMobile] = useState(false);
  const [userAarti, setUserAarti] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessageIndex, setLoadingMessageIndex] = useState(0);

  const loadingMessageArray = [
    { message: "Fetching data, please wait..." },
    { message: "Almost there..." },
    { message: "Hang tight, just a little longer..." },
    { message: "Preparing your content..." },
    { message: "Loading, thank you for your patience!" },
  ];
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 800) {
        setIsMobile(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  // eslint-disable-next-line
  const aartiList = [
    { name: "Aarti Shivraja", url: aarti_shivraja },
    { name: "Anusaya Nandana", url: anusaya_nandana },
    { name: "Durge Durgat Bhari", url: durge_durgat_bhari },
    { name: "Jay Ganesh Jay Ganesh", url: jaiganeshjaiganesh },
    { name: "Lavthavti Vikrala", url: lavthavti_vikrala },
    { name: "Lolo Lagla", url: lolo_lagla },
    { name: "Pahilyan Basvin", url: pahilyan_basvin_1 },
    { name: "Shendur Laal", url: shendur_laal },
    { name: "Sonyachya Pavlane", url: sonyachya_pavlane },
    { name: "Sukhkarta Dukhharta", url: sukhkarta },
    { name: "Udo Udo Udo Udog", url: udo_udo_udo_udog },
    { name: "Yeyi O Renuke", url: yei_o_renuke },
  ];

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${BACKEND_URL}/getAllData`);
        setUserAarti(response.data);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingMessageIndex((prevIndex) =>
        prevIndex === loadingMessageArray.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <div className="homepage">
      <NavBar />
      <div className="aarti-header">Aarti List</div>

      <h2>Local Aarti</h2>

      <div className="aarti-count">
        Number of Aarti Available: {aartiList.length}
      </div>
      <div className="aarti-grid">
        {aartiList.map((aarti) => (
          <div
            key={aarti.name}
            className="aarti-card"
            onClick={() => {
              navigate("/view", { state: { aarti } });
            }}
          >
            <div className="aarti-title">{aarti.name}</div>
          </div>
        ))}
      </div>

      <h2>Global Aarti</h2>

      <div className="aarti-count">
        Number of Aarti Available: {userAarti.length}
      </div>
      {isLoading ? (
        <div className="loading-message">
          {loadingMessageArray[loadingMessageIndex].message}
        </div>
      ) : (
        <div className="aarti-grid">
          {userAarti.map((aarti) => (
            <div
              key={aarti._id}
              className="aarti-card"
              onClick={() => {
                navigate("/view", { state: { aarti } });
              }}
            >
              <div className="aarti-title">{aarti.title}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;
