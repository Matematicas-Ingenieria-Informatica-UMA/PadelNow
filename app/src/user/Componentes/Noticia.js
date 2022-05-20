import React from "react";
import "../style/Noticia.css";

export default function Noticia() {
    return (
        <>
            <div className="Noticia">
                <h1 className="NoticiaTitle TextColorWhite">
                    Los 3 Mejores Puntos Femeninos del Circus Brussels Padel
                    Open 2022
                </h1>
                <h4 className="Subtitle TextColorWhite">
                    ADESLAS patrocina los 3 Mejores Puntos Femeninos del Circus
                    Brussels Padel Open 2022
                </h4>
                <div className="Date">
                    <img
                        className="Calendar"
                        src="/Calendar.svg"
                        alt="Calendar"
                    />
                    <h4 className="TextColorWhite">09/05/2022</h4>
                </div>
                <img
                    src="https://www.worldpadeltour.com/media-content/2022/05/beatriz_gonzalez_cuartos_bruselas_open_2022_gpv_6650-1170x658.jpg"
                    alt="Noticia"
                />
                <p className="Content TextColorWhite">
                    Bruselas recibía a las mejores palas del planeta para
                    celebrar el Circus Brussels Padel Open 2022. Las jugadoras
                    dejarían actuaciones extraordinarias dentro del Corazón
                    Azul. Las protagonistas con estas inolvidables jugadas
                    afirmarían que en World Padel Tour no hay imposibles.
                    Alejandra Salazar, Bea González y Patri LLaguno serían
                    artífices de unos puntazos que enloquecerían al público de
                    Bruselas.
                </p>
                <p className="Content TextColorWhite">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse egestas euismod orci, ac sollicitudin ipsum
                    consectetur in. Pellentesque habitant morbi tristique
                    senectus et netus et malesuada fames ac turpis egestas.
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos.
                </p>
            </div>
        </>
    );
}
