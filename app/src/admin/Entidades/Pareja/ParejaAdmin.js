import React from "react";
import ParejaCRUD from "./ParejaCRUD.js";
import Generos from "../../../user/Componentes/Generos.js";
import { Link } from "react-router-dom";
import usePareja from "../../../shared/Pareja/usePareja";

import "./Parejas.css";

export default function ParejaAdmin() {
  const { parejas } = usePareja();
  return (
    <>
      <h1 className="TituloAdmin">PadelNow - Parejas</h1>
      <Generos />
      <Link to="crear">
        <button className="mt-15 BotonConFondo">Nueva Pareja</button>
      </Link>
      <div className="Parejas">
        <div className="ParejasGenero">
          {parejas
            .filter((p) => p.genero === "MASCULINO")
            .map((pareja, index) => (
              <ParejaCRUD pareja={pareja} ranking={index + 1} />
            ))}
        </div>
        <div className="ParejasGenero">
          {parejas
            .filter((p) => p.genero === "FEMENINO")
            .map((pareja, index) => (
              <ParejaCRUD pareja={pareja} ranking={index + 1} />
            ))}
        </div>
      </div>
      <Link to="/admin/recursos" className="mt-15 mb-15 SimpleButton">
        Volver
      </Link>
    </>
  );
}
