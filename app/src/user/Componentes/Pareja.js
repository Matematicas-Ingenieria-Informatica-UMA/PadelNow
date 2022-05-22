import React from "react";

import { jugadores } from "../../BBDD/JugadoresBBDD";
import { parejas } from "../../BBDD/ParejasBBDD";

import "../style/Pareja.css";

export default function Pareja(props) {
  const pareja = parejas.find((x) => x.id == props.ID);
  const jugador1 = jugadores.find((x) => x.id == pareja.IDjugador1);
  const jugador2 = jugadores.find((x) => x.id == pareja.IDjugador2);

  return (
    <div className="Pareja">
      <div className="ParejaUp">
        <div className="PFoto">
          <img src={`${jugador1.URL}`} className="Imagen" alt="ProfilePhoto" />
          <h1 className="PNombre">
            {jugador1.apellidos.split(" ")[0].toUpperCase()}
          </h1>
        </div>

        <div className="PosyEntrenador">
          <div className="PRanking">
            <h2 className="Almohadilla">#</h2>
            <h1 className="Posicion">{pareja.TopRanking}</h1>
            <div className="CompetiFoto"></div>
          </div>
          <h2 className="Entrenador">Entrenador:</h2>
          <h2 className="PEntrenadorNombre">{pareja.Entrenador}</h2>
        </div>

        <div className="PFoto">
          <img src={`${jugador2.URL}`} className="Imagen" alt="ProfilePhoto" />
          <h1 className="PNombre">
            {jugador2.apellidos.split(" ")[0].toUpperCase()}
          </h1>
        </div>
      </div>
      <div className="PSepHor"></div>
      <h1 className="ParejaPuntos">{pareja.Puntos} pts.</h1>
    </div>
  );
}
