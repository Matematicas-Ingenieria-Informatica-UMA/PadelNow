import React from "react";
import { useState } from "react";
import { Link } from "wouter";
import "./Parejas.css";

export default function ParejaCRUD(props) {
  const [eliminar, setEliminar] = useState("ParejaCRUD");
  const datos = props.datos;
  return (
    
    <div className={eliminar}>
      <div className="CRUDElements">
        <img
          onClick={() => setEliminar("CRUDNoDisplay")}
          src="/Delete.svg"
          alt="Delete"
          className="ButtonPlayer"
        />
        <Link to={`${location}/modificar/${datos.id}`}>
            <img src="/Edit.svg" alt="Edit" className="ButtonPlayer"/>
        </Link>
      </div>
      <div className="ParejaUp">
        <div className="PJugador1">
          <div className="PFoto"></div>
          <h1 className="PNombre">{datos.Jugador1.toUpperCase()}</h1>
        </div>

        <div className="PosyEntrenador">
          <div className="PRanking">
            <h2 className="Almohadilla">#</h2>
            <h1 className="Posicion">{datos.TopRanking}</h1>
            <div className="CompetiFoto"></div>
          </div>
          <div className="PEntrenador">
            <h2 className="Entrenador">Entrenador:</h2>
            <h2 className="PEntrenadorNombre">{datos.Entrenador}</h2>
          </div>
        </div>

        <div className="PJugador2">
          <div className="PFoto"></div>
          <h1 className="PNombre">{datos.Jugador2.toUpperCase()}</h1>
        </div>
      </div>
      <div className="PSepHor"></div>
      <h1 className="ParejaPuntos">{datos.Puntos} pts</h1>
    </div>
  );
}
