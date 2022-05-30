import React from "react";
import { Link, useLocation } from "wouter";
import { jugadores } from "../../../BBDD/JugadoresBBDD";
import { parejas } from "../../../BBDD/ParejasBBDD";
import { torneos } from "../../../BBDD/TorneosBBDD";

import "../../style/CrearRecurso.css";
import "../../../user/style/Global.css";

export default function ModificarTorneo() {
    const currentID = parseInt(useLocation()[0].split("/").pop());
    let currentTorneo = 0;
    for (let i = 0; i < torneos.length; i++) {
        if (torneos[i].id == currentID) {
            currentTorneo = torneos[i];
        }
    }
    return (
        <div className="CreaRecursoCard">
            <h1 className="CenterAlign">
                Rellene unicamente los datos a modificar del torneo
            </h1>

            <div className="IncidenciaTop">
                <div className="InputStyle DataInput">
                    <input
                        required
                        type="text"
                        id="Name"
                        placeholder={currentTorneo.nombre}
                    />
                </div>
                <div className="InputStyle DataInput">
                    <input
                        required
                        type="text"
                        id="Institution"
                        placeholder={currentTorneo.institucion}
                    />
                </div>
            </div>
            <div className="IncidenciaTop">
                <div className="InputStyle DateInput">
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
                        {currentTorneo.categoria}
                    </option>

                    <option>Masculino</option>

                    <option>Femenino</option>
                </select>
            </div>
            <div className="IncidenciaTop">
                <div className="InputStyle DataInput">
                    <input
                        type="number"
                        id="Year"
                        placeholder={currentTorneo.anio}
                    />
                </div>
                <div className="InputStyle DataInput">
                    <input
                        required
                        type="text"
                        id="PhotoURL"
                        placeholder={currentTorneo.foto}
                    />
                </div>
            </div>
            <div className="IncidenciaTop">
                <select required id="Player1" name="Jugador1" className="mb-15">
                    <option disabled selected>
                        {currentTorneo.ganadores.jugador1 +
                            " y " +
                            currentTorneo.ganadores.jugador2}
                    </option>
                    {parejas.map((x) => {
                        return (
                            <option>
                                {jugadores[parseInt(x.IDjugador1) - 1].nombre + //Esto obviamente no es así pero con la peticion findbyID se hace muy facil
                                    " y " +
                                    jugadores[parseInt(x.IDjugador2) - 1]
                                        .nombre}
                            </option>
                        );
                    })}
                </select>
            </div>
            <button className="BotonConFondo">Crear Jugador</button>
            <Link to="/admin/recursos/torneos">
                <button className="SimpleButton">Cancelar</button>
            </Link>
        </div>
    );
}
