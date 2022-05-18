import React from "react";
import { Link, useLocation } from "wouter";

import "../style/Recursos.css";

export default function Recursos() {
    const [location, setLocation] = useLocation();
    return (
        <>
            <div className="Recursos">
                <Link to={`${location}/jugador`}>
                    <button className="RecursosButton">Jugador</button>
                </Link>
                <Link to={`${location}/pareja`}>
                    <button className="RecursosButton">Pareja</button>
                </Link>
                <Link to={`${location}/noticia`}>
                    <button className="RecursosButton">Noticia</button>
                </Link>
                <Link to={`${location}/torneo`}>
                    <button className="RecursosButton">Torneo</button>
                </Link>
                <Link to={`${location}/circuito`}>
                    <button className="RecursosButton">Circuito</button>
                </Link>
                <Link to="/admin/crud">
                    <button className="RecursosNoButton">Volver</button>
                </Link>
            </div>
        </>
    );
}
