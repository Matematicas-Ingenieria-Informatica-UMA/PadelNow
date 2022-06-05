import React from "react";
import Generos from "../../../user/Componentes/Generos";
import { Link } from "react-router-dom";
import TorneoCRUD from "./TorneoCRUD";
import useTorneo from "../../../shared/Torneo/useTorneo";

export default function TorneoAdmin() {
  const { torneos } = useTorneo();
  return (
    <>
      <h1 className="TituloAdmin">PadelNow - Torneos</h1>
      <Generos />
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
          {torneos
            .filter((t) => t.genero === "MASCULINO")
            .map((torneo) => (
              <TorneoCRUD torneo={torneo} />
            ))}
        </div>
        <div className="TorneosGenero">
          {torneos
            .filter((t) => t.genero === "FEMENINO")
            .map((torneo) => (
              <TorneoCRUD torneo={torneo} />
            ))}
        </div>
      </div>
      <Link to="/admin/recursos" className="mt-15 mb-15 SimpleButton">
        Volver
      </Link>
    </>
  );
}
