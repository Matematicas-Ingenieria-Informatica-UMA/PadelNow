import React, { useState } from "react";
import { Link, useLocation } from "wouter";

export default function MiniaturaCRUD(props) {
  const datos = props.datos;
  const [eliminar, setEliminar] = useState("Miniatura");
  const [location, setLocation] = useLocation();

  return (
    <div className={eliminar}>
      <div className="CRUDElements">
        <img
          onClick={() => setEliminar("CRUDNoDisplay")}
          src="/Delete.svg"
          alt="Delete"
          className="ButtonPlayer"
        />
        <Link to={`${location}/modificar/${datos.id}`}>
          <img src="/Edit.svg" alt="Delete" className="ButtonPlayer" />
        </Link>
      </div>
      <img className="FotoMini" src={datos.URL} alt="Noticia" />
      <h4 className="TituloMini">{datos.Titulo}</h4>
    </div>
  );
}
