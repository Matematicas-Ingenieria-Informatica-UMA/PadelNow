import React from "react";
import { Link, useLocation } from "wouter";

import "../../style/CRUD/Recursos.css";

export default function Recursos() {
    const [location, setLocation] = useLocation();
    return (
        <>
            <div className="Recursos">
                <Link to={`${location}/player`}>
                    <button className="RecursosButton">Jugador</button>
                </Link>
                <Link to={`${location}/couple`}>
                    <button className="RecursosButton">Pareja</button>
                </Link>
                <Link to={`${location}/match`}>
                    <button className="RecursosButton">Partido</button>
                </Link>
                <Link to={`${location}/new`}>
                    <button className="RecursosButton">Noticia</button>
                </Link>
                <Link to={`${location}/tournament`}>
                    <button className="RecursosButton">Torneo</button>
                </Link>
                <Link to={`${location}/circuit`}>
                    <button className="RecursosButton">Circuito</button>
                </Link>
                <Link to="/admin/crud">
                    <button className="RecursosNoButton">Volver</button>
                </Link>
            </div>
        </>
    );
}
