import React from "react";
import { Link } from "wouter";
import "../style/CrearJugador.css";
import "../style/Global.css";

export default function CrearJugador() {
    return (
        <div className="CrearJugadorCard">
            <h1 >Rellene los datos del jugador</h1>

            <div className="IncidenciaTop">
                <div className="InputStyle DataInput">
                    <img src="/Profile.svg" alt="Profile" />
                    <input
                        type="text"
                        id="NameSurnames"
                        placeholder="Nombre y Apellidos"
                    />
                </div>
            </div>
            <div className="IncidenciaTop">
                <div className="InputStyle DataInput">
                    <input
                        type="text"
                        id="Birth"
                        placeholder="Nacimiento"
                    />
                </div>
                <div className="InputStyle DataInput">
                    <input
                        type="text"
                        id="Nationality"
                        placeholder="Nacionalidad"
                    />
                </div>
            </div>
            <div className="IncidenciaTop">
                <div className="InputStyle DataInput">
                    <input
                        type="text"
                        id="City"
                        placeholder="Ciudad"
                    />
                </div>
                <div className="InputStyle DataInput">
                    <input
                        type="text"
                        id="Rank"
                        placeholder="Ranking"
                    />
                </div>
            </div>
            <div className="IncidenciaTop">
                <div className="InputStyle DataInput">
                    <input
                        type="text"
                        id="Dominant"
                        placeholder="Brazo dominante"
                    />
                </div>
                <div className="InputStyle DataInput">
                    <input
                        type="text"
                        id="Partner"
                        placeholder="Compañerx"
                    />
                </div>
            </div>
            <div className="IncidenciaTop">
                <div className="InputStyle DataInput">
                    <input
                        type="text"
                        id="Heigth"
                        placeholder="Altura"
                    />
                </div>
                <div className="InputStyle DataInput">
                    <input
                        type="text"
                        id="Position"
                        placeholder="Posicion"
                    />
                </div>
            </div>
            <button className="BotonConFondo">CrearJugador</button>
            <Link to="/">
                <button className="SimpleButton">Cancelar</button>
            </Link>
        </div>
    );
}
