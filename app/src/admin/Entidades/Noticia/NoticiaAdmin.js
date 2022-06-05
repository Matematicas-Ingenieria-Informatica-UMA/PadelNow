import React from "react";
import NoticiaCRUD from "./NoticiaCRUD";
import { Link } from "react-router-dom";
import "./Noticias.css";
import useNoticia from "../../../shared/Noticia/useNoticia";

export default function NoticiaAdmin() {
  const { noticias } = useNoticia();

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
        {noticias.map((noticia) => (
          <NoticiaCRUD noticia={noticia} />
        ))}
      </div>
      <Link to="/admin/recursos" className="mt-15 mb-15 SimpleButton">
        Volver
      </Link>
    </>
  );
}
