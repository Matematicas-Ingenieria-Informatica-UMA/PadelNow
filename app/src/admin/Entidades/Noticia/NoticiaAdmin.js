import React from "react";
import MiniaturaCRUD from "./MiniaturaCRUD";
import { Link } from "react-router-dom";
import { noticias } from "../../../BBDD/NoticiasBBDD";
import "./Noticias.css";

export default function NoticiaAdmin() {
  return (
    <>
      <h1 className="TituloAdmin">PadelNow - Noticias</h1>
      <div className="BotonesAdmin">
        <Link to="crear" className="mt-15 BotonConFondo">
          Nueva Noticia
        </Link>
        <Link to="/admin/recursos" className="mt-15 BotonConFondo">
          Volver
        </Link>
      </div>
      <div className="NoticiaAdmin">
        {noticias.map((x) => {
          return <MiniaturaCRUD ID={x.id} />;
        })}
      </div>
      <Link to="/admin/recursos" className="mt-15 mb-15 SimpleButton">
        Volver
      </Link>
    </>
  );
}
