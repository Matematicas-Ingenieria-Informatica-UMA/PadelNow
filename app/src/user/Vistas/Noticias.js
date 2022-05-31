import React from "react";
import Miniatura from "../Componentes/Miniatura";
import {Link} from "react-router-dom";
import {noticias} from "../../BBDD/NoticiasBBDD";

export default function Noticias() {
    return (
        <>
            <div className="NoticiaAdmin">
                {noticias.map((noticia) => {
                    return <Miniatura ID={noticia.id}/>;
                })}
            </div>
            <Link to="/" className="mt-15 mb-15 SimpleButton">
                Volver
            </Link>
        </>
    );
}
