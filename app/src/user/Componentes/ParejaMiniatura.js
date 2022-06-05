import React from "react";
import useJugador from "../../shared/Jugador/useJugador";
import usePareja from "../../shared/Pareja/usePareja";

import "../style/Pareja.css";

export default function ParejaMiniatura(props) {
    const { jugadores } = useJugador();
    const { parejas } = usePareja();
    const pareja = parejas.find((x) => x.id === props.ID);
    const jugador1 = jugadores.find((x) => x.id === pareja.IDjugador1);
    const jugador2 = jugadores.find((x) => x.id === pareja.IDjugador2);

    console.log(jugador1, jugador2);

    return (
        <div className="Pareja">
            <div className="ParejaUp">
                <div className="PJugador1">
                    <div className="PFoto">
                        <img
                            src={`${jugador1.URL}`}
                            className="Imagen"
                            alt="ProfilePhoto"
                        />
                    </div>
                    <h1 className="PNombre">
                        {jugador1.apellidos.split(" ")[0].toUpperCase()}
                    </h1>
                </div>

                <div className="PosyEntrenador">
                    <div className="PRanking">
                        <h2 className="Almohadilla">#</h2>
                        <h1 className="Posicion">{pareja.TopRanking}</h1>
                        <div className="CompetiFoto"></div>
                    </div>
                    <h2 className="Entrenador">Entrenador:</h2>
                    <h2 className="PEntrenadorNombre">{pareja.Entrenador}</h2>
                </div>

                <div className="PJugador2">
                    <div className="PFoto">
                        <img
                            src={`${jugador2.URL}`}
                            className="Imagen"
                            alt="ProfilePhoto"
                        />
                    </div>
                    <h1 className="PNombre">
                        {jugador2.apellidos.split(" ")[0].toUpperCase()}
                    </h1>
                </div>
            </div>
            <div className="PSepHor"></div>
            <h1 className="ParejaPuntos">{pareja.Puntos} pts.</h1>
        </div>
    );
}
