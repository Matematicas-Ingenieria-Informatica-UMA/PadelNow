import React, { useEffect, useState } from "react";
import Generos from "../Componentes/Generos";
import BotonGenero from "../Componentes/BotonGenero";
import Torneo from "../Componentes/Torneo";
import "../style/Torneos.css";
import { Link } from "react-router-dom";
import useTorneo from "../../shared/Torneo/useTorneo";

export default function Torneos() {
    const [width, setWidth] = useState(0);
    const [gender, setGender] = useState("Masculino");
    const { torneos } = useTorneo();

    useEffect(() => {
        const updateWidth = () => {
            const x = document.body.clientWidth;
            setWidth(x);
        };
        updateWidth();
        window.addEventListener("resize", updateWidth);
    }, [width]);
    if (width > 800) {
        return (
            <>
                <Generos />
                <div className="Torneos">
                    <div className="TorneosGenero">
                        {torneos.map((torneo) => {
                            if (torneo.genero == "MASCULINO") {
                                return (
                                    <Link to={torneo.id}>
                                        <Torneo torneo={torneo} />
                                    </Link>
                                );
                            }
                        })}
                    </div>
                    <div className="TorneosGenero">
                        {torneos.map((torneo) => {
                            if (torneo.genero == "FEMENINO") {
                                return (
                                    <Link to={torneo.id}>
                                        <Torneo torneo={torneo} />
                                    </Link>
                                );
                            }
                        })}
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="TorneosResposive">
                    <button
                        className="BotonGenero"
                        onClick={() => {
                            if (gender === "Masculino") {
                                setGender("Fememenino");
                            } else {
                                setGender("Masculino");
                            }
                        }}
                    >
                        <BotonGenero clase={gender} />
                    </button>
                    {torneos.map((x) => {
                        let control =
                            gender === "Masculino" ? "MASCULINO" : "FEMENINO";
                        if (x.genero === control) {
                            return (
                                <Link to={x.id}>
                                    <Torneo torneo={x} />
                                </Link>
                            );
                        }
                    })}
                </div>
            </>
        );
    }
}
