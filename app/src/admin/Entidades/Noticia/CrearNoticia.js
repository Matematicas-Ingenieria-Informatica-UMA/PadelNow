import React from "react";
import { Link } from "wouter";

import "../../style/CrearRecurso.css";
import "../../../user/style/Global.css";

export default function CrearNoticia() {
  return (
    <div className="CreaRecursoCard">
      <h1 className="CenterAlign">Rellene los datos de la noticia</h1>

      <div className="IncidenciaTop">
        <div className="InputStyle">
          <input required type="text" id="Title" placeholder="Título" />
        </div>
        <div className="InputStyle">
          <input type="text" id="Subtitle" placeholder="Subtítulo" />
        </div>
      </div>
      <div className="IncidenciaTop">
        <div className="InputStyle DateInput">
          <p className="m-0">Fecha</p>
          <input type="date" id="Date" />
        </div>
      </div>
      <div className="IncidenciaTop">
        <div className="InputStyle">
          <input required placeholder="Autor" type="text" id="Author" />
        </div>
        <div className="InputStyle">
          <input type="text" id="PhotoURL" placeholder="URL de la foto" />
        </div>
      </div>
      <div className="IncidenciaTop">
        <div className="InputStyle">
          <input
            required
            type="text"
            id="Body"
            placeholder="Cuerpo de la Noticia"
          />
        </div>
      </div>
      <button className="BotonConFondo">Crear Noticia</button>
      <Link to="/admin/recursos/noticias">
        <button className="SimpleButton">Cancelar</button>
      </Link>
    </div>
  );
}
