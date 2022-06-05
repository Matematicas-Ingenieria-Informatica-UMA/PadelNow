import { React, useState } from "react";
import { useParams } from "react-router-dom";
import useTorneo from "../../shared/Torneo/useTorneo";
import "../style/Torneo.css";

export default function Torneo(props) {
    const { id: paramId } = useParams();
    const id = paramId || props.ID;
    const { torneos } = useTorneo();
    const torneo = torneos.find((x) => x.id === id);
    const modo = ["ampliar", "disminuir"];
    const [boton, setBoton] = useState(0);
    return (
        <button className="Torneo">
            <div className="TorneoDiv1">
                <div className="CITorneo">
                    <h1 className="NombreTorneo">{torneo.nombre}</h1>
                    <h4 className="InstitucionCircuito">
                        {torneo.institucion} - {torneo.anio}
                    </h4>
                </div>
                <img
                    className="FotoTorneo"
                    src={torneo.foto}
                    alt="LogoInstitución"
                ></img>
            </div>
            <div className="KeyValueDiv">
                <h3 className="KeyTorneo">Ronda Inicial</h3>
                <h3 className="ValueTorneo">{torneo.faseInicial}</h3>
            </div>
            <div className="KeyValueDiv">
                <h3 className="KeyTorneo">Ganadores</h3>
                <h3 className="ValueTorneo">
                    {torneo.ganadores.jugador1.toUpperCase()} /{" "}
                    {torneo.ganadores.jugador2.toUpperCase()}
                </h3>
            </div>

            <h1 className={boton === 1 ? "InstitucionTorneo" : "Vacio"}>
                Más sobre la institución:
            </h1>

            <div className={boton === 1 ? "KeyValueDiv" : "Vacio"}>
                <h3 className={boton === 1 ? "KeyTorneo" : "Vacio"}>
                    Organizador
                </h3>
                <h3 className={boton === 1 ? "ValueTorneo" : "Vacio"}>
                    {torneo.institucion.organizador}
                </h3>
            </div>

            <div className={boton === 1 ? "KeyValueDiv" : "Vacio"}>
                <h3 className={boton === 1 ? "KeyTorneo" : "Vacio"}>
                    Internacional
                </h3>
                <h3 className={boton === 1 ? "ValueTorneo" : "Vacio"}>
                    {torneo.institucion.internacional}
                </h3>
            </div>

            <div className={boton === 1 ? "KeyValueDiv" : "Vacio"}>
                <h3 className={boton === 1 ? "KeyTorneo" : "Vacio"}>Sede</h3>
                <h3 className={boton === 1 ? "ValueTorneo" : "Vacio"}>
                    {torneo.institucion.sede}
                </h3>
            </div>

            <div className={boton === 1 ? "KeyValueDiv" : "Vacio"}>
                <h3 className={boton === 1 ? "KeyTorneo" : "Vacio"}>
                    Fundación
                </h3>
                <h3 className={boton === 1 ? "ValueTorneo" : "Vacio"}>
                    {torneo.institucion.anioFundacion}
                </h3>
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
        </button>
    );
}
