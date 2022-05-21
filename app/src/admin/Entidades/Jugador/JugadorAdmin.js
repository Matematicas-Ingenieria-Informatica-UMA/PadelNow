import React from "react";

import JugadorCRUD from "./JugadorCRUD";
import Generos from "../../../user/Componentes/Generos";

import "./Jugadores.css";
import { Link, useLocation } from "wouter";

export default function JugadorAdmin() {
  const [location, setLocation] = useLocation();
  return (
    <>
      <Generos />
      <Link to={`${location}/crear`}>
        <button className="mt-15 BotonConFondo">Nuevo Jugador</button>
      </Link>
      <div className="Jugadores">
        <div className="JugadoresGenero">
          <JugadorCRUD />
          <JugadorCRUD />
          <JugadorCRUD />
          <JugadorCRUD />
        </div>
        <div className="JugadoresGenero">
          <JugadorCRUD />
          <JugadorCRUD />
          <JugadorCRUD />
        </div>
      </div>
      <Link to="/admin/recursos">
        <button className="mt-15 mb-15 SimpleButton">Volver</button>
      </Link>
    </>
  );
}
