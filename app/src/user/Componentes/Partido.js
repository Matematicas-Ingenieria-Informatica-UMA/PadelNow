import React from "react";
import { partidos } from "../../BBDD/PartidosBBDD";
import { torneos } from "../../BBDD/TorneosBBDD";
import "../style/Partido.css";
import "../style/Global.css";
import { jugadores } from "../../BBDD/JugadoresBBDD";
import { parejas } from "../../BBDD/ParejasBBDD";

export default function Partido(props) {
    let datos = partidos.find((x) => x.id === props.ID);
    let pareja1 = parejas.find((x) => x.id === datos.idPareja1);
    let pareja2 = parejas.find((x) => x.id === datos.idPareja2);
    let p1jugador1 = jugadores.find((x) => x.id === pareja1.IDjugador1);
    let p1jugador2 = jugadores.find((x) => x.id === pareja1.IDjugador2);
    let p2jugador1 = jugadores.find((x) => x.id === pareja2.IDjugador1);
    let p2jugador2 = jugadores.find((x) => x.id === pareja2.IDjugador2);
    let torneo = torneos.find((x) => x.id === datos.torneoID);
    let resultado = datos.resultado.split("/");
    return (
        <>
            <div className="PartidoCard">
                <h2 className="LeftAlign">{torneo.nombre}</h2>

                <div className="Titles">
                    <h4 className="Round">{datos.fase}</h4>
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
                                src={`https://flagcdn.com/256x192/${p1jugador1.nacionalidad}.png`}
                                alt="BanderaPais"
                                className="BanderaPais"
                            />
                            <h4>
                                {p1jugador1.nombre + " " + p1jugador1.apellidos}
                            </h4>
                        </div>
                        <div className="JugadorPartido">
                            <img
                                src={`https://flagcdn.com/256x192/${p1jugador2.nacionalidad}.png`}
                                alt="BanderaPais"
                                className="BanderaPais"
                            />
                            <h4>
                                {p1jugador2.nombre + " " + p1jugador2.apellidos}
                            </h4>
                        </div>
                    </div>
                    <div className="Resultados">
                        <h1>{resultado[0]}</h1>
                        <h1>{resultado[2]}</h1>
                        <h1>{resultado[4]}</h1>
                    </div>
                </div>
                <div className="SepHor"></div>
                <div className="PartidoSection">
                    <div className="ParejaPartido">
                        <div className="JugadorPartido">
                            <img
                                src={`https://flagcdn.com/256x192/${p2jugador1.nacionalidad}.png`}
                                alt="BanderaPais"
                                className="BanderaPais"
                            />
                            <h4 className="NombreJugador">
                                {p2jugador1.nombre + " " + p2jugador1.apellidos}
                            </h4>
                        </div>
                        <div className="JugadorPartido">
                            <img
                                src={`https://flagcdn.com/256x192/${p2jugador2.nacionalidad}.png`}
                                alt="BanderaPais"
                                className="BanderaPais"
                            />
                            <h4>
                                {p2jugador2.nombre + " " + p2jugador2.apellidos}
                            </h4>
                        </div>
                    </div>
                    <div className="Resultados">
                        <h1>{resultado[1]}</h1>
                        <h1>{resultado[3]}</h1>
                        <h1>{resultado[5]}</h1>
                    </div>
                </div>
                <div className="SepHor"></div>
                <div className="Subtitles">
                    <h4>Tiempo de Partido</h4>
                    <h3>{datos.tiempo}</h3>

                    <h4>Fecha</h4>
                    <h4>{datos.fecha}</h4>
                </div>
            </div>
        </>
    );
}
