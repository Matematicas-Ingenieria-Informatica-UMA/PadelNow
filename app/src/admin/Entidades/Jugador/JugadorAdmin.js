import React from "react";

import JugadorCRUD from "./JugadorCRUD";
import Generos from "../../../user/Componentes/Generos";
import { jugadores } from "../../../BBDD/JugadoresBBDD";

import "./Jugadores.css";
import { Link } from "react-router-dom";

export default function JugadorAdmin() {
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
          {jugadores.map((x) => {
            if (x.genero === "Masculino") {
              return <JugadorCRUD ID={x.id}></JugadorCRUD>;
            }
          })}
        </div>
        <div className="JugadoresGenero">
          {jugadores.map((x) => {
            if (x.genero === "Femenino") {
              return <JugadorCRUD ID={x.id}></JugadorCRUD>;
            }
          })}
        </div>
      </div>
      <Link to="/admin/recursos" className="mt-15 mb-15 SimpleButton">
        Volver
      </Link>
    </>
  );
}
