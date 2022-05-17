import React from "react";
import { useState } from "react";

import "../style/Jugador.css";

export default function Jugador() {
    const [miniatura, setMiniatura] = useState("Tabla");
    return (
        <>
            <div className="Jugador">
                <div className="Imagen"></div>
                <div className="Datos">
                    <h1 className="Nombre">ALEJANDRA SALAZAR BENGOECHEA</h1>
                    <div className="{miniatura} JugadorFont">
                        <div className="JugadorSepHor"></div>
                        <h4>Fecha de Nacimiento</h4>
                        <h3>31 de diciembre de 1985</h3>
                        <h4>Nacionalidad</h4>
                        <h3>Española</h3>
                        <h4>Ciudad</h4>
                        <h3>Madrid</h3>
                        <h4>Ranking</h4>
                        <h3>1</h3>
                        <h4>Brazo Dominante</h4>
                        <h3>Diestra</h3>
                        <h4>Compañerx</h4>
                        <h3>Gemma Triay</h3>
                        <h4>Altura</h4>
                        <h3>1'68</h3>
                        <h4>Posición</h4>
                        <h3>Revés</h3>
                        <button className="JugadorFont">Ver Menos</button>
                    </div>
                    <button
                        className="JugadorVerMas JugadorFont"
                        onClick={() => {
                            setMiniatura("JugadorDisplay Tabla");
                        }}
                    >
                        Ver Más
                    </button>
                </div>
            </div>
        </>
    );
}
