import React, { useEffect, useState } from "react";
import Generos from "../Componentes/Generos";
import BotonGenero from "../Componentes/BotonGenero";
import Torneo from "../Componentes/Torneo";
import { torneos } from "../../BBDD/TorneosBBDD";
import "../style/Torneos.css";

export default function Parejas() {
  const [width, setWidth] = useState(0);
  const [gender, setGender] = useState("Masc");

  useEffect(() => {
    const updateWidth = () => {
      const x = document.body.clientWidth;
      setWidth(x);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
  }, [width]);
  if (width > 800) {
    return (
      <>
        <Generos />
        <div className="Torneos">
          <div className="TorneosGenero">
            {torneos.map((tournament) => {
              if (tournament.categoria === "Masculino") {
                return <Torneo ID={tournament.id} />;
              }
            })}
          </div>
          <div className="TorneosGenero">
            {torneos.map((tournament) => {
              if (tournament.categoria === "Femenino") {
                return <Torneo ID={tournament.id} />;
              }
            })}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="TorneosResposive">
          <button
            className="BotonGenero"
            onClick={() => {
              if (gender === "Masc") {
                setGender("Fem");
              } else {
                setGender("Masc");
              }
            }}
          >
            <BotonGenero clase={gender} />
          </button>
          {torneos.map((x) => {
            let control = gender === "Masc" ? "Masculino" : "Femenino";
            if (x.categoria === control) {
              return <Torneo ID={x.id} />;
            }
          })}
        </div>
      </>
    );
  }
}
