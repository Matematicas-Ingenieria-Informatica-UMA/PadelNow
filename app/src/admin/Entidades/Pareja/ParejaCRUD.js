import React from "react";
import {useState} from "react";
import {Link} from "react-router-dom";
import {parejas} from "../../../BBDD/ParejasBBDD";
import {jugadores} from "../../../BBDD/JugadoresBBDD";
import "./Parejas.css";

export default function ParejaCRUD(props) {
    const [eliminar, setEliminar] = useState("ParejaCRUD");

    const pareja = parejas.find((x) => x.id == props.ID);
    const jugador1 = jugadores.find((x) => x.id == pareja.IDjugador1);
    const jugador2 = jugadores.find((x) => x.id == pareja.IDjugador2);

    return (
        <div className={eliminar}>
            <div className="CRUDElements">
                <img
                    onClick={() => setEliminar("CRUDNoDisplay")}
                    src="/Delete.svg"
                    alt="Delete"
                    className="ButtonPlayer"
                />
                <Link to={`modificar/${pareja.id}`}>
                    <img src="/Edit.svg" alt="Edit" className="ButtonPlayer"/>
                </Link>
            </div>
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
                    <div className="PEntrenador">
                        <h2 className="Entrenador">Entrenador:</h2>
                        <h2 className="PEntrenadorNombre">{pareja.Entrenador}</h2>
                    </div>
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
            <h1 className="ParejaPuntos">{pareja.Puntos} pts</h1>
        </div>
    );
}
