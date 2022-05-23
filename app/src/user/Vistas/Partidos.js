import React, { useEffect, useState } from "react";
import Partido from "../Componentes/Partido.js";
import Generos from "../Componentes/Generos.js";
import BotonGenero from "../Componentes/BotonGenero.js";
import "../style/Partidos.css";

export default function Partidos() {
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
  if (width > 1100) {
    return (
      <>
        <Generos />
        <div className="Partidos">
          <div className="PartidosGenero">
            <Partido></Partido>
            <Partido></Partido>
            <Partido></Partido>
            <Partido></Partido>
          </div>
          <div className="PartidosGenero">
            <Partido></Partido>
            <Partido></Partido>
            <Partido></Partido>
            <Partido></Partido>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="ParejasResposive">
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
          {jugadores.map((pareja) => {
            let control = gender === "Masc" ? "Masculino" : "Femenino";
            if (pareja.Genero === control) {
              return <Pareja ID={pareja.id} />;
            }
          })}
        </div>
      </>
    );
  }
}
