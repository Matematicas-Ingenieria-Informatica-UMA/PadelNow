import React from "react";
import { Link, useLocation } from "wouter";
import { datos } from "../../../BBDD/JugadoresBBDD";

import "../../style/CrearRecurso.css";
import "../../../user/style/Global.css";

export default function ModificarJugador(props) {
    const [location, setLocation] = useLocation();
    const playerID = parseInt(props.ID);

    const [dia, mes, anyo] = datos[playerID].nacimiento.split("/");
    return (
        <div className="CreaRecursoCard">
            <h1 className="CenterAlign">
                Rellene únicamente los datos del jugador a modificar
            </h1>
            <div className="IncidenciaTop">
                <div className="InputStyle DataInput">
                    <img src="/Profile.svg" alt="Profile" />
                    <input
                        type="text"
                        id="Name"
                        placeholder={datos[playerID].nombre}
                    />
                </div>
                <div className="InputStyle DataInput">
                    <input
                        type="text"
                        id="Surnames"
                        placeholder={datos[playerID].apellidos}
                    />
                </div>
            </div>
            <div className="IncidenciaTop">
                <div className="InputStyle DateInput">
                    <p className="m-0">Fecha de Nacimiento</p>
                    <input
                        type="date"
                        id="Birth"
                        value={`${anyo}-${mes}-${dia}`}
                    />
                </div>
                <select
                    name="Gender"
                    id="Gender"
                    className="DesplegableRecurso"
                >
                    <option disabled selected>
                        Selecciona el género ({datos[playerID].genero})
                    </option>

                    <option>Masculino</option>

                    <option>Femenino</option>
                </select>
            </div>
            <div className="IncidenciaTop">
                <div className="InputStyle DataInput">
                    <input
                        type="text"
                        id="Nationality"
                        placeholder={`Nacionalidad: (${datos[playerID].nacionalidad})`}
                    />
                </div>
                <div className="InputStyle DataInput">
                    <input
                        type="text"
                        id="City"
                        placeholder={`Ciudad: (${datos[playerID].ciudad})`}
                    />
                </div>
            </div>
            <div className="IncidenciaTop">
                <select
                    name="Dominant"
                    id="Dominant"
                    className="DesplegableRecurso"
                >
                    <option disabled selected>
                        Selecciona el brazo dominante (
                        {datos[playerID].brazodominante})
                    </option>

                    <option>Diestro</option>

                    <option>Zurdo</option>
                </select>
                <div className="InputStyle DataInput">
                    <input
                        type="text"
                        id="PhotoURL"
                        placeholder={`${datos[playerID].URL}`}
                    />
                </div>
            </div>
            <div className="IncidenciaTop">
                <div className="InputStyle DataInput">
                    <input
                        type="number"
                        id="ID"
                        placeholder={`ID: (${datos[playerID].id})`}
                    />
                </div>
                <select
                    name="Position"
                    id="Position"
                    className="DesplegableRecurso"
                >
                    <option disabled selected>
                        Selecciona la posición ({datos[playerID].posicion})
                    </option>

                    <option>Revés</option>

                    <option>Derecha</option>
                </select>
            </div>
            <button className="BotonConFondo">Modificar Jugador</button>
            <Link to="/admin/recursos/jugadores">
                <button className="SimpleButton">Cancelar</button>
            </Link>
        </div>
    );
}
