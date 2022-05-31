import React from "react";
import "../style/Noticia.css";
import {noticias} from "../../BBDD/NoticiasBBDD";
import {useParams} from "react-router-dom";

export default function Noticia(props) {
    const {id: paramId} = useParams();
    const id = paramId || props.ID
    const videoClassName = noticias[id].video === "" ? "Nada" : "VideoNoticia"
    const {titulo, subtitulo, fecha, imagen, video, texto} = noticias[id];
    return (
        <div className="Noticia">
            <h1 className="NoticiaTitle TextColorWhite">
                {titulo}
            </h1>
            <h4 className="Subtitle TextColorWhite">
                {subtitulo}
            </h4>
            <div className="Date">
                <img
                    className="Calendar"
                    src="/Calendar.svg"
                    alt="Calendar"
                />
                <h4 className="TextColorWhite">
                    {fecha}
                </h4>
            </div>
            <img src={imagen} alt="Noticia"/>
            <p className="Content TextColorWhite">
                {texto}
            </p>

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
