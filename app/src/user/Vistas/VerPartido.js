import React from "react";
import { Link, useParams } from "react-router-dom";
import "../style/VerPartido.css";
import { Paises } from "../../assets/Paises";
import usePartido from "../../shared/Partido/usePartido.js";
import useTorneo from "../../shared/Torneo/useTorneo";

export default function VerPartido(props) {
    const { id: paramId } = useParams();
    const id = paramId || props.ID;
    const { partidos } = usePartido();
    const partido = partidos.find((x) => x.id == id);
    console.log(id, partido);
    const {
        parejas,
        duracion,
        fase,
        resultado,
        juezSilla,
        bolasDeBreaks,
        winners,
        smashes,
        erroresNoForzados,
        bolasDeOro,
    } = partido;
    const fecha = new Date(partido.fecha).toLocaleDateString("es-ES");
    const [pareja1, pareja2] = parejas;
    const [jugador1p1, jugador2p1] = pareja1.jugadores;
    const [jugador1p2, jugador2p2] = pareja2.jugadores;

    const resultados = resultado.split(/[/ ]+/);
    const breaks = bolasDeBreaks.split(" ");
    const winnersT = winners.split(" ");
    const smashesT = smashes.split(" ");
    const errors = erroresNoForzados.split(" ");
    const gold = bolasDeOro.split(" ");

    const { torneos } = useTorneo();
    const torneo = torneos.find((t) => {
        return t.partidos.find((p) => p === partido.id) !== null;
    });

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
                                src={jugador1p1.foto}
                                alt="FotoJugador"
                                className="FotoJugador"
                            ></img>{" "}
                        </Link>
                    </button>

                    <button>
                        <Link to={"/jugadores/" + jugador2p1.id}>
                            <img
                                src={jugador2p1.foto}
                                alt="FotoJugador"
                                className="FotoJugador"
                            ></img>{" "}
                        </Link>
                    </button>
                </div>
                <div className="Columna2">
                    <div className="ColumnaDatos">
                        <div className="FechayFase">
                            <h4>{fecha}</h4>
                            <h4>{fase}</h4>
                        </div>
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
                                    {resultados[0]}
                                </h1>

                                <h1>SET 1</h1>
                                <h1 className="JuegosPartido">
                                    {resultados[1]}
                                </h1>
                            </div>
                            <div className="Set">
                                <h1 className="JuegosPartido">
                                    {resultados[2]}
                                </h1>
                                <h1>SET 2</h1>
                                <h1 className="JuegosPartido">
                                    {resultados[3]}
                                </h1>
                            </div>
                            <div className="Set">
                                <h1 className="JuegosPartido">
                                    {resultados[4]}
                                </h1>
                                <h1>SET 3</h1>
                                <h1 className="JuegosPartido">
                                    {resultados[5]}
                                </h1>
                            </div>
                        </div>
                        <div className="SepHorDatos"></div>
                        <div className="EstadisticaDato">
                            <h2>{breaks[0]}</h2>
                            <h2>BREAK POINTS</h2>
                            <h2>{breaks[1]}</h2>
                        </div>
                        <div className="SepHorDatos"></div>
                        <div className="EstadisticaDato">
                            <h2>{winnersT[0]}</h2>
                            <h2>WINNERS</h2>
                            <h2>{winnersT[1]}</h2>
                        </div>
                        <div className="SepHorDatos"></div>
                        <div className="EstadisticaDato">
                            <h2>{smashesT[0]}</h2>
                            <h2>SMASHES</h2>
                            <h2>{smashesT[1]}</h2>
                        </div>
                        <div className="SepHorDatos"></div>
                        <div className="EstadisticaDato">
                            <h2>{errors[0]}</h2>
                            <h2>UNFORCED ERRORS</h2>
                            <h2>{errors[1]}</h2>
                        </div>
                        <div className="SepHorDatos"></div>
                        <div className="EstadisticaDato">
                            <h2>{gold[0]}</h2>
                            <h2>GOLD POINTS</h2>
                            <h2>{gold[1]}</h2>
                        </div>
                        <div className="SepHorDatos"></div>
                        <div className="EstadisticaDato">
                            <img
                                className="reloj"
                                src="https://images.emojiterra.com/google/noto-emoji/v2.034/512px/23f0.png"
                                alt="reloj"
                            ></img>
                            <h2>{duracion}</h2>
                            <img
                                className="reloj"
                                src="https://images.emojiterra.com/google/noto-emoji/v2.034/512px/23f0.png"
                                alt="reloj"
                            ></img>
                        </div>

                        <h3 className="Fase">{fase}</h3>
                        <h3 className="Juez">Juez de silla: {juezSilla}</h3>
                    </div>
                </div>
                <div className="ColumnaFoto">
                    <button>
                        <Link to={"/jugadores/" + jugador2p2.id}>
                            <img
                                src={jugador2p2.foto}
                                alt="FotoJugador"
                                className="FotoJugador"
                            ></img>{" "}
                        </Link>
                    </button>
                    <button>
                        <Link to={"/jugadores/" + jugador1p2.id}>
                            <img
                                src={jugador1p2.foto}
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
