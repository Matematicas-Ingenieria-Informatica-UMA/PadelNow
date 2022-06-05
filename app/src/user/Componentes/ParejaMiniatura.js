import React from "react";
import { Link } from "react-router-dom";
import "../style/Pareja.css";

export default function ParejaMiniatura({ pareja, ranking }) {
    const [jugador1, jugador2] = pareja.jugadores;

    return (
        <Link to={`/parejas/${pareja.id}`}>
            <button className="Pareja">
                <div className="ParejaUp">
                    <div className="PJugador1">
                        <div className="PFoto">
                            <img
                                src={`${jugador1.foto}`}
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
                            <h1 className="Posicion">
                                {ranking ? ranking : 1}
                            </h1>
                            <div className="CompetiFoto"></div>
                        </div>
                        <h2 className="Entrenador">Entrenador:</h2>
                        <h2 className="PEntrenadorNombre">
                            {pareja.entrenador}
                        </h2>
                    </div>

                    <div className="PJugador2">
                        <div className="PFoto">
                            <img
                                src={`${jugador2.foto}`}
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
                <h1 className="ParejaPuntos">{pareja.puntos} pts.</h1>
            </button>{" "}
        </Link>
    );
}
