import React from "react";
import { Link, useParams } from "react-router-dom";
import "../style/VerTorneo.css";
import useTorneo from "../../shared/Torneo/useTorneo.js";
import Partido from "../Componentes/Partido";

export default function VerTorneo(props) {
    const { id: paramId } = useParams();
    const id = paramId || props.ID;
    const { torneos } = useTorneo();
    const torneo = torneos.find((x) => x.id == id);
    console.log(torneo);

    return (
        <>
            <div className="VerTituloInformacionTorneo">
                <div className="VerTituloTorneo">
                    <img
                        src={torneo.foto}
                        className="VerFotoInstitucion"
                        alt="VerFotoInstitucion"
                    ></img>
                    <h1 className="VerNombreTorneo">{torneo.nombre}</h1>
                </div>
                <div className="VerInformacionTorneo">
                    <img
                        src={"/" + torneo.genero + ".svg"}
                        alt={torneo.genero}
                    ></img>
                    <h3 className="VerNombreInstitucion">
                        {torneo.institucion}
                    </h3>
                    <img
                        className="VerBanderaTorneo"
                        src={`https://flagcdn.com/256x192/${torneo.pais}.png`}
                        alt="Bandera"
                    ></img>
                </div>
            </div>
            <div className="SepHor"></div>
            <div className="VerPartidosJugador">
                {torneo.partidos.map((p) => {
                    return (
                        <button>
                            <Link to={"/partidos/" + p}>
                                <Partido partido={p}></Partido>
                            </Link>
                        </button>
                    );
                })}
            </div>
        </>
    );
}
