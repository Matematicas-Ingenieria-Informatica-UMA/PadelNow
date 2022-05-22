import React from "react";
import "../style/Noticia.css";
import { noticias } from "../../BBDD/NoticiasBBDD";

export default function Noticia(props) {
    const noticiaID = parseInt(props.ID);
    let video = "VideoNoticia";
    if (noticias[noticiaID].video == "") video = "Nada";
    return (
        <>
            <div className="Noticia">
                <h1 className="NoticiaTitle TextColorWhite">
                    {noticias[noticiaID].titulo}
                </h1>
                <h4 className="Subtitle TextColorWhite">
                    {noticias[noticiaID].subtitulo}
                </h4>
                <div className="Date">
                    <img
                        className="Calendar"
                        src="/Calendar.svg"
                        alt="Calendar"
                    />
                    <h4 className="TextColorWhite">
                        {noticias[noticiaID].fecha}
                    </h4>
                </div>
                <img src={noticias[noticiaID].imagen} alt="Noticia" />
                <p className="Content TextColorWhite">
                    {noticias[noticiaID].texto}
                </p>

                <div className={video}>
                    <iframe
                        width="777"
                        height="437"
                        src={noticias[noticiaID].video}
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
