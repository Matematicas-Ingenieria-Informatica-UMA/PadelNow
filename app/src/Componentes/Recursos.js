import React from "react";
import { Link } from "wouter";

import "../style/Recursos.css";

export default function Recursos() {
    return (
        <>
            <div className="Recursos">
                <Link to="">
                    <button className="RecursosButton">Jugador</button>
                </Link>
                <Link to="">
                    <button className="RecursosButton">Pareja</button>
                </Link>
                <Link to="">
                    <button className="RecursosButton">Noticia</button>
                </Link>
                <Link to="">
                    <button className="RecursosButton">Torneo</button>
                </Link>
                <Link to="">
                    <button className="RecursosButton">Circuito</button>
                </Link>
                <Link to="/admin/crud">
                    <button className="RecursosNoButton">Volver</button>
                </Link>
            </div>
        </>
    );
}
