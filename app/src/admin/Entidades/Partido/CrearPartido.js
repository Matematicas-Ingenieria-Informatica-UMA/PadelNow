import React from "react";
import { Link } from "react-router-dom";

import "../../style/CrearRecurso.css";
import "../../../user/style/Global.css";

export default function CrearPartido() {
  return (
    <>
      <h1 className="TituloAdmin">PadelNow - CREAR PARTIDO</h1>
      <div className="CreaRecursoCard">
        <h1 className="CenterAlign">Rellene los datos del partido</h1>
        <div className="IncidenciaTop">
          <select
            required
            id="Couple1"
            name="Pareja1"
            className="DesplegableRecurso"
          >
            <option disabled selected>
              Selecciona una pareja
            </option>

            <option>Lebrón-Galán</option>
          </select>
          <select
            required
            id="Couple2"
            name="Pareja2"
            className="DesplegableRecurso"
          >
            <option disabled selected>
              Selecciona una pareja
            </option>

            <option>Triay-Salazar</option>
          </select>
        </div>
        <div className="IncidenciaTop">
          <div className="InputStyle DateInput">
            <p className="m-0">Fecha</p>
            <input required type="date" id="Date" />
          </div>
          <div className="InputStyle ">
            <input required type="text" id="Result" placeholder="Resultado" />
          </div>
        </div>
        <div className="IncidenciaTop">
          <div className="InputStyle ">
            <input required type="text" id="Winners" placeholder="Winners" />
          </div>
          <div className="InputStyle DataInput">
            <input
              required
              type="text"
              id="Errors"
              placeholder="Errores No Forzados"
            />
          </div>
        </div>
        <div className="IncidenciaTop">
          <div className="InputStyle ">
            <input
              required
              type="text"
              id="Breaks"
              placeholder="Bolas de Break"
            />
          </div>
          <div className="InputStyle ">
            <input required type="text" id="Smashes" placeholder="Smashes" />
          </div>
        </div>
        <div className="IncidenciaTop">
          <div className="InputStyle ">
            <input
              required
              type="text"
              id="Referee"
              placeholder="Juez de Silla"
            />
          </div>
          <div className="InputStyle ">
            <input
              required
              type="text"
              id="GoldBalls"
              placeholder="Bolas de Oro"
            />
          </div>
        </div>
        <div className="IncidenciaTop">
          <div className="InputStyle DataInput">
            <input required type="text" id="Stage" placeholder="Fase" />
          </div>
          <div className="InputStyle DataInput">
            <input required type="text" id="Time" placeholder="Duración" />
          </div>
        </div>
        <button className="BotonConFondo">Crear Partido</button>
        <Link to="/admin/recursos/partidos">
          <button className="SimpleButton">Cancelar</button>
        </Link>
      </div>
    </>
  );
}
