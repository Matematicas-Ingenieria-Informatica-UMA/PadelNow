import React, { useState } from "react";
import { Link } from "react-router-dom";
import Miniatura from "../../../user/Componentes/Miniatura";

export default function MiniaturaCRUD({ noticia }) {
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
        <Link to={`modificar/${noticia.id}`}>
          <img src="/Edit.svg" alt="Delete" className="ButtonPlayer" />
        </Link>
      </div>
      <Miniatura noticia={noticia} />
    </div>
  );
}
