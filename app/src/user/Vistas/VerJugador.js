import React from "react";
import { Link, useParams } from "react-router-dom";
import useJugador from "../../shared/Jugador/useJugador.js";
import "../style/VerJugador.css";
import { Paises } from "../../assets/Paises";
import usePareja from "../../shared/Pareja/usePareja.js";
import usePartido from "../../shared/Partido/usePartido.js";
import Partido from "../Componentes/Partido";
import BrazoDominante from "../../assets/BrazoDominante.js";

export default function VerJugador(props) {
    const { id: paramId } = useParams();
    const id = paramId || props.ID;
    const { jugadores } = useJugador();
    const jugador = jugadores.find((x) => x.id == id);

    console.log(id, jugadores, jugador);
    const { parejas } = usePareja();
    const { partidos } = usePartido();

    const parejaformada = parejas.find(
        (x) =>
            x.jugadores[0].id === jugador.id || x.jugadores[1].id === jugador.id
    );
    const pareja =
        parejaformada.jugadores[0].id === jugador.id
            ? parejaformada.jugadores[1]
            : parejaformada.jugadores[0];

    const partidosJugados = partidos.filter(
        (x) =>
            x.parejas[0].id === parejaformada.id ||
            x.parejas[1].id === parejaformada.id
    );
    return (
        <>
            <div className="VerJugador">
                <div className="FotoyBandera">
                    <img
                        src={jugador.foto}
                        alt="ImagenJugador"
                        className="VerFotoJugador"
                    ></img>
                    <img
                        className="VerBanderaJugador"
                        src={`https://flagcdn.com/256x192/${jugador.pais}.png`}
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
                                    Paises[jugador.pais] +
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
                                Brazo dominante:{" "}
                                {BrazoDominante[jugador.brazoDominante]}
                            </h3>
                            <h3 className="VerDatoJugador">
                                Poscion: {jugador.posicionDeJuego}
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
                                    src={pareja.foto}
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
            {/*
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
            </div>*/}
        </>
    );
}
