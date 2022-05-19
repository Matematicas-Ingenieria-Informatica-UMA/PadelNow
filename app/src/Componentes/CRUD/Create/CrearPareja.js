import React from "react";
import { Link } from "wouter";

import "../../../style/CRUD/Create/CrearRecurso.css";
import "../../../style/Global.css";

export default function CrearPareja() {
  return (
    <div className="CreaRecursoCard">
      <h1 className="CenterAlign">Selecciona ambos jugadores</h1>
      <div className="CrearPareja">
        <h2>Jugador 1</h2>
        <select required id="Player1" name="Jugador1">
          <option disabled selected>
            Selecciona un jugador
          </option>

          <option>Juan Lebrón</option>

          <option>Ale Galán</option>

          <option>Alejandra Salazar</option>

          <option>Gemma Triay</option>
        </select>
        <h2 className="mt-15">Jugador 2</h2>
        <select required id="Player2" name="Jugador 2">
          <option disabled selected>
            Selecciona un jugador
          </option>

          <option>Juan Lebrón</option>

          <option>Ale Galán</option>

          <option>Alejandra Salazar</option>

          <option>Gemma Triay</option>
        </select>
      </div>
      <button className="mt-15 BotonConFondo">Crear Pareja</button>
      <Link to="/admin/crud">
        <button className="SimpleButton">Cancelar</button>
      </Link>
    </div>
  );
}
