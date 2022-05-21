import React from "react";
import ParejaCRUD from "./ParejaCRUD.js";
import Generos from "../../../user/Componentes/Generos.js";
import { Link } from "wouter";
import "./Parejas.css";

export default function ParejaAdmin() {
  const ejemploM = [
    {
      id: 1,
      TemporadasActivo: 2,
      Entrenador: "Jorge Martínez",
      TopRanking: 1,
      Puntos: "34.250",
      Jugador1: "Lebrón",
      Jugador2: "Galán",
    },
    {
      id: 2,
      TemporadasActivo: 2,
      Entrenador: "Alejandro Rey",
      TopRanking: 2,
      Puntos: "33.550",
      Jugador1: "Castillo",
      Jugador2: "Aguilera",
    },
  ];
  const ejemploF = [
    {
      id: 3,
      TemporadasActivo: 2,
      Entrenador: "Mario Quiñones",
      TopRanking: 1,
      Puntos: "34.250",
      Jugador1: "García",
      Jugador2: "Pérez",
    },
    {
      id: 4,
      TemporadasActivo: 2,
      Entrenador: "Nacho Ávila",
      TopRanking: 2,
      Puntos: "33.550",
      Jugador1: "Salazar",
      Jugador2: "Triay",
    },
  ];
  return (
    <>
      <Generos />
      <Link to={`${location}/crear`}>
        <button className="mt-15 BotonConFondo">Nueva Pareja</button>
      </Link>
      <div className="Parejas">
        <div className="ParejasGenero">
          {ejemploM.map((pareja) => {
            return <ParejaCRUD datos={pareja} />;
          })}
          ;
        </div>
        <div className="ParejasGenero">
        {ejemploF.map((pareja) => {
            return <ParejaCRUD datos={pareja} />;
          })}
        </div>
      </div>
      <Link to="/admin/recursos">
        <button className="mt-15 mb-15 SimpleButton">Volver</button>
      </Link>
    </>
  );
}
