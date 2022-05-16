import React from "react";
import Jugador from "../Componentes/Jugador";
import "../style/Jugadores.css";

export default function Jugadores() {
    return (
        <div className="Jugadores">
            <div className="JugadoresGenero">
                <Jugador></Jugador>
                <Jugador></Jugador>
                <Jugador></Jugador>
                <Jugador></Jugador>
            </div>
            <div className="JugadoresGenero">
                <Jugador></Jugador>
                <Jugador></Jugador>
                <Jugador></Jugador>
            </div>
        </div>
    );
}
