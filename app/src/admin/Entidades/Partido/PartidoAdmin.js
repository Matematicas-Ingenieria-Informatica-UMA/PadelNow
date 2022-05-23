import React from "react";
import Generos from "../../../user/Componentes/Generos.js";
import PartidoCRUD from "./PartidoCRUD.js";
import { Link, useLocation } from "wouter";
import { partidos } from "../../../BBDD/PartidosBBDD.js";
import "./Partidos.css";

export default function PartidoAdmin() {
  const [location, setLocation] = useLocation();
  return (
    <>
      <Generos />
      <Link to={`${location}/crear`}>
        <button className="mt-15 BotonConFondo">Nuevo Partido</button>
      </Link>
      <div className="Partidos">
        <div className="PartidosGenero">
          {partidos.map((match) => {
              if(match.genero === "Masculino"){
                  return <PartidoCRUD ID={match.id} />;
              }
          })}
        </div>
        <div className="PartidosGenero">
        {partidos.map((match) => {
              if(match.genero === "Femenino"){
                  return <PartidoCRUD ID={match.id} />;
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
