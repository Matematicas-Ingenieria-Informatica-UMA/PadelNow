import React from "react";
import Generos from "../../../user/Componentes/Generos";
import {torneos} from "../../../BBDD/TorneosBBDD";
import {Link} from "react-router-dom";
import TorneoCRUD from "./TorneoCRUD";

export default function TorneoAdmin() {
    return (
        <>
            <h1 className="TituloAdmin">PadelNow - Torneos</h1>
            <Generos/>
            <div className="BotonesAdmin">
                <Link to="crear" className="mt-15 BotonConFondo">
                    Nuevo Torneo
                </Link>
                <Link to="/admin/recursos" className="mt-15 BotonConFondo">
                    Volver
                </Link>
            </div>
            <div className="Torneos">
                <div className="TorneosGenero">
                    {torneos.map((tournament) => {
                        if (tournament.categoria === "Masculino") {
                            return <TorneoCRUD ID={tournament.id}/>;
                        }
                    })}
                </div>
                <div className="TorneosGenero">
                    {torneos.map((tournament) => {
                        if (tournament.categoria === "Femenino") {
                            return <TorneoCRUD ID={tournament.id}/>;
                        }
                    })}
                </div>
            </div>
            <Link to="/admin/recursos" className="mt-15 mb-15 SimpleButton">
                Volver
            </Link>
        </>
    );
}
