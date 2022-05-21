import React from "react";
import Generos from "../../../user/Componentes/Generos.js";
import PartidoCRUD from "./PartidoCRUD.js";
import { Link, useLocation } from "wouter";
import "./Partidos.css";

export default function PartidoAdmin() {
  const ejemploM = [
    {
      id: 1,
      nombre: "Brussel Padel Open",
      fase: "Cuartos de Final",
      pareja1: { Jugador1: "Juan Lebrón", Jugador2: "Alejandro Galán" },
      pareja2: { Jugador1: "Arturo Aguilera", Jugador2: "Manuel Castillo" },
      tiempo: "03:04:15",
      resultado: "3/6/6/3/6/4",
      fecha: "21/05/2022",
    },
    {
      id: 2,
      nombre: "Piso Naxetee Open",
      fase: "Final",
      pareja1: { Jugador1: "Nacho Ávila", Jugador2: "Juan de Dios Aranda" },
      pareja2: { Jugador1: "Arturo Aguilera", Jugador2: "Manuel Castillo" },
      tiempo: "02:30:52",
      resultado: "6/1/6/1/-/-",
      fecha: "20/05/2022",
    },
  ];
  const ejemploF = [
    {
      id: 3,
      nombre: "WPT Master Final",
      fase: "Final",
      pareja1: { Jugador1: "Julia Pérez", Jugador2: "María José García" },
      pareja2: { Jugador1: "Alejandra Salazar", Jugador2: "Gemma Triay" },
      tiempo: "02:55:37",
      resultado: "3/6/6/2/6/2",
      fecha: "19/05/2022",
    },
    {
      id: 4,
      nombre: "WPT Master Final",
      fase: "Semifinales",
      pareja1: { Jugador1: "Julia Pérez", Jugador2: "María José García" },
      pareja2: { Jugador1: "Pepita", Jugador2: "Jaimita" },
      tiempo: "02:15:03",
      resultado: "2/6/6/4/6/1",
      fecha: "18/05/2022",
    },
  ];
  return (
    <>
      <Generos />
      <Link to={`${location}/crear`}>
        <button className="mt-15 BotonConFondo">Nuevo Partido</button>
      </Link>
      <div className="Partidos">
        <div className="PartidosGenero">
          {ejemploM.map((match) => {
            return <PartidoCRUD datos={match} />;
          })}
        </div>
        <div className="PartidosGenero">
          {ejemploF.map((match) => {
            return <PartidoCRUD datos={match} />;
          })}
        </div>
      </div>
      <Link to="/admin/recursos">
        <button className="mt-15 mb-15 SimpleButton">Volver</button>
      </Link>
    </>
  );
}
