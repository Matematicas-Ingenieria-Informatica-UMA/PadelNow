import React from "react";
import "../style/Miniatura.css";
import {noticias} from "../../BBDD/NoticiasBBDD";
import {Link} from "react-router-dom";

export default function Miniatura(props) {
    const myID = parseInt(props.ID);
    return (
        <div className="Miniatura">
            <Link to={"/noticias/" + myID}>
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
