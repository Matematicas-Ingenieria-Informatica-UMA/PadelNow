import React from "react";
import "../style/Generos.css";

export default function Generos() {
    return (
        <>
            <div className="Generos">
                <img src="/Masc.svg" alt="Masculino" />
                <div className="SepVertGeneros"> </div>
                <img src="/Fem.svg" alt="Femenino" />
            </div>
        </>
    );
}
