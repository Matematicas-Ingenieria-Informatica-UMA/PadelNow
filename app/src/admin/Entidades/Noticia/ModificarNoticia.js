import React from "react";
import { Link, useLocation } from "wouter";
import { noticias } from "../../../BBDD/NoticiasBBDD";
import "../../style/CrearRecurso.css";
import "../../../user/style/Global.css";

export default function ModificarNoticia() {
    const id = useLocation()[0].split("/").pop();
    const [dia, mes, anyo] = noticias[id].fecha.split("/");
    return (
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
                        placeholder={`Título: ${noticias[id].titulo}`}
                    />
                </div>
                <div className="InputStyle">
                    <input
                        type="text"
                        id="Subtitle"
                        placeholder={`Título: ${noticias[id].subtitulo}`}
                    />
                </div>
            </div>
            <div className="IncidenciaTop">
                <div className="InputStyle DateInput">
                    <p className="m-0">Fecha</p>
                    <input
                        type="date"
                        id="Date"
                        value={`${anyo}-${mes}-${dia}`}
                    />
                </div>
            </div>
            <div className="IncidenciaTop">
                <div className="InputStyle">
                    <input
                        required
                        placeholder={"URL del video: " + noticias[id].video}
                        type="text"
                        id="Video"
                    />
                </div>
                <div className="InputStyle">
                    <input
                        type="text"
                        id="PhotoURL"
                        placeholder={"URL de la foto: " + noticias[id].imagen}
                    />
                </div>
            </div>
            <div className="IncidenciaTop">
                <div className="InputStyle">
                    <input
                        required
                        type="text"
                        id="Body"
                        placeholder={
                            "Cuerpo de la Noticia: " + noticias[id].texto
                        }
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
