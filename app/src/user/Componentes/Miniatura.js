import React from "react";
import "../style/Miniatura.css";
import { noticias } from "../../BBDD/NoticiasBBDD";
import { Link } from "react-router-dom";

export default function Miniatura(props) {
    let noticia = noticias.find((x) => x.id === props.ID.toString());
    return (
        <Link to={"/noticias/" + props.ID}>
            <div className="Miniatura">
                <img className="FotoMini" src={noticia.imagen} alt="Noticia" />
                <h4 className="TituloMini">{noticia.titulo}</h4>
            </div>
        </Link>
    );
}
