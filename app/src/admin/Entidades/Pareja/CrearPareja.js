import React from "react";
import { Link } from "wouter";

import "../../style/CrearRecurso.css";
import "../../../user/style/Global.css";
import { jugadores } from "../../../BBDD/JugadoresBBDD";

export default function CrearPareja() {
  return (
    <div className="CreaRecursoCard">
      <h1 className="CenterAlign">
        Rellene los datos de la pareja
      </h1>
      <div className="CrearPareja">
        <select name="Gender" id="Gender" className="DesplegableRecurso mb-15">
          <option disabled selected>
            Selecciona el género
          </option>

          <option>Masculino</option>

          <option>Femenino</option>
        </select>
        <h2>Jugador 1</h2>
        <select required id="Player1" name="Jugador1" className="mb-15">
          <option disabled selected>
            Selecciona un jugador           </option>
          {jugadores.map((x) => {
            return <option>{x.nombre + " " + x.apellidos}</option>;
          })}
        </select>
        <h2>Jugador 2</h2>
        <select required id="Player2" name="Jugador 2" className="mb-15">
          <option disabled selected>
            Selecciona un jugador{" "}
          </option>

          {jugadores.map((x) => {
            return <option>{x.nombre + " " + x.apellidos}</option>;
          })}
        </select>
        <div className="CreaRecursoCard">
          <div className="InputStyle">
            <input
              required
              type="text"
              id="Entrenador"
              placeholder={`Entrenador`}
            />
          </div>
          <div className="InputStyle">
            <input required type="text" id="Puntos" placeholder={`Puntos`} />
          </div>
          <div className="InputStyle">
            <input
              required
              type="text"
              id="TempActivo"
              placeholder={`Temporadas en Activo`}
            />
          </div>
          <div className="InputStyle">
            <input
              required
              type="text"
              id="TopRanking"
              placeholder={`Top Ranking`}
            />
          </div>
        </div>
      </div>
      <button className="mt-15 BotonConFondo">Crear Pareja</button>
      <Link to="/admin/recursos/parejas">
        <button className="SimpleButton">Cancelar</button>
      </Link>
    </div>
  );
}
