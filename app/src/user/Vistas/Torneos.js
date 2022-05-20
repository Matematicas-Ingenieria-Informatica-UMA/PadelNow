import React from "react";
import Torneo from "../Componentes/Torneo";
import "../style/Torneos.css";

export default function Parejas() {
    return (
        <div className="Torneos">
            <div className="TorneoGenero">
                <Torneo></Torneo>
                <Torneo></Torneo>
                <Torneo></Torneo>
                <Torneo></Torneo>
            </div>
            <div className="TorneoGenero">
                <Torneo></Torneo>
                <Torneo></Torneo>
                <Torneo></Torneo>
                <Torneo></Torneo>
            </div>
        </div>
    );
}
