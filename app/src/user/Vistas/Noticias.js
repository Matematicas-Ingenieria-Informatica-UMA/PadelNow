import React from "react";
import Miniatura from "../Componentes/Miniatura";
import { Link } from "react-router-dom";
import useNoticia from "../../shared/Noticia/useNoticia";

export default function Noticias() {
    const { noticias } = useNoticia();
    return (
        <>
            <div className="NoticiaAdmin">
                {noticias.map((noticia) => {
                    return <Miniatura noticia={noticia} />;
                })}
            </div>
            <Link to="/" className="mt-15 mb-15 SimpleButton">
                Volver
            </Link>
        </>
    );
}
