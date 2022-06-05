import React from "react";
import { Link } from "react-router-dom";
import "../style/Incidencia.css";
import "../style/Global.css";

export default function Incidencia() {
    return (
        <form
            action="mailto:naxetee.a.r@uma.es"
            method="post"
            enctype="text/plain"
            className="IncidenciaCard"
        >
            <h1 className="CenterAlign">Rellene sus datos</h1>

            <div className="IncidenciaTop">
                <div className="InputStyle DataInput">
                    <img src="/Mail.svg" alt="Email" />
                    <input type="text" name="Email" placeholder="Email" />
                </div>
                <div className="InputStyle DataInput">
                    <img src="/Profile.svg" alt="Profile" />
                    <input
                        type="text"
                        name="NameSurnames"
                        placeholder="Nombre y Apellidos"
                    />
                </div>
            </div>

            <div className="IncidenciaBottom">
                <div className="InputStyle">
                    <input
                        type="text"
                        name="Incidence"
                        placeholder="Explique brevemente su problema"
                        className="ProblemInput"
                    />
                </div>
            </div>

            <button type="submit" className="BotonConFondo">
                Enviar Incidencia
            </button>
            <Link to="/" className="SimpleButton">
                Volver
            </Link>
        </form>
    );
}
