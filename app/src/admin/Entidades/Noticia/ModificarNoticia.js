import React from "react";
import "../../style/CrearRecurso.css";
import "../../../user/style/Global.css";
import { Link, useParams } from "react-router-dom";
import useNoticia from "../../../shared/Noticia/useNoticia";

export default function ModificarNoticia() {
  const { id } = useParams();
  const { noticias } = useNoticia();
  const noticia = noticias.find((noticia) => noticia.id === id);
  const [dia, mes, anyo] = noticia.fecha.split("/");
  return (
    <>
      <h1 className="TituloAdmin">PadelNow - MODIFICAR Noticia</h1>
      <div className="CreaRecursoCard">
        <h1 className="CenterAlign">
          Rellene únicamente los datos a modificar de la noticia
        </h1>

        <div className="IncidenciaTop">
          <div className="InputStyle">
            <input
              required
              type="text"
              id="Title"
              placeholder={`Título: ${noticia.titulo}`}
            />
          </div>
          <div className="InputStyle">
            <input
              type="text"
              id="Subtitle"
              placeholder={`Título: ${noticia.subtitulo}`}
            />
          </div>
        </div>
        <div className="IncidenciaTop">
          <div className="InputStyle DateInput">
            <p className="m-0">Fecha</p>
            <input type="date" id="Date" value={`${anyo}-${mes}-${dia}`} />
          </div>
        </div>
        <div className="IncidenciaTop">
          <div className="InputStyle">
            <input
              required
              placeholder={"URL del video: " + noticia.video}
              type="text"
              id="Video"
            />
          </div>
          <div className="InputStyle">
            <input
              type="text"
              id="PhotoURL"
              placeholder={"URL de la foto: " + noticia.foto}
            />
          </div>
        </div>
        <div className="IncidenciaTop">
          <div className="InputStyle">
            <input
              required
              type="text"
              id="Body"
              placeholder={"Cuerpo de la Noticia: " + noticia.cuerpo}
            />
          </div>
        </div>
        <button className="BotonConFondo">Crear Noticia</button>
        <Link to="/admin/recursos/noticias" className="SimpleButton">
          Cancelar
        </Link>
      </div>
    </>
  );
}
