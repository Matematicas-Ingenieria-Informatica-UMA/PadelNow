import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import Miniatura from "../../../user/Componentes/Miniatura";

export default function MiniaturaCRUD(props) {
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
        <Link to={`${location}/modificar/${props.ID}`}>
          <img src="/Edit.svg" alt="Delete" className="ButtonPlayer" />
        </Link>
      </div>
      <Miniatura ID={props.ID}></Miniatura>
    </div>
  );
}
