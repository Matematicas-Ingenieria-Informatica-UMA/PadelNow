import React from "react";
import { Link, useLocation } from "wouter";
import { jugadores } from "../../../BBDD/JugadoresBBDD";
import { parejas } from "../../../BBDD/ParejasBBDD";
import { torneos } from "../../../BBDD/TorneosBBDD";

import "../../style/CrearRecurso.css";
import "../../../user/style/Global.css";

export default function ModificarTorneo() {
  const currentID = useLocation()[0].split("/").pop();
  let currentTorneo = torneos.find((x) => x.id === currentID);
  return (
    <>
      <h1 className="TituloAdmin">PadelNow - MODIFICAR Torneo</h1>
      <div className="CreaRecursoCard">
        <h1 className="CenterAlign">Modifique los datos del torneo</h1>

        <div className="IncidenciaTop">
          <div className="InputStyle DataInput">
            <input required type="text" id="id" placeholder={currentID} />
          </div>
          <div className="InputStyle DataInput">
            <input
              required
              type="text"
              id="Name"
              placeholder={currentTorneo.nombre}
            />
          </div>
        </div>
        <div className="IncidenciaTop">
          <div className="InputStyle">
            <input
              required
              type="text"
              id="Initial"
              placeholder={currentTorneo.faseInicial}
            />
          </div>
          <select
            required
            name="Gender"
            id="Gender"
            className="DesplegableRecurso"
          >
            <option disabled selected>
              Selecciona la categoría: {currentTorneo.categoria}
            </option>

            <option>Masculino</option>

            <option>Femenino</option>
          </select>
        </div>
        <div className="IncidenciaTop">
          <div className="InputStyle DataInput">
            <input type="number" id="Year" placeholder={currentTorneo.anio} />
          </div>
          <select
            required
            id="Player1"
            name="Jugador1"
            className="DesplegableRecurso"
          >
            <option disabled selected>
              Selecciona la pareja ganadora: {currentTorneo.ganadores.jugador1}{" "}
              y {currentTorneo.ganadores.jugador2}
            </option>
            {parejas.map((x) => {
              return (
                <option>
                  {jugadores
                    .find((y) => x.IDjugador1 === y.id)
                    .apellidos.split(" ")[0] +
                    " y " +
                    jugadores
                      .find((y) => x.IDjugador2 === y.id)
                      .apellidos.split(" ")[0]}
                </option>
              );
            })}
          </select>
        </div>
        <h1 className="CenterAlign">Modifique los datos de la institucion</h1>
        <div className="IncidenciaTop">
          <div className="InputStyle DataInput">
            <input
              required
              type="text"
              id="institucionNombre"
              placeholder={currentTorneo.institucion.nombre}
            />
          </div>
          <div className="InputStyle DataInput">
            <input
              required
              type="text"
              id="institucionOrg"
              placeholder={currentTorneo.institucion.organizador}
            />
          </div>
        </div>
        <div className="IncidenciaTop">
          <div className="InputStyle">
            <input
              required
              type="text"
              id="sede"
              placeholder={currentTorneo.institucion.sede}
            />
          </div>
          <select required id="international" className="DesplegableRecurso">
            <option disabled selected>
              ¿Es internacional?: {currentTorneo.institucion.internacional}
            </option>

            <option>Sí</option>

            <option>No</option>
          </select>
        </div>
        <div className="IncidenciaTop">
          <div className="InputStyle DataInput">
            <input
              required
              type="text"
              id="anioFundacion"
              placeholder={currentTorneo.institucion.anioFundacion}
            />
          </div>
          <div className="InputStyle DataInput">
            <input
              required
              type="text"
              id="URLPhoto"
              placeholder={currentTorneo.institucion.foto}
            />
          </div>
        </div>
        <button className="BotonConFondo">Modificar Torneo</button>
        <Link to="/admin/recursos/torneos">
          <button className="SimpleButton">Cancelar</button>
        </Link>
      </div>
    </>
  );
}
