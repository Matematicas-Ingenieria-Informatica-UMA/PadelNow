import React from "react";

import "../style/Incidencia.css";
import "../style/Global.css";

export default function Incidencia() {
  return (
    <div className="IncidenciaCard">

      <h2>Rellene sus datos</h2>

      <div className="IncidenciaTop">
        <div className="InputStyle DataInput">
          <img src="/Mail.svg" alt="Email" />
          <input type="text" id="Email" placeholder="Email" />
        </div>
        <div className="InputStyle DataInput">
          <img src="/Profile.svg" alt="Profile" />
          <input
            type="text"
            id="NameSurnames"
            placeholder="Nombre y Apellidos"
          />
        </div>
      </div>

      <div className="IncidenciaBottom">
        <div className="InputStyle">
          <input
            type="text"
            id="Incidence"
            placeholder="Explique brevemente su problema"
            className="ProblemInput"
          />
        </div>
      </div>

      <button className="BotonConFondo">Enviar Incidencia</button>
      <button className="SimpleButton">Cancelar</button>
    </div>
  );
}
