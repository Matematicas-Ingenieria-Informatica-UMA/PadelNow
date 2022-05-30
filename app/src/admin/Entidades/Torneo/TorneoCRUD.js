import { React, useState } from "react";
import { Link, useLocation } from "wouter";
import { torneos } from "../../../BBDD/TorneosBBDD";
import "../../../user/style/Torneo.css";
import "../Jugador/Jugadores.css";

export default function TorneoCRUD(props) {
    let datos = torneos.find((x) => x.id === props.ID);
    const modo = ["ampliar", "disminuir"];
    const [boton, setBoton] = useState(0);
    const [eliminar, setEliminar] = useState("Torneo");
    const [location, setLocation] = useLocation();

    return (
        <div className={eliminar}>
            <div className="CRUDElements">
                <button
                    className="ButtonPlayer"
                    onClick={() => setEliminar("CRUDNoDisplay")}
                >
                    <img src="/Delete.svg" alt="Delete" />
                </button>
                <Link to={`${location}/modificar/${props.ID}`}>
                    <img src="/Edit.svg" alt="Edit" className="ButtonPlayer" />
                </Link>
            </div>
            <div className="TorneoDiv1">
                <div className="CITorneo">
                    <h1 className="NombreTorneo">{datos.nombre}</h1>
                    <h4 className="InstitucionCircuito">
                        {datos.institucion} - {datos.anio}
                    </h4>
                </div>
                <img
                    className="FotoTorneo"
                    src={datos.foto}
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
                    {datos.ganadores.jugador1.toUpperCase()} /
                    {datos.ganadores.jugador2.toUpperCase()}
                </h3>
            </div>

            <div className={boton === 1 ? "moreInfo" : "Vacio"}>
                <h1 className="InstitucionTorneo">Más sobre la institución:</h1>

                <div className="KeyValueDiv">
                    <h3 className="KeyTorneo">Organizador</h3>
                    <h3 className="ValueTorneo">Damm</h3>
                </div>

                <div className="KeyValueDiv">
                    <h3 className="KeyTorneo">Internacional</h3>
                    <h3 className="ValueTorneo">No</h3>
                </div>

                <div className="KeyValueDiv">
                    <h3 className="KeyTorneo">Sede</h3>
                    <h3 className="ValueTorneo">Madrid, España</h3>
                </div>

                <div className="KeyValueDiv">
                    <h3 className="KeyTorneo">Fundación</h3>
                    <h3 className="ValueTorneo">2013</h3>
                </div>
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
