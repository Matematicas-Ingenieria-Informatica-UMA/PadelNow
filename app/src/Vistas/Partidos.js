import React from "react";
import Partido from "../Componentes/Partido.js";
import "../style/Partidos.css";

export default function Partidos() {
    return (
        <div className="Partidos">
            <div className="PartidosGenero">
                <Partido></Partido>
                <Partido></Partido>
                <Partido></Partido>
                <Partido></Partido>
            </div>
            <div className="PartidosGenero">
                <Partido></Partido>
                <Partido></Partido>
                <Partido></Partido>
                <Partido></Partido>
            </div>
        </div>
    );
}
