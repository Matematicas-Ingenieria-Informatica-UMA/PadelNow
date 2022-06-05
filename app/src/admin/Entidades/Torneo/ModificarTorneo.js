import React from "react";
import { Link, useParams } from "react-router-dom";

import "../../style/CrearRecurso.css";
import "../../../user/style/Global.css";
import useTorneo from "../../../shared/Torneo/useTorneo";

export default function ModificarTorneo() {
  const { id: currentID } = useParams();
  const { torneos } = useTorneo();
  let currentTorneo = torneos.find((x) => x.id === currentID);
  return (
    <>
      <h1 className="TituloAdmin">PadelNow - MODIFICAR Torneo</h1>
      <div className="CreaRecursoCard">
        <h1 className="CenterAlign">Modifique los datos del torneo</h1>

        <div className="IncidenciaTop">
          <div className="InputStyle DataInput">
            <input required type="text" id="id" placeholder={currentID} />
          </div>
          <div className="InputStyle DataInput">
            <input
              required
              type="text"
              id="Name"
              placeholder={currentTorneo.nombre}
            />
          </div>
        </div>
        <div className="IncidenciaTop">
          <div className="InputStyle">
            <input
              required
              type="text"
              id="Initial"
              placeholder={currentTorneo.faseInicial}
            />
          </div>
          <select
            required
            name="Gender"
            id="Gender"
            className="DesplegableRecurso"
          >
            <option disabled selected>
              Selecciona la categoría: {currentTorneo.genero}
            </option>

            <option>Masculino</option>

            <option>Femenino</option>
          </select>
        </div>
        <div className="IncidenciaTop">
          <div className="InputStyle DataInput">
            <input
              type="date"
              id="Year"
              placeholder={currentTorneo.fechaInicial}
            />
          </div>
          <div className="InputStyle DataInput">
            <input
              type="date"
              id="Year"
              placeholder={currentTorneo.fechaFinal}
            />
          </div>
        </div>
        <h1 className="CenterAlign">Modifique los datos de la institucion</h1>
        <div className="IncidenciaTop">
          <div className="InputStyle DataInput">
            <input
              required
              type="text"
              id="institucionNombre"
              placeholder={currentTorneo.institucion}
            />
          </div>
        </div>
        <div className="IncidenciaTop">
          <div className="InputStyle DataInput">
            <input
              required
              type="text"
              id="URLPhoto"
              placeholder={currentTorneo.foto}
            />
          </div>
        </div>
        <button className="BotonConFondo">Modificar Torneo</button>
        <Link to="/admin/recursos/torneos" className="SimpleButton">
          Cancelar
        </Link>
      </div>
    </>
  );
}
