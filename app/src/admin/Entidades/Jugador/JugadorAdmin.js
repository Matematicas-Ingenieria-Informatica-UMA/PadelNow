import React from "react";

import JugadorCRUD from "./JugadorCRUD";
import Generos from "../../../user/Componentes/Generos";

import "./Jugadores.css";
import { Link } from "react-router-dom";
import useJugador from "../../../shared/Jugador/useJugador";

export default function JugadorAdmin() {
  const { jugadores } = useJugador();

  return (
    <>
      <h1 className="TituloAdmin">PadelNow - Jugadores</h1>
      <Generos />
      <div className="BotonesAdmin">
        <Link to="crear" className="mt-15 BotonConFondo">
          Nuevo Jugador
        </Link>
        <Link to="/admin/recursos" className="mt-15 BotonConFondo">
          Volver
        </Link>
      </div>
      <div className="Jugadores">
        <div className="JugadoresGenero">
          {jugadores
            .filter((j) => j.sexo === "MASCULINO")
            .map((jugador) => (
              <JugadorCRUD jugador={jugador} />
            ))}
        </div>
        <div className="JugadoresGenero">
          {jugadores
            .filter((j) => j.sexo === "FEMENINO")
            .map((jugador) => (
              <JugadorCRUD jugador={jugador} />
            ))}
        </div>
      </div>
      <Link to="/admin/recursos" className="mt-15 mb-15 SimpleButton">
        Volver
      </Link>
    </>
  );
}
