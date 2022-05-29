import React from "react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { partidos } from "../../../BBDD/PartidosBBDD";
import "./Partidos.css";
import "../../../user/style/Global.css";

export default function PartidoCRUD(props) {
  const [location, setLocation] = useLocation();
  const [eliminar, setEliminar] = useState("PartidoCard");
  let datos = partidos.find((x) => x.id === props.ID);
  let resultado = datos.resultado.split("/");

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
          <Link to={`${location}/modificar/${datos.id}`}>
            <img src="/Edit.svg" alt="Delete" className="ButtonPlayer" />
          </Link>
        </div>
        <h2 className="LeftAlign">{datos.nombre}</h2>

        <div className="Titles">
          <h4 className="Round">{datos.fase}</h4>
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
              <h4>{datos.pareja1.Jugador1}</h4>
            </div>
            <div className="JugadorPartido">
              <img src="/Spain.svg" />
              <h4>{datos.pareja1.Jugador2}</h4>
            </div>
          </div>
          <div className="Resultados">
            <h1>{resultado[0]}</h1>
            <h1>{resultado[2]}</h1>
            <h1>{resultado[4]}</h1>
          </div>
        </div>
        <div className="SepHor"></div>
        <div className="PartidoSection">
          <div className="ParejaPartido">
            <div className="JugadorPartido">
              <img src="/Spain.svg" />
              <h4 className="NombreJugador">{datos.pareja2.Jugador1}</h4>
            </div>
            <div className="JugadorPartido">
              <img src="/Spain.svg" />
              <h4>{datos.pareja2.Jugador2}</h4>
            </div>
          </div>
          <div className="Resultados">
            <h1>{resultado[1]}</h1>
            <h1>{resultado[3]}</h1>
            <h1>{resultado[5]}</h1>
          </div>
        </div>
        <div className="SepHor"></div>
        <div className="Subtitles">
          <h4>Duración</h4>
          <h3>{datos.tiempo}</h3>

          <h4>Fecha</h4>
          <h4>{datos.fecha}</h4>
        </div>
      </div>
    </>
  );
}
