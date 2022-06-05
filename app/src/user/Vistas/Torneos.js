import React, { useEffect, useState } from "react";
import Generos from "../Componentes/Generos";
import BotonGenero from "../Componentes/BotonGenero";
import Torneo from "../Componentes/Torneo";
import { torneos } from "../../BBDD/TorneosBBDD";
import "../style/Torneos.css";
import { Link } from "react-router-dom";

export default function Torneos() {
    const [width, setWidth] = useState(0);
    const [gender, setGender] = useState("Masc");

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
                        {torneos.map((tournament) => {
                            if (tournament.categoria === "Masculino") {
                                return (
                                    <Link to={tournament.id}>
                                        <Torneo ID={tournament.id} />
                                    </Link>
                                );
                            }
                        })}
                    </div>
                    <div className="TorneosGenero">
                        {torneos.map((tournament) => {
                            if (tournament.categoria === "Femenino") {
                                return (
                                    <Link to={tournament.id}>
                                        <Torneo ID={tournament.id} />
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
                            if (gender === "Masc") {
                                setGender("Fem");
                            } else {
                                setGender("Masc");
                            }
                        }}
                    >
                        <BotonGenero clase={gender} />
                    </button>
                    {torneos.map((x) => {
                        let control =
                            gender === "Masc" ? "Masculino" : "Femenino";
                        if (x.categoria === control) {
                            return (
                                <Link to={x.id}>
                                    <Torneo ID={x.id} />
                                </Link>
                            );
                        }
                    })}
                </div>
            </>
        );
    }
}
