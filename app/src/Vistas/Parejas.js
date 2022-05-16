import React from "react";
import Pareja from "../Componentes/Pareja.js";
import "../style/Parejas.css";

export default function Parejas() {
    return (
        <div className="Parejas">
            <div className="ParejasGenero">
                <Pareja></Pareja>
                <Pareja></Pareja>
                <Pareja></Pareja>
                <Pareja></Pareja>
            </div>
            <div className="ParejasGenero">
                <Pareja></Pareja>
                <Pareja></Pareja>
                <Pareja></Pareja>
                <Pareja></Pareja>
            </div>
        </div>
    );
}
