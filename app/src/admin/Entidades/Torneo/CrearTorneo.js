import React from "react";
import { Link } from "wouter";
import { jugadores } from "../../../BBDD/JugadoresBBDD";
import { parejas } from "../../../BBDD/ParejasBBDD";

import "../../style/CrearRecurso.css";
import "../../../user/style/Global.css";

export default function CrearTorneo() {
    return (
        <div className="CreaRecursoCard">
            <h1 className="CenterAlign">Rellene los datos del torneo</h1>

            <div className="IncidenciaTop">
                <div className="InputStyle DataInput">
                    <input
                        required
                        type="text"
                        id="Name"
                        placeholder="Nombre"
                    />
                </div>
                <div className="InputStyle DataInput">
                    <input
                        required
                        type="text"
                        id="Institution"
                        placeholder="Institución"
                    />
                </div>
            </div>
            <div className="IncidenciaTop">
                <div className="InputStyle DateInput">
                    <input
                        required
                        type="text"
                        id="Initial"
                        placeholder="Fase Inicial"
                    />
                </div>
                <select
                    required
                    name="Gender"
                    id="Gender"
                    className="DesplegableRecurso"
                >
                    <option disabled selected>
                        Selecciona la categoría
                    </option>

                    <option>Masculino</option>

                    <option>Femenino</option>
                </select>
            </div>
            <div className="IncidenciaTop">
                <div className="InputStyle DataInput">
                    <input type="number" id="Year" placeholder="Año" />
                </div>
                <div className="InputStyle DataInput">
                    <input
                        required
                        type="text"
                        id="PhotoURL"
                        placeholder="URL de la foto"
                    />
                </div>
            </div>
            <div className="IncidenciaTop">
                <select required id="Player1" name="Jugador1" className="mb-15">
                    <option disabled selected>
                        Selecciona la pareja ganadora{" "}
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
