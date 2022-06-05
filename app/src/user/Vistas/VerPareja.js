import React from "react";
import { Link, useParams } from "react-router-dom";
import useJugador from "../../shared/Jugador/useJugador.js";
import "../style/VerPareja.css";
import { paises } from "../../assets/paises";
import usePareja from "../../shared/Pareja/usePareja.js";
import usePartido from "../../shared/Partido/usePartido.js";
import Partido from "../Componentes/Partido";

export default function VerPareja(props) {
    const { id: paramId } = useParams();
    const id = paramId || props.ID;
    const { parejas } = usePareja();
    const pareja = parejas.find((x) => x.id === id);

    const { jugadores } = useJugador();
    const jugador1 = jugadores.find((x) => pareja.IDjugador1 === x.id);
    const jugador2 = jugadores.find((x) => pareja.IDjugador2 === x.id);

    const { partidos } = usePartido();
    const partidosJugados = partidos.filter(
        (x) => x.idPareja1 === pareja.id || x.idPareja2 === pareja.id
    );

    console.log(jugador1, jugador2, pareja);
    return (
        <>
            <div className="VerPareja">
                <button>
                    <Link
                        to={"/jugadores/" + jugador1.id}
                        className="FotoyBandera"
                    >
                        <img
                            src={jugador1.URL}
                            alt="ImagenJugador"
                            className="VerFotoJugador"
                        ></img>
                        <img
                            className="VerBanderaJugador"
                            src={`https://flagcdn.com/256x192/${jugador1.nacionalidad}.png`}
                            alt="Bandera"
                        ></img>
                    </Link>
                </button>
                <div className="VerTextoJugador">
                    <h1 className="VerNombrePareja">
                        {jugador1.nombre + " " + jugador1.apellidos}
                    </h1>
                    <h1 className="VerNombrePareja">y</h1>
                    <h1 className="VerNombrePareja">
                        {jugador2.nombre + " " + jugador2.apellidos}
                    </h1>
                </div>
                <button>
                    <Link
                        to={"/jugadores/" + jugador2.id}
                        className="FotoyBandera"
                    >
                        <img
                            src={jugador2.URL}
                            alt="ImagenJugador"
                            className="VerFotoJugador"
                        ></img>
                        <img
                            className="VerBanderaJugador"
                            src={`https://flagcdn.com/256x192/${jugador2.nacionalidad}.png`}
                            alt="Bandera"
                        ></img>
                    </Link>
                </button>
            </div>
            <div className="SepHor"></div>
            <h3 className="VerEntrenador">Entrenador: {pareja.Entrenador}</h3>
            <div className="SepHor"></div>
            <div className="VerPartidosJugador">
                {partidosJugados.map((p) => {
                    return <Partido ID={p.id}></Partido>;
                })}
            </div>
        </>
    );
}
