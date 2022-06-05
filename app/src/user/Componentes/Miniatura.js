import React from "react";
import "../style/Miniatura.css";
import { Link } from "react-router-dom";

export default function Miniatura({ noticia }) {
    return (
        <Link to={"/noticias/" + noticia.id}>
            <div className="Miniatura">
                <img className="FotoMini" src={noticia.foto} alt="Noticia" />
                <h4 className="TituloMini">{noticia.titulo}</h4>
            </div>
        </Link>
    );
}
