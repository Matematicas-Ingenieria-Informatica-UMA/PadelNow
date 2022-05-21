import React from "react";
import { useState } from "react";
import { Link } from "wouter";
import "./Parejas.css";

export default function ParejaCRUD() {
    const [clase, setClase] = useState("ParejaNoDisplay");
    const [eliminar, setEliminar] = useState("ParejaCRUD");
    return (
        <div className={eliminar}>
            <div className="CRUDElements">
                <img
                    onClick={() => setEliminar("CRUDNoDisplay")}
                    src="/Delete.svg"
                    alt="Delete"
                    className="ButtonPlayer"
                 />
                <Link to="/admin/recursos/parejas/crear">
                    <img src="/Edit.svg" alt="Delete" className="ButtonPlayer" />
                </Link>
            </div>
            <div className="ParejaUp">
                <div className="PJugador1">
                    <div className="PFoto"></div>
                    <h1 className="PNombre">LEBRÓN</h1>
                </div>

                <div className="PosyEntrenador">
                    <div className="PRanking">
                        <h2 className="Almohadilla">#</h2>
                        <h1 className="Posicion">1</h1>
                        <div className="CompetiFoto"></div>
                    </div>
                    <div className="PEntrenador">
                        <h2 className="Entrenador">Entrenador:</h2>
                        <h2 className="PEntrenadorNombre">Jorge Martínez</h2>
                    </div>
                </div>

                <div className="PJugador2">
                    <div className="PFoto"></div>
                    <h1 className="PNombre">GALÁN</h1>
                </div>
            </div>
            <div className="PSepHor"></div>
            <h1 className="ParejaPuntos">34.250 pts.</h1>
        </div>
    );
}