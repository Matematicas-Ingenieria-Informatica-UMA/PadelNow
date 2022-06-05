import { React } from "react";
import { Link } from "react-router-dom";
import "../style/Torneo.css";

export default function Torneo({ torneo }) {
    const fase = torneo.faseInicial.replaceAll("_", " ");
    return (
        <button className="Torneo">
            <Link to={`/torneos/${torneo.id}`}>
                <div className="TorneoDiv1">
                    <div className="CITorneo">
                        <h1 className="NombreTorneo">{torneo.nombre}</h1>
                        <h4 className="InstitucionCircuito">
                            {torneo.institucion}
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
                    <h3 className="ValueTorneo">{fase}</h3>
                </div>
            </Link>
        </button>
    );
}
