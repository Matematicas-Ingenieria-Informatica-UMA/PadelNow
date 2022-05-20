import React from "react";
import { useState } from "react";

import "../style/Jugador.css";

export default function Jugador() {
    const [clase, setClase] = useState("JugadorNoDisplay");
    const [boton, setBoton] = useState("JugadorVerMas JugadorFont");

    return (
        <>
            <div className="Jugador">
                <img
                    src="https://www.worldpadeltour.com/media-content/2022/05/alejandra-salazar-bengoechea-c50aaf0cc5-220x260.JPG"
                    className="Imagen"
                    alt="ProfilePhoto"
                />
                <div>
                    <div className="JugadorSepHor"></div>
                    <h1 className="Nombre">ALEJANDRA SALAZAR BENGOECHEA</h1>
                    <div className="JugadorSepHor"></div>
                    <div className={clase}>
                        <div className="keyValue">
                            <h4>Nacimiento</h4>
                            <h3>31/12/1985</h3>
                        </div>
                        <div className="keyValue">
                            <h4>Nacionalidad</h4>
                            <h3>Española</h3>
                        </div>
                        <div className="keyValue">
                            <h4>Ciudad</h4>
                            <h3>Madrid</h3>
                        </div>
                        <div className="keyValue">
                            <h4>Ranking</h4>
                            <h3>1</h3>
                        </div>
                        <div className="keyValue">
                            <h4>Brazo Dominante</h4>
                            <h3>Diestra</h3>
                        </div>
                        <div className="keyValue">
                            <h4>Compañerx</h4>
                            <h3>Gemma Triay</h3>
                        </div>
                        <div className="keyValue">
                            <h4>Altura</h4>
                            <h3>1'68</h3>
                        </div>
                        <div className="keyValue">
                            <h4>Posición</h4>
                            <h3>Revés</h3>
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
