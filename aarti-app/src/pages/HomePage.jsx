import React from "react";
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

function HomePage() {
  const navigate = useNavigate();

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

  return (
    <div className="homepage">
      <div className="aarti-header">Aarti List</div>
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
    </div>
  );
}

export default HomePage;
