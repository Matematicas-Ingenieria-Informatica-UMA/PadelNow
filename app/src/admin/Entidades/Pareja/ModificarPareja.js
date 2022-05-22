import React from "react";
import { Link, useLocation } from "wouter";
import { parejas } from "../../../BBDD/ParejasBBDD";
import { jugadores } from "../../../BBDD/JugadoresBBDD";

export default function ModificarPareja() {
  const [location, setLocation] = useLocation();
  const id = useLocation()[0].split("/").pop();
  const pareja = parejas.find((x) => x.id == id);
  const jugador1 = jugadores.find((x) => x.id == pareja.IDjugador1);
  const jugador2 = jugadores.find((x) => x.id == pareja.IDjugador2);

  return (
    <div className="CreaRecursoCard">
      <h1 className="CenterAlign">Rellene únicamente los datos de la pareja a modificar</h1>
      <div className="CrearPareja">
        <select name="Gender" id="Gender" className="DesplegableRecurso mb-15">
          <option disabled selected>
            Selecciona el género ({pareja.Genero})
          </option>

          <option>Masculino</option>

          <option>Femenino</option>
        </select>
        <h2>Jugador 1</h2>
        <select required id="Player1" name="Jugador1" className="mb-15">
          <option disabled selected>
            Selecciona un jugador (
            {jugador1.apellidos.split(" ")[0].toUpperCase()})
          </option>

          <option>Juan Lebrón</option>

          <option>Ale Galán</option>

          <option>Alejandra Salazar</option>

          <option>Gemma Triay</option>
        </select>
        <h2>Jugador 2</h2>
        <select required id="Player2" name="Jugador 2" className="mb-15">
          <option disabled selected>
            Selecciona un jugador (
            {jugador2.apellidos.split(" ")[0].toUpperCase()})
          </option>

          <option>Juan Lebrón</option>

          <option>Ale Galán</option>

          <option>Alejandra Salazar</option>

          <option>Gemma Triay</option>
        </select>
        <div className="CreaRecursoCard">
          <div className="InputStyle">
            <input
              required
              type="text"
              id="Entrenador"
              placeholder={`Entrenador: ${pareja.Entrenador}`}
            />
          </div>
          <div className="InputStyle">
            <input
              required
              type="text"
              id="Puntos"
              placeholder={`Puntos: ${pareja.Puntos}`}
            />
          </div>
          <div className="InputStyle">
            <input
              required
              type="text"
              id="TempActivo"
              placeholder={`Temporadas en Activo: ${pareja.TemporadasActivo}`}
            />
          </div>
          <div className="InputStyle">
            <input
              required
              type="text"
              id="TopRanking"
              placeholder={`Top Ranking: ${pareja.TopRanking}`}
            />
          </div>
        </div>
      </div>
      <button className="mt-15 BotonConFondo">Modificar Pareja</button>
      <Link to="/admin/recursos/parejas">
        <button className="SimpleButton">Cancelar</button>
      </Link>
    </div>
  );
}
