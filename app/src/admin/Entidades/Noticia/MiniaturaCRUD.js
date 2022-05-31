import React, { useState } from "react";
import { Link } from "react-router-dom";
import Miniatura from "../../../user/Componentes/Miniatura";

export default function MiniaturaCRUD(props) {
  const [eliminar, setEliminar] = useState("Miniatura");

  return (
    <div className={eliminar}>
      <div className="CRUDElements">
        <img
          onClick={() => setEliminar("CRUDNoDisplay")}
          src="/Delete.svg"
          alt="Delete"
          className="ButtonPlayer"
        />
        <Link to={`modificar/${props.ID}`}>
          <img src="/Edit.svg" alt="Delete" className="ButtonPlayer" />
        </Link>
      </div>
      <Miniatura ID={props.ID}></Miniatura>
    </div>
  );
}
