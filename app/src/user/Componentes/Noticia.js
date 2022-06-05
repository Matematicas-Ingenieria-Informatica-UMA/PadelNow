import React from "react";
import "../style/Noticia.css";
import { useParams } from "react-router-dom";
import useNoticia from "../../shared/Noticia/useNoticia";

export default function Noticia(props) {
    const { id: paramId } = useParams();
    const id = paramId || props.ID;
    const { noticias } = useNoticia();
    const noticia = noticias.find((x) => x.id == id);
    const videoClassName = noticia.video === "" ? "Nada" : "VideoNoticia";
    const { titulo, subtitulo, foto, video, cuerpo } = noticia;
    const fecha = new Date(noticia.fecha).toLocaleDateString("es-ES");
    const parrafos = cuerpo.split("\n");

    console.log(id, noticia);

    return (
        <div className="Noticia">
            <h1 className="NoticiaTitle TextColorWhite">{titulo}</h1>
            <h4 className="Subtitle TextColorWhite">{subtitulo}</h4>
            <div className="Date">
                <img className="Calendar" src="/Calendar.svg" alt="Calendar" />
                <h4 className="TextColorWhite">{fecha}</h4>
            </div>
            <img src={foto} alt="Noticia" />
            {parrafos.map((x) => {
                return <p className="Content TextColorWhite">{x}</p>;
            })}

            <div className={videoClassName}>
                <iframe
                    width="777"
                    height="437"
                    src={video}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}
