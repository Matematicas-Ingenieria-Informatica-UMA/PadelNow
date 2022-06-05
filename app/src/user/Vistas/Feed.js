import React from "react";
import { Link } from "react-router-dom";
import useNoticia from "../../shared/Noticia/useNoticia";
import Miniatura from "../Componentes/Miniatura";
import Noticia from "../Componentes/Noticia";
import "../style/Feed.css";

export default function Feed() {
    const { noticias } = useNoticia();

    var ultNoticias = [];

    for (var i = noticias.length - 1; i > noticias.length - 5; i--) {
        ultNoticias[noticias.length - 1 - i] = i - 1;
    }
    return (
        <>
            <Noticia ID="1" />
            <div className="NoticiaSepHor mb-15"></div>
            <div className="MiniaturasRow">
                {ultNoticias.map((x) => {
                    return <Miniatura noticia={noticias[1]} />;
                })}
                <div className="VerMas">
                    <Link to="/noticias" className="VerMasBoton">
                        Ver más...
                    </Link>
                </div>
            </div>
            <div className="NoticiaSepHor"></div>
        </>
    );
}
