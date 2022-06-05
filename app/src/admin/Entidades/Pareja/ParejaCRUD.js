import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Parejas.css";

export default function ParejaCRUD({ pareja, ranking }) {
  const [eliminar, setEliminar] = useState("ParejaCRUD");
  const [jugador1, jugador2] = pareja.jugadores;

  return (
    <div className={eliminar}>
      <div className="CRUDElements">
        <img
          onClick={() => setEliminar("CRUDNoDisplay")}
          src="/Delete.svg"
          alt="Delete"
          className="ButtonPlayer"
        />
        <Link to={`modificar/${pareja.id}`}>
          <img src="/Edit.svg" alt="Edit" className="ButtonPlayer" />
        </Link>
      </div>
      <div className="ParejaUp">
        <div className="PJugador1">
          <div className="PFoto">
            <img
              src={`${jugador1.foto}`}
              className="Imagen"
              alt="ProfilePhoto"
            />
          </div>
          <h1 className="PNombre">
            {jugador1.apellidos.split(" ")[0].toUpperCase()}
          </h1>
        </div>

        <div className="PosyEntrenador">
          <div className="PRanking">
            <h2 className="Almohadilla">#</h2>
            <h1 className="Posicion">{ranking}</h1>
            <div className="CompetiFoto"></div>
          </div>
          <div className="PEntrenador">
            <h2 className="Entrenador">Entrenador:</h2>
            <h2 className="PEntrenadorNombre">{pareja.entrenador}</h2>
          </div>
        </div>

        <div className="PJugador2">
          <div className="PFoto">
            <img
              src={`${jugador2.foto}`}
              className="Imagen"
              alt="ProfilePhoto"
            />
          </div>
          <h1 className="PNombre">
            {jugador2.apellidos.split(" ")[0].toUpperCase()}
          </h1>
        </div>
      </div>
      <div className="PSepHor"></div>
      <h1 className="ParejaPuntos">{pareja.puntos} pts</h1>
    </div>
  );
}
