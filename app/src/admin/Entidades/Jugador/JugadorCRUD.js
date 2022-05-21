import React from "react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

import "./Jugadores.css";
import "../../style/Recursos.css"

export default function JugadorCRUD() {
    const [clase, setClase] = useState("JugadorNoDisplay");
    const [eliminar, setEliminar] = useState("Jugador");
    const [boton, setBoton] = useState("JugadorVerMas JugadorFont");
    const [location, setLocation] = useLocation();
    const datos = {
        id: 1,
        nombre: "Alejandra",
        apellidos: "Salazar Bengoechea",
        nacimiento: "31/12/1985",
        nacionalidad: "España",
        ciudad: "Madrid",
        ranking: 1,
        brazodominante: "Diestro",
        compañerx: "Gemma Triay",
        altura: 1.68,
        posicion: "Revés",
        URL: "https://www.worldpadeltour.com/media-content/2022/05/alejandra-salazar-bengoechea-c50aaf0cc5-220x260.JPG"
    };
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
                    <Link to={`${location}/modificar/${datos.id}`}>
                        <img
                            src="/Edit.svg"
                            alt="Delete"
                            className="ButtonPlayer"
                        />
                    </Link>
                </div>
                <img
                    src={`${datos.URL}`}
                    className="Imagen"
                    alt="ProfilePhoto"
                />
                <div>
                    <div className="mt-15 JugadorSepHor"></div>
                    <h1 className="Nombre">
                        {datos.nombre.toUpperCase() +
                            " " +
                            datos.apellidos.toUpperCase()}
                    </h1>
                    <div className="mb-15 JugadorSepHor"></div>
                    <div className={clase}>
                        <div className="keyValue">
                            <h4>Nacimiento</h4>
                            <h3>{datos.nacimiento}</h3>
                        </div>
                        <div className="keyValue">
                            <h4>Nacionalidad</h4>
                            <h3>{datos.nacionalidad}</h3>
                        </div>
                        <div className="keyValue">
                            <h4>Ciudad</h4>
                            <h3>{datos.ciudad}</h3>
                        </div>
                        <div className="keyValue">
                            <h4>Ranking</h4>
                            <h3>{datos.ranking}</h3>
                        </div>
                        <div className="keyValue">
                            <h4>Brazo Dominante</h4>
                            <h3>{datos.brazodominante}</h3>
                        </div>
                        <div className="keyValue">
                            <h4>Compañerx</h4>
                            <h3>{datos.compañerx}</h3>
                        </div>
                        <div className="keyValue">
                            <h4>Altura</h4>
                            <h3>{datos.altura}</h3>
                        </div>
                        <div className="keyValue">
                            <h4>Posición</h4>
                            <h3>{datos.posicion}</h3>
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
