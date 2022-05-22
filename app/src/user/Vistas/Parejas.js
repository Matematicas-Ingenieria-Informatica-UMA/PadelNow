import React from "react";
import Pareja from "../Componentes/Pareja.js";
import Generos from "../Componentes/Generos.js";

import { parejas } from "../../BBDD/ParejasBBDD.js";

import "../style/Parejas.css";

export default function Parejas() {
  return (
    <>
      <Generos />

      <div className="Parejas">
        <div className="ParejasGenero">
          {parejas.map((pareja) => {
            if (pareja.Genero === "Masculino") {
              return <Pareja ID={pareja.id} />;
            }
          })}
        </div>
        <div className="ParejasGenero">
          {parejas.map((pareja) => {
            if (pareja.Genero === "Femenino") {
              return <Pareja ID={pareja.id} />;
            }
          })}
        </div>
      </div>
    </>
  );
}
