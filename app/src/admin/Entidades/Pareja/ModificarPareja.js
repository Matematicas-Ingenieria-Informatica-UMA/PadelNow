import React from "react";
import { Link, useLocation } from "wouter";

export default function ModificarPareja() {
  const [location, setLocation] = useLocation();
  const datos = {
    id: location.split("/").pop(),
    TemporadasActivo: 2,
    Entrenador: "Jorge Martínez",
    TopRanking: 1,
    Puntos: "34.250",
    Jugador1: "Lebrón",
    Jugador2: "Galán",
  };
  return (
    <div className="CreaRecursoCard">
      <h1 className="CenterAlign">Selecciona ambos jugadores</h1>
      <div className="CrearPareja">
        <h2>Jugador 1</h2>
        <select required id="Player1" name="Jugador1">
          <option disabled selected>
            Selecciona un jugador ({datos.Jugador1})
          </option>

          <option>Juan Lebrón</option>

          <option>Ale Galán</option>

          <option>Alejandra Salazar</option>

          <option>Gemma Triay</option>
        </select>
        <h2 className="mt-15">Jugador 2</h2>
        <select required id="Player2" name="Jugador 2">
          <option disabled selected>
            Selecciona un jugador ({datos.Jugador2})
          </option>

          <option>Juan Lebrón</option>

          <option>Ale Galán</option>

          <option>Alejandra Salazar</option>

          <option>Gemma Triay</option>
        </select>
      </div>
      <button className="mt-15 BotonConFondo">Modificar Pareja</button>
      <Link to="/admin/recursos/parejas">
        <button className="SimpleButton">Cancelar</button>
      </Link>
    </div>
  );
}
