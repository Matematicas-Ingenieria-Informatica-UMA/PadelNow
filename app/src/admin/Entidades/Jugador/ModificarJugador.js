import React from "react";
import { Link, useLocation, useRoute } from "wouter";

import "../../style/CrearRecurso.css";
import "../../../user/style/Global.css";

export default function ModificarJugador(props) {
    const [location, setLocation] = useLocation();
    const id = location.split("/").pop();
    const datos = {
        id: id,
        nombre: "Alejandra",
        apellidos: "Salazar Bengoechea",
        nacimiento: "31/12/1985",
        genero: "Femenino",
        nacionalidad: "España",
        ciudad: "Madrid",
        ranking: 1,
        brazodominante: "Diestro",
        compañerx: "Gemma Triay",
        altura: 1.68,
        posicion: "Revés",
    };

    const [dia, mes, anyo] = datos.nacimiento.split("/");
    return (
        <div className="CreaRecursoCard">
            <h1 className="CenterAlign">
                Rellene únicamente los datos del jugador a modificar
            </h1>
            <div className="IncidenciaTop">
                <div className="InputStyle DataInput">
                    <img src="/Profile.svg" alt="Profile" />
                    <input
                        required
                        type="text"
                        id="Name"
                        placeholder={datos.nombre}
                    />
                </div>
                <div className="InputStyle DataInput">
                    <input
                        required
                        type="text"
                        id="Surnames"
                        placeholder={datos.apellidos}
                    />
                </div>
            </div>
            <div className="IncidenciaTop">
                <div className="InputStyle DateInput">
                    <p className="m-0">Fecha de Nacimiento</p>
                    <input
                        required
                        type="date"
                        id="Birth"
                        value={`${anyo}-${mes}-${dia}`}
                    />
                </div>
                <select
                    required
                    name="Gender"
                    id="Gender"
                    className="DesplegableRecurso"
                >
                    <option disabled selected>
                        Selecciona el género ({datos.genero})
                    </option>

                    <option>Masculino</option>

                    <option>Femenino</option>
                </select>
            </div>
            <div className="IncidenciaTop">
                <div className="InputStyle DataInput">
                    <input
                        required
                        type="text"
                        id="Nationality"
                        placeholder={`Nacionalidad: (${datos.nacionalidad})`}
                    />
                </div>
                <div className="InputStyle DataInput">
                    <input
                        required
                        type="text"
                        id="City"
                        placeholder={`Ciudad: (${datos.ciudad})`}
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
                        Selecciona el brazo dominante ({datos.brazodominante})
                    </option>

                    <option>Diestro</option>

                    <option>Zurdo</option>
                </select>
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
                <div className="InputStyle DataInput">
                    <input
                        required
                        type="number"
                        id="ID"
                        placeholder={`ID: (${datos.id})`}
                    />
                </div>
                <select
                    name="Position"
                    id="Position"
                    className="DesplegableRecurso"
                >
                    <option disabled selected>
                        Selecciona la posición ({datos.posicion})
                    </option>

                    <option>Revés</option>

                    <option>Derecha</option>
                </select>
            </div>
            <button className="BotonConFondo">Crear Jugador</button>
            <Link to="/admin/recursos/jugadores">
                <button className="SimpleButton">Cancelar</button>
            </Link>
        </div>
    );
}
