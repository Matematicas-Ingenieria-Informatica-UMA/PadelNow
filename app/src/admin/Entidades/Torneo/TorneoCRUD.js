import { React, useState } from "react";
import { Link } from "react-router-dom";
import "../../../user/style/Torneo.css";
import "../Jugador/Jugadores.css";

export default function TorneoCRUD({ torneo }) {
  const modo = ["ampliar", "disminuir"];
  const [boton, setBoton] = useState(0);
  const [eliminar, setEliminar] = useState("Torneo");
  const { id, nombre, institucion, foto, faseInicial } = torneo;

  return (
    <div className={eliminar}>
      <div className="CRUDElements">
        <button
          className="ButtonPlayer"
          onClick={() => setEliminar("CRUDNoDisplay")}
        >
          <img src="/Delete.svg" alt="Delete" />
        </button>
        <Link to={`modificar/${id}`}>
          <img src="/Edit.svg" alt="Edit" className="ButtonPlayer" />
        </Link>
      </div>
      <div className="TorneoDiv1">
        <div className="CITorneo">
          <h1 className="NombreTorneo">{nombre}</h1>
          <h4 className="InstitucionCircuito">{institucion}</h4>
        </div>
        <img className="FotoTorneo" src={foto} alt="LogoInstitución"></img>
      </div>
      <div className="KeyValueDiv">
        <h3 className="KeyTorneo">Ronda Inicial</h3>
        <h3 className="ValueTorneo">{faseInicial}</h3>
      </div>

      <div className="DivAmpliar">
        <button
          onClick={() => {
            setBoton((boton + 1) % 2);
          }}
        >
          <img
            className="AmpliarTorneo"
            src={`/${modo[boton]}.svg`}
            alt={`Logo ${modo[boton]}`}
          ></img>
        </button>
      </div>
    </div>
  );
}
