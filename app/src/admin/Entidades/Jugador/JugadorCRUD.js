import React from "react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { datos } from "../../../BBDD/JugadoresBBDD";

import "./Jugadores.css";
import "../../style/Recursos.css";

export default function JugadorCRUD(props) {
    const playerID = parseInt(props.ID);
    const [clase, setClase] = useState("JugadorNoDisplay");
    const [eliminar, setEliminar] = useState("Jugador");
    const [boton, setBoton] = useState("JugadorVerMas JugadorFont");
    const [location, setLocation] = useLocation();

    return (
        <>
            <div className={eliminar}>
                <div className="CRUDElements">
                    <img
                        onClick={() => setEliminar("CRUDNoDisplay")}
                        src="/Delete.svg"
                        alt="Delete"
                        className="ButtonPlayer"
                    />
                    <Link to={`${location}/modificar/${datos[playerID].id}`}>
                        <img
                            src="/Edit.svg"
                            alt="Delete"
                            className="ButtonPlayer"
                        />
                    </Link>
                </div>
                <img
                    src={`${datos[playerID].URL}`}
                    className="Imagen"
                    alt="ProfilePhoto"
                />
                <div>
                    <div className="mt-15 JugadorSepHor"></div>
                    <h1 className="Nombre">
                        {datos[playerID].nombre.toUpperCase() +
                            " " +
                            datos[playerID].apellidos.toUpperCase()}
                    </h1>
                    <div className="mb-15 JugadorSepHor"></div>
                    <div className={clase}>
                        <div className="keyValue">
                            <h4>Nacimiento</h4>
                            <h3>{datos[playerID].nacimiento}</h3>
                        </div>
                        <div className="keyValue">
                            <h4>Nacionalidad</h4>
                            <h3>{datos[playerID].nacionalidad}</h3>
                        </div>
                        <div className="keyValue">
                            <h4>Ciudad</h4>
                            <h3>{datos[playerID].ciudad}</h3>
                        </div>
                        <div className="keyValue">
                            <h4>Ranking</h4>
                            <h3>{datos[playerID].ranking}</h3>
                        </div>
                        <div className="keyValue">
                            <h4>Brazo Dominante</h4>
                            <h3>{datos[playerID].brazodominante}</h3>
                        </div>
                        <div className="keyValue">
                            <h4>Compañerx</h4>
                            <h3>{datos[playerID].compañerx}</h3>
                        </div>
                        <div className="keyValue">
                            <h4>Altura</h4>
                            <h3>{datos[playerID].altura}</h3>
                        </div>
                        <div className="keyValue">
                            <h4>Posición</h4>
                            <h3>{datos[playerID].posicion}</h3>
                        </div>
                        <button
                            className="JugadorVerMas JugadorFont"
                            onClick={() => {
                                setClase("JugadorNoDisplay");
                                setBoton("JugadorVerMas JugadorFont");
                            }}
                        >
                            Ver Menos
                        </button>
                    </div>
                    <button
                        className={boton}
                        onClick={() => {
                            setClase("JugadorFont");
                            setBoton("JugadorNoDisplay");
                        }}
                    >
                        Ver Más
                    </button>
                </div>
            </div>
        </>
    );
}
