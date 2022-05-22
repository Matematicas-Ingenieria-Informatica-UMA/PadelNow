import React from "react";

import JugadorCRUD from "./JugadorCRUD";
import Generos from "../../../user/Componentes/Generos";
import { jugadores } from "../../../BBDD/JugadoresBBDD";

import "./Jugadores.css";
import { Link, useLocation } from "wouter";

export default function JugadorAdmin() {
    const [location, setLocation] = useLocation();
    return (
        <>
            <Generos />
            <div className="BotonesAdmin">
                <Link to={`${location}/crear`}>
                    <button className="mt-15 BotonConFondo">
                        Nuevo Jugador
                    </button>
                </Link>
                <Link to="/admin/recursos">
                    <button className="mt-15 BotonConFondo">Volver</button>
                </Link>
            </div>
            <div className="Jugadores">
                <div className="JugadoresGenero">
                    {jugadores.map((x) => {
                        if (x.genero === "Masculino") {
                            return <JugadorCRUD ID={x.id}></JugadorCRUD>;
                        }
                    })}
                </div>
                <div className="JugadoresGenero">
                    {jugadores.map((x) => {
                        if (x.genero === "Femenino") {
                            return <JugadorCRUD ID={x.id}></JugadorCRUD>;
                        }
                    })}
                </div>
            </div>
            <Link to="/admin/recursos">
                <button className="mt-15 mb-15 SimpleButton">Volver</button>
            </Link>
        </>
    );
}
