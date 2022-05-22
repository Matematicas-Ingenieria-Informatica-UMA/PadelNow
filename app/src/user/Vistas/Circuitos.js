import React from "react";

import Circuito from "../Componentes/Circuito";

import "../style/Circuito.css";
import "../style/Circuitos.css";

export default function Circuitos() {
    return (
        <div className="Circuitos">
        <Circuito name ="World Padel Tour 2022" 
            torneo1name="Torne" torneo1contenido="Contenido1"
            torneo2name="Torne2" torneo2contenido="Contenido2"
            torneo3name="Torne3" torneo3contenido="Contenido3"
            torneo4name="Torneo" torneo4contenido="Contenido4"
        ></Circuito>
        <Circuito name ="World Padel Tour 2022" 
            torneo1name="Torne" torneo1contenido="Contenido1"
            torneo2name="Torne2" torneo2contenido="Contenido2"
            torneo3name="Torne3" torneo3contenido="Contenido3"
            torneo4name="Torneo" torneo4contenido="Contenido4"
        ></Circuito>
        </div>
    );
}
