import React from "react";
import { Link } from "wouter";
import Miniatura from "../Componentes/Miniatura";
import Noticia from "../Componentes/Noticia";
import "../style/Feed.css";
import { noticias } from "../../BBDD/NoticiasBBDD";

export default function Feed() {
    var ultNoticias = [];
    for (var i = noticias.length - 1; i > noticias.length - 5; i--) {
        ultNoticias[noticias.length - 1 - i] = i - 1;
    }
    return (
        <>
            <Noticia ID={ultNoticias[0] + 1}></Noticia>
            <div className="NoticiaSepHor"></div>
            <div className="MiniaturasRow">
                {ultNoticias.map((x) => {
                    return <Miniatura ID={x}></Miniatura>;
                })}
                <div className="VerMas">
                    <Link to="/noticias">
                        <h4 className="VerMasBoton">Ver más...</h4>
                    </Link>
                </div>
            </div>
            <div className="NoticiaSepHor"></div>
        </>
    );
}
