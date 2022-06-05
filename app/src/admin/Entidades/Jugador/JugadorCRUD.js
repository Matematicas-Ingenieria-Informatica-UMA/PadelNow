import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Jugadores.css";
import "../../style/Recursos.css";

export default function JugadorCRUD({ jugador }) {
  const [clase, setClase] = useState("JugadorNoDisplay");
  const [eliminar, setEliminar] = useState("Jugador");
  const [boton, setBoton] = useState("JugadorVerMas JugadorFont");

  const formattedFecha = new Date(jugador.fechaNacimiento).toLocaleDateString(
    "es-ES"
  );

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
        <img src={`${jugador.foto}`} className="Imagen" alt="ProfilePhoto" />
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
              <h3>{formattedFecha}</h3>
            </div>
            <div className="keyValue">
              <h4>Nacionalidad</h4>
              <h3>{jugador.pais}</h3>
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
              <h3>{jugador.brazoDominante}</h3>
            </div>
            <div className="keyValue">
              <h4>Altura</h4>
              <h3>{jugador.altura}</h3>
            </div>
            <div className="keyValue">
              <h4>Posición</h4>
              <h3>{jugador.posicionDeJuego}</h3>
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
