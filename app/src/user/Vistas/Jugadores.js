import React from "react";
import { jugadores } from "../../BBDD/JugadoresBBDD";

import Jugador from "../Componentes/Jugador";

import "../style/Jugadores.css";

export default function Jugadores() {
    return (
        <div className="Jugadores">
            <div className="JugadoresGenero">
                {jugadores.map((x) => {
                    if (x.genero === "Masculino") {
                        return <Jugador ID={x.id}></Jugador>;
                    }
                })}
            </div>
            <div className="JugadoresGenero">
                {jugadores.map((x) => {
                    if (x.genero === "Femenino") {
                        return <Jugador ID={x.id}></Jugador>;
                    }
                })}
            </div>
        </div>
    );
}
