import { React, useState } from "react";
import { torneos } from "../../BBDD/TorneosBBDD";
import "../style/Torneo.css";

export default function Torneo(props) {
  let datos = torneos.find((x) => x.id === props.ID);
  const modo = ["ampliar", "disminuir"];
  const [boton, setBoton] = useState(0);
  return (
    <div className="Torneo">
      <div className="TorneoDiv1">
        <div className="CITorneo">
          <h1 className="NombreTorneo">{datos.nombre}</h1>
          <h4 className="InstitucionCircuito">
            {datos.institucion} - {datos.anio}
          </h4>
        </div>
        <img
          className="FotoTorneo"
          src="https://yt3.ggpht.com/ytc/AKedOLTH56fM6nDBwgN_DlfHicOBmHY7m506EVrpjlAx3A=s900-c-k-c0x00ffffff-no-rj"
          alt="LogoInstitución"
        ></img>
      </div>
      <div className="KeyValueDiv">
        <h3 className="KeyTorneo">Ronda Inicial</h3>
        <h3 className="ValueTorneo">{datos.faseInicial}</h3>
      </div>
      <div className="KeyValueDiv">
        <h3 className="KeyTorneo">Ganadores</h3>
        <h3 className="ValueTorneo">
          {datos.ganadores.jugador1.toUpperCase()} /{" "}
          {datos.ganadores.jugador2.toUpperCase()}
        </h3>
      </div>

      <h1 className={boton === 1 ? "InstitucionTorneo" : "Vacio"}>
        Más sobre la institución:
      </h1>

      <div className={boton === 1 ? "KeyValueDiv" : "Vacio"}>
        <h3 className={boton === 1 ? "KeyTorneo" : "Vacio"}>Organizador</h3>
        <h3 className={boton === 1 ? "ValueTorneo" : "Vacio"}>Damm</h3>
      </div>

      <div className={boton === 1 ? "KeyValueDiv" : "Vacio"}>
        <h3 className={boton === 1 ? "KeyTorneo" : "Vacio"}>Internacional</h3>
        <h3 className={boton === 1 ? "ValueTorneo" : "Vacio"}>No</h3>
      </div>

      <div className={boton === 1 ? "KeyValueDiv" : "Vacio"}>
        <h3 className={boton === 1 ? "KeyTorneo" : "Vacio"}>Sede</h3>
        <h3 className={boton === 1 ? "ValueTorneo" : "Vacio"}>
          Madrid, España
        </h3>
      </div>

      <div className={boton === 1 ? "KeyValueDiv" : "Vacio"}>
        <h3 className={boton === 1 ? "KeyTorneo" : "Vacio"}>Fundación</h3>
        <h3 className={boton === 1 ? "ValueTorneo" : "Vacio"}>2013</h3>
      </div>

      <div className="DivAmpliar">
        <button
          onClick={() => {
            setBoton((boton + 1) % 2);
          }}
        >
          <img
            className="AmpliarTorneo"
            src={`${modo[boton]}.svg`}
            alt={`Logo ${modo[boton]}`}
          ></img>
        </button>
      </div>
    </div>
  );
}
