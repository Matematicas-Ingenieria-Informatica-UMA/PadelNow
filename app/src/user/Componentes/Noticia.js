import React from "react";
import "../style/Noticia.css";
import { noticias } from "../../BBDD/NoticiasBBDD";

export default function Noticia(props) {
    let noticia = noticias.find((x) => x.id === props.ID.toString());
    let video = "VideoNoticia";
    if (noticia.video === "") video = "Nada";
    return (
        <>
            <div className="Noticia">
                <h1 className="NoticiaTitle TextColorWhite">
                    {noticia.titulo}
                </h1>
                <h4 className="Subtitle TextColorWhite">{noticia.subtitulo}</h4>
                <div className="Date">
                    <img
                        className="Calendar"
                        src="/Calendar.svg"
                        alt="Calendar"
                    />
                    <h4 className="TextColorWhite">{noticia.fecha}</h4>
                </div>
                <img src={noticia.imagen} alt="Noticia" />
                {noticia.parrafos.map((x) => {
                    return <p className="Content TextColorWhite">{x}</p>;
                })}

                <div className={video}>
                    <iframe
                        width="777"
                        height="437"
                        src={noticia.video}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
        </>
    );
}
