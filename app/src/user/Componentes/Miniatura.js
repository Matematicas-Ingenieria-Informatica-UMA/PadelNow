import React from "react";
import "../style/Miniatura.css";
import { noticias } from "../../BBDD/NoticiasBBDD";
import { Link, useLocation } from "wouter";

export default function Miniatura(props) {
    const myID = parseInt(props.ID);
    const [location, setLocation] = useLocation();
    return (
        <div className="Miniatura">
            <Link to={"/noticias/ver/" + myID}>
                <img
                    className="FotoMini"
                    src={noticias[myID].imagen}
                    alt="Noticia"
                />
                <h4 className="TituloMini">{noticias[myID].titulo}</h4>
            </Link>
        </div>
    );
}
