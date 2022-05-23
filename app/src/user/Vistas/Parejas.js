import React from "react";
import Pareja from "../Componentes/Pareja.js";
import Generos from "../Componentes/Generos.js";

import { parejas } from "../../BBDD/ParejasBBDD.js";

import "../style/Parejas.css";

export default function Parejas() {
  let x = window.matchMedia("(min-width:700px");
  function mediaQueri(x) {
    if (x.matches) {
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
    } else {
      return (
        <>
          <div className="generoButton">
            <img src="/Masc.svg" className="generoNoDisplay" />
            <img src="/Fem.svg" className="generoNoDisplay" />
          </div>
          <div className="Parejas">
            <div className="ParejasGenero">
              {parejas.map((pareja) => {
                if (pareja.Genero === "Masculino") {
                  return <Pareja ID={pareja.id} />;
                }
              })}
            </div>
          </div>
        </>
      );
    }
  }
  return mediaQueri(x);
  x.addEventListener(mediaQueri);
}
