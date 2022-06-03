import React from "react";
import {Link} from "react-router-dom";
import {jugadores} from "../../../BBDD/JugadoresBBDD";
import {parejas} from "../../../BBDD/ParejasBBDD";

import "../../style/CrearRecurso.css";
import "../../../user/style/Global.css";

export default function CrearTorneo() {
    return (
        <>
            <h1 className="TituloAdmin">PadelNow - CREAR Torneo</h1>
            <div className="CreaRecursoCard">
                <h1 className="CenterAlign">Rellene los datos del torneo</h1>

                <div className="IncidenciaTop">
                    <div className="InputStyle DataInput">
                        <input required type="text" id="id" placeholder="ID"/>
                    </div>
                    <div className="InputStyle DataInput">
                        <input required type="text" id="Name" placeholder="Nombre"/>
                    </div>
                </div>
                <div className="IncidenciaTop">
                    <div className="InputStyle">
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
                        <input type="number" id="Year" placeholder="Año"/>
                    </div>
                    <select
                        required
                        id="Player1"
                        name="Jugador1"
                        className="DesplegableRecurso"
                    >
                        <option disabled selected>
                            Selecciona la pareja ganadora{" "}
                        </option>
                        {parejas.map((x) => {
                            return (
                                <option>
                                    {jugadores.find((y) => x.IDjugador1 === y.id).nombre +
                                        " y " +
                                        jugadores.find((y) => x.IDjugador2 === y.id).nombre}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <h1 className="CenterAlign">Rellene los datos de la institucion</h1>
                <div className="IncidenciaTop">
                    <div className="InputStyle DataInput">
                        <input
                            required
                            type="text"
                            id="institucionNombre"
                            placeholder="Nombre"
                        />
                    </div>
                    <div className="InputStyle DataInput">
                        <input
                            required
                            type="text"
                            id="institucionOrg"
                            placeholder="Organizador"
                        />
                    </div>
                </div>
                <div className="IncidenciaTop">
                    <div className="InputStyle">
                        <input required type="text" id="sede" placeholder="Sede"/>
                    </div>
                    <select required id="international" className="DesplegableRecurso">
                        <option disabled selected>
                            ¿Es internacional?
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
                            placeholder="Año de fundación"
                        />
                    </div>
                    <div className="InputStyle DataInput">
                        <input
                            required
                            type="text"
                            id="URLPhoto"
                            placeholder="URL de la foto"
                        />
                    </div>
                </div>
                <button className="BotonConFondo">Crear Torneo</button>
                <Link to="/admin/recursos/torneos" className="SimpleButton">
                    Cancelar
                </Link>
            </div>
        </>
    );
}
