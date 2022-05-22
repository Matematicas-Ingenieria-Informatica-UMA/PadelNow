import React from "react";
import ParejaCRUD from "./ParejaCRUD.js";
import Generos from "../../../user/Componentes/Generos.js";
import { Link, useLocation } from "wouter";

import { parejas } from "../../../BBDD/ParejasBBDD.js";

import "./Parejas.css";

export default function ParejaAdmin() {
  const [location, setLocation] = useLocation();
  return (
    <>
      <Generos />
      <Link to={`${location}/crear`}>
        <button className="mt-15 BotonConFondo">Nueva Pareja</button>
      </Link>
      <div className="Parejas">
        <div className="ParejasGenero">
          {parejas.map((pareja) => {
            if (pareja.Genero === "Masculino") {
              return <ParejaCRUD ID={pareja.id} />;
            }
          })}
          ;
        </div>
        <div className="ParejasGenero">
          {parejas.map((pareja) => {
            if (pareja.Genero === "Femenino") {
              return <ParejaCRUD ID={pareja.id} />;
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
