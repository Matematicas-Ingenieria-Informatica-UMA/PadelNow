import React from "react";
import "../style/Miniatura.css";

export default function Miniatura(props) {
  const datos = props.datos;
  return (
    <div className="Miniatura">
      <img className="FotoMini" src={datos.URL} alt="Noticia" />
      <h4 className="TituloMini">{datos.Titulo}</h4>
    </div>
  );
}
