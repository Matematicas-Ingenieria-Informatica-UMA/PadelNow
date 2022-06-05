import React from "react";
import { Link, useParams } from "react-router-dom";
import useJugador from "../../shared/Jugador/useJugador.js";
import "../style/VerJugador.css";
import { paises } from "../../assets/paises";
import usePareja from "../../shared/Pareja/usePareja.js";
import usePartido from "../../shared/Partido/usePartido.js";
import Partido from "../Componentes/Partido";

export default function VerJugador(props) {
    const { id: paramId } = useParams();
    const id = paramId || props.ID;
    const { jugadores } = useJugador();
    const jugador = jugadores.find((x) => x.id === id);
    const { parejas } = usePareja();
    const { partidos } = usePartido();

    const parejaformada = parejas.find(
        (x) => x.IDjugador1 === jugador.id || x.IDjugador2 === jugador.id
    );
    const idPareja =
        parejaformada.IDjugador1 === jugador.id
            ? parejaformada.IDjugador2
            : parejaformada.IDjugador1;
    const pareja = jugadores.find((x) => x.id === idPareja);

    const partidosJugados = partidos.filter(
        (x) =>
            x.idPareja1 === parejaformada.id || x.idPareja2 === parejaformada.id
    );
    return (
        <>
            <div className="VerJugador">
                <div className="FotoyBandera">
                    <img
                        src={jugador.URL}
                        alt="ImagenJugador"
                        className="VerFotoJugador"
                    ></img>
                    <img
                        className="VerBanderaJugador"
                        src={`https://flagcdn.com/256x192/${jugador.nacionalidad}.png`}
                        alt="Bandera"
                    ></img>
                </div>

                <div className="VerTextoJugador">
                    <h1 className="VerNombreJugador">
                        {jugador.nombre + " " + jugador.apellidos}
                    </h1>
                    <div className="VerInformacionJugador">
                        <div className="VerInfo">
                            <h3 className="VerDatoJugador">
                                {jugador.ciudad +
                                    ", " +
                                    paises[jugador.nacionalidad] +
                                    "."}
                            </h3>
                            <h3 className="VerDatoJugador">
                                Ranking Actual: {jugador.ranking}
                            </h3>
                            <h3 className="VerDatoJugador">
                                {jugador.nacimiento}
                            </h3>
                        </div>
                        <div className="SepVer"></div>
                        <div className="VerInfo">
                            <h3 className="VerDatoJugador">
                                Brazo dominante: {jugador.brazodominante}
                            </h3>
                            <h3 className="VerDatoJugador">
                                Poscion: {jugador.posicion}
                            </h3>
                            <h3 className="VerDatoJugador">
                                {jugador.altura}m
                            </h3>
                        </div>
                        <div className="SepVer"></div>
                        <button className="VerParejaJugador">
                            <Link to={"/jugadores/" + pareja.id}>
                                <h4 className="VerNombreParejaJugador">
                                    Pareja
                                </h4>
                                <img
                                    src={pareja.URL}
                                    className="VerFotoParejaJugador"
                                    alt="FotoPareja"
                                ></img>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            <h3 className="VerTextoJugador">Partidos jugados</h3>
            <div className="SepHor"></div>
            <div className="VerPartidosJugador">
                {partidosJugados.map((p) => {
                    return (
                        <button>
                            <Link to={"/partidos/" + p.id}>
                                <Partido ID={p.id}></Partido>
                            </Link>
                        </button>
                    );
                })}
            </div>
        </>
    );
}
