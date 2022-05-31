import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { jugadores } from "../../../BBDD/JugadoresBBDD";

import "./Jugadores.css";
import "../../style/Recursos.css";

export default function JugadorCRUD(props) {
  const [clase, setClase] = useState("JugadorNoDisplay");
  const [eliminar, setEliminar] = useState("Jugador");
  const [boton, setBoton] = useState("JugadorVerMas JugadorFont");

  const jugador = jugadores.find((x) => x.id === props.ID);

  return (
    <>
      <div className={eliminar}>
        <div className="CRUDElements">
          <img
            onClick={() => setEliminar("CRUDNoDisplay")}
            src="/Delete.svg"
            alt="Delete"
            className="ButtonPlayer"
          />
          <Link to={`modificar/${jugador.id}`}>
            <img src="/Edit.svg" alt="Edit" className="ButtonPlayer" />
          </Link>
        </div>
        <img src={`${jugador.URL}`} className="Imagen" alt="ProfilePhoto" />
        <div>
          <div className="mt-15 JugadorSepHor"></div>
          <h1 className="Nombre">
            {jugador.nombre.toUpperCase() +
              " " +
              jugador.apellidos.toUpperCase()}
          </h1>
          <div className="mb-15 JugadorSepHor"></div>
          <div className={clase}>
            <div className="keyValue">
              <h4>Nacimiento</h4>
              <h3>{jugador.nacimiento}</h3>
            </div>
            <div className="keyValue">
              <h4>Nacionalidad</h4>
              <h3>{jugador.nacionalidad}</h3>
            </div>
            <div className="keyValue">
              <h4>Ciudad</h4>
              <h3>{jugador.ciudad}</h3>
            </div>
            <div className="keyValue">
              <h4>Ranking</h4>
              <h3>{jugador.ranking}</h3>
            </div>
            <div className="keyValue">
              <h4>Brazo Dominante</h4>
              <h3>{jugador.brazodominante}</h3>
            </div>
            <div className="keyValue">
              <h4>Compañerx</h4>
              <h3>{jugador.compañerx}</h3>
            </div>
            <div className="keyValue">
              <h4>Altura</h4>
              <h3>{jugador.altura}</h3>
            </div>
            <div className="keyValue">
              <h4>Posición</h4>
              <h3>{jugador.posicion}</h3>
            </div>
            <button
              className="JugadorVerMas JugadorFont"
              onClick={() => {
                setClase("JugadorNoDisplay");
                setBoton("JugadorVerMas JugadorFont");
              }}
            >
              Ver Menos
            </button>
          </div>
          <button
            className={boton}
            onClick={() => {
              setClase("JugadorFont");
              setBoton("JugadorNoDisplay");
            }}
          >
            Ver Más
          </button>
        </div>
      </div>
    </>
  );
}
