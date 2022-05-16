import React from "react";
import "../style/Partido.css";
import "../style/Global.css";

export default function Partido() {
  return (
    <>
      <div className="PartidoCard">
        <h2 className="LeftAlign">Brussel Padel Open</h2>

        <div className="Titles">
          <h4 className="Round">Cuartos de Final</h4>
          <div className="Sets">
            <h4>Set 1</h4>
            <h4>Set 2</h4>
            <h4>Set 3</h4>
          </div>
        </div>
        <div className="SepHor"></div>

        <div className="PartidoSection">
          <div className="ParejaPartido">
            <div className="JugadorPartido">
              <img src="/Spain.svg" />
              <h4>ALEJANDRA SALAZAR</h4>
            </div>
            <div className="JugadorPartido">
              <img src="/Spain.svg" />
              <h4>GEMMA TRIAY</h4>
            </div>
          </div>
          <div className="Resultados">
            <h1>3</h1>
            <h1>6</h1>
            <h1>6</h1>
          </div>
        </div>
        <div className="SepHor"></div>
        <div className="PartidoSection">
          <div className="ParejaPartido">
            <div className="JugadorPartido">
              <img src="/Spain.svg" />
              <h4 className="NombreJugador">MARTA ORTEGA</h4>
            </div>
            <div className="JugadorPartido">
              <img src="/Spain.svg" />
              <h4>BEATRIZ GONZÁLEZ</h4>
            </div>
          </div>
          <div className="Resultados">
            <h1>6</h1>
            <h1>3</h1>
            <h1>4</h1>
          </div>
        </div>
        <div className="SepHor"></div>
        <div className="Subtitles">
          <h4>Tiempo de Partido</h4>
          <h3>03:04:12</h3>
        </div>
      </div>
    </>
  );
}
