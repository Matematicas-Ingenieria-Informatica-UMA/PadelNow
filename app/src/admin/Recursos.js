import React from "react";
import { Link, useLocation } from "wouter";

import "./style/Recursos.css";

export default function Recursos() {
    const [location, setLocation] = useLocation();
    return (
        <>
            <div className="Recursos">
                <Link to={`${location}/jugadores`}>
                    <button className="RecursosButton">Jugador</button>
                </Link>
                <Link to={`${location}/parejas`}>
                    <button className="RecursosButton">Pareja</button>
                </Link>
                <Link to={`${location}/partidos`}>
                    <button className="RecursosButton">Partido</button>
                </Link>
                <Link to={`${location}/noticias`}>
                    <button className="RecursosButton">Noticia</button>
                </Link>
                <Link to={`${location}/torneos`}>
                    <button className="RecursosButton">Torneo</button>
                </Link>
                <Link to={`${location}/circuitos`}>
                    <button className="RecursosButton">Circuito</button>
                </Link>
                <Link to={`${location}/instituciones`}>
                    <button className="RecursosButton">Institución</button>
                </Link>
                <Link to="/admin">
                    <button className="RecursosNoButton">Volver</button>
                </Link>
            </div>
        </>
    );
}
