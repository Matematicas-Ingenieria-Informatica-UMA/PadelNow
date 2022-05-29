import React from "react";
import Generos from "../../../user/Componentes/Generos";
import { torneos } from "../../../BBDD/TorneosBBDD";
import { Link } from "wouter";
import TorneoCRUD from "./TorneoCRUD";

export default function TorneoAdmin() {
  return (
    <>
      <Generos />
      <div className="BotonesAdmin">
        <Link to={`${location}/crear`}>
          <button className="mt-15 BotonConFondo">Nuevo Torneo</button>
        </Link>
        <Link to="/admin/recursos">
          <button className="mt-15 BotonConFondo">Volver</button>
        </Link>
      </div>
      <div className="Torneos">
        <div className="TorneosGenero">
          {torneos.map((tournament) => {
            if (tournament.categoria === "Masculino") {
              return <TorneoCRUD ID={tournament.id} />;
            }
          })}
        </div>
        <div className="TorneosGenero">
          {torneos.map((tournament) => {
            if (tournament.categoria === "Femenino") {
              return <TorneoCRUD ID={tournament.id} />;
            }
          })}
        </div>
      </div>
      <Link to="/admin/recursos">
        <button className="mt-15 mb-15 SimpleButton">Volver</button>
      </Link>
    </>
  );
}
