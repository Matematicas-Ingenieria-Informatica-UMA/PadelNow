import React from "react";
import "../style/Miniatura.css";

export default function Miniatura() {
    return (
        <div className="Miniatura">
            <img
                className="FotoMini"
                src="https://www.worldpadeltour.com/media-content/2022/05/beatriz_gonzalez_cuartos_bruselas_open_2022_gpv_6650-1170x658.jpg"
                alt="Noticia"
            />
            <h4 className="TituloMini">
                Los 3 Mejores Puntos Femeninos 2022 del Circus Brussels...
            </h4>
        </div>
    );
}
