import React from "react";
import "../style/Partido.css";
import "../style/Global.css";
import useTorneo from "../../shared/Torneo/useTorneo";
import { Link } from "react-router-dom";

export default function Partido({ partido }) {
    const { parejas, duracion, fase, resultado } = partido;
    const fecha = new Date(partido.fecha).toLocaleDateString("es-ES");
    const [pareja1, pareja2] = parejas;
    const [jugador11, jugador12] = pareja1.jugadores;
    const [jugador21, jugador22] = pareja2.jugadores;

    const resultados = resultado.split(/[/ ]+/);
    const { torneos } = useTorneo();

    const torneo = torneos.find((t) => {
        return t.partidos.find((p) => p === partido.id) !== null;
    });

    return (
        <button>
            <Link to={`/partidos/${partido.id}`}>
                <div className="PartidoCard">
                    <h2 className="LeftAlign">{torneo.nombre}</h2>

                    <div className="Titles">
                        <h4 className="Round">{fase}</h4>
                        <div className="Sets">
                            <h4>Set 1</h4>
                            <h4>Set 2</h4>
                            <h4>Set 3</h4>
                        </div>
                    </div>
                    <div className="SepHor"></div>

                    <div className="PartidoSection">
                        <div className="ParejaPartido">
                            <div className="JugadorPartido">
                                <img
                                    src={`https://flagcdn.com/256x192/${jugador11.pais}.png`}
                                    alt="BanderaPais"
                                    className="BanderaPais"
                                />
                                <h4>
                                    {jugador11.nombre +
                                        " " +
                                        jugador11.apellidos}
                                </h4>
                            </div>
                            <div className="JugadorPartido">
                                <img
                                    src={`https://flagcdn.com/256x192/${jugador12.pais}.png`}
                                    alt="BanderaPais"
                                    className="BanderaPais"
                                />
                                <h4>
                                    {jugador12.nombre +
                                        " " +
                                        jugador12.apellidos}
                                </h4>
                            </div>
                        </div>
                        <div className="Resultados">
                            <h1>{resultados[0]}</h1>
                            <h1>{resultados[2]}</h1>
                            <h1>{resultados[4]}</h1>
                        </div>
                    </div>
                    <div className="SepHor"></div>
                    <div className="PartidoSection">
                        <div className="ParejaPartido">
                            <div className="JugadorPartido">
                                <img
                                    src={`https://flagcdn.com/256x192/${jugador21.pais}.png`}
                                    alt="BanderaPais"
                                    className="BanderaPais"
                                />
                                <h4 className="NombreJugador">
                                    {jugador21.nombre +
                                        " " +
                                        jugador21.apellidos}
                                </h4>
                            </div>
                            <div className="JugadorPartido">
                                <img
                                    src={`https://flagcdn.com/256x192/${jugador22.pais}.png`}
                                    alt="BanderaPais"
                                    className="BanderaPais"
                                />
                                <h4>
                                    {jugador22.nombre +
                                        " " +
                                        jugador22.apellidos}
                                </h4>
                            </div>
                        </div>
                        <div className="Resultados">
                            <h1>{resultados[1]}</h1>
                            <h1>{resultados[3]}</h1>
                            <h1>{resultados[5]}</h1>
                        </div>
                    </div>
                    <div className="SepHor"></div>
                    <div className="Subtitles">
                        <h4>Tiempo de Partido</h4>
                        <h3>{duracion}</h3>

                        <h4>Fecha</h4>
                        <h4>{fecha}</h4>
                    </div>
                </div>
            </Link>
        </button>
    );
}
