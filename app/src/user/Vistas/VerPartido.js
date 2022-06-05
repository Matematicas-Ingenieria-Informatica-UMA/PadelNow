import React from "react";
import { Link, useParams } from "react-router-dom";
import "../style/VerPartido.css";
import { paises } from "../../assets/Paises";
import usePareja from "../../shared/Pareja/usePareja.js";
import useJugador from "../../shared/Jugador/useJugador.js";
import usePartido from "../../shared/Partido/usePartido.js";
import Partido from "../Componentes/Partido";

export default function VerPartido(props) {
    const { id: paramId } = useParams();
    const id = paramId || props.ID;
    const { partidos } = usePartido();
    const partido = partidos.find((x) => x.id === id);

    const { parejas } = usePareja();
    const pareja1 = parejas.find((x) => x.id === partido.idPareja1);
    const pareja2 = parejas.find((x) => x.id === partido.idPareja2);

    const { jugadores } = useJugador();
    const jugador1p1 = jugadores.find((x) => pareja1.IDjugador1 === x.id);
    const jugador2p1 = jugadores.find((x) => pareja1.IDjugador2 === x.id);

    const jugador1p2 = jugadores.find((x) => pareja2.IDjugador1 === x.id);
    const jugador2p2 = jugadores.find((x) => pareja2.IDjugador2 === x.id);

    const resultado = partido.resultado.split("/");

    return (
        <>
            <div className="PistaPadel">
                <div className="LineaExtra"></div>
                <div className="LineaVer"></div>
                <div className="LineaHor"></div>
                <div className="LineaVer"></div>
                <div className="LineaHor"></div>
                <div className="LineaVer"></div>
                <div className="LineaExtra"></div>
            </div>
            <div className="ResultadoPartido">
                <div className="ColumnaFoto">
                    <button>
                        <Link to={"/jugadores/" + jugador1p1.id}>
                            <img
                                src={jugador1p1.URL}
                                alt="FotoJugador"
                                className="FotoJugador"
                            ></img>{" "}
                        </Link>
                    </button>

                    <button>
                        <Link to={"/jugadores/" + jugador2p1.id}>
                            <img
                                src={jugador2p1.URL}
                                alt="FotoJugador"
                                className="FotoJugador"
                            ></img>{" "}
                        </Link>
                    </button>
                </div>
                <div className="Columna2">
                    <div className="ColumnaDatos">
                        <div className="TituloDatos">
                            <img
                                src="https://assets.stickpng.com/images/580b585b2edbce24c47b2b90.png"
                                className="PelotaResultado"
                                alt="Pelota tenis"
                            ></img>
                            <h1>Datos del partido</h1>
                            <img
                                src="https://assets.stickpng.com/images/580b585b2edbce24c47b2b90.png"
                                className="PelotaResultado"
                                alt="Pelota tenis"
                            ></img>
                        </div>
                        <div className="SepHorDatos"></div>
                        <div className="ResultadoTotal">
                            <div className="Set">
                                <h1 className="JuegosPartido">
                                    {resultado[0]}
                                </h1>

                                <h1>SET 1</h1>
                                <h1 className="JuegosPartido">
                                    {resultado[1]}
                                </h1>
                            </div>
                            <div className="Set">
                                <h1 className="JuegosPartido">
                                    {resultado[2]}
                                </h1>
                                <h1>SET 2</h1>
                                <h1 className="JuegosPartido">
                                    {resultado[3]}
                                </h1>
                            </div>
                            <div className="Set">
                                <h1 className="JuegosPartido">
                                    {resultado[4]}
                                </h1>
                                <h1>SET 3</h1>
                                <h1 className="JuegosPartido">
                                    {resultado[5]}
                                </h1>
                            </div>
                        </div>
                        <div className="SepHorDatos"></div>
                        <div className="EstadisticaDato">
                            <h2>{partido.breaks[0]}</h2>
                            <h2>BREAK POINTS</h2>
                            <h2>{partido.breaks[1]}</h2>
                        </div>
                        <div className="SepHorDatos"></div>
                        <div className="EstadisticaDato">
                            <h2>{partido.winners[0]}</h2>
                            <h2>WINNERS</h2>
                            <h2>{partido.winners[1]}</h2>
                        </div>
                        <div className="SepHorDatos"></div>
                        <div className="EstadisticaDato">
                            <h2>{partido.smashes[0]}</h2>
                            <h2>SMASHES</h2>
                            <h2>{partido.smashes[1]}</h2>
                        </div>
                        <div className="SepHorDatos"></div>
                        <div className="EstadisticaDato">
                            <h2>{partido.errors[0]}</h2>
                            <h2>UNFORCED ERRORS</h2>
                            <h2>{partido.errors[1]}</h2>
                        </div>
                        <div className="SepHorDatos"></div>
                        <div className="EstadisticaDato">
                            <h2>{partido.gold[0]}</h2>
                            <h2>GOLD POINTS</h2>
                            <h2>{partido.gold[1]}</h2>
                        </div>
                        <div className="SepHorDatos"></div>
                        <div className="EstadisticaDato">
                            <img
                                className="reloj"
                                src="https://images.emojiterra.com/google/noto-emoji/v2.034/512px/23f0.png"
                                alt="reloj"
                            ></img>
                            <h2>{partido.tiempo}</h2>
                            <img
                                className="reloj"
                                src="https://images.emojiterra.com/google/noto-emoji/v2.034/512px/23f0.png"
                                alt="reloj"
                            ></img>
                        </div>

                        <h3 className="Fase">{partido.fase}</h3>
                        <h3 className="Juez">
                            Juez de silla: {partido.juezSilla}
                        </h3>
                    </div>
                </div>
                <div className="ColumnaFoto">
                    <button>
                        <Link to={"/jugadores/" + jugador2p2.id}>
                            <img
                                src={jugador2p2.URL}
                                alt="FotoJugador"
                                className="FotoJugador"
                            ></img>{" "}
                        </Link>
                    </button>
                    <button>
                        <Link to={"/jugadores/" + jugador1p2.id}>
                            <img
                                src={jugador1p2.URL}
                                alt="FotoJugador"
                                className="FotoJugador"
                            ></img>{" "}
                        </Link>
                    </button>
                </div>
            </div>
            <div className="SepHor"></div>
        </>
    );
}
