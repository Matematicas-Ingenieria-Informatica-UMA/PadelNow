import React, { useEffect, useState } from "react";
import Partido from "../Componentes/Partido.js";
import Generos from "../Componentes/Generos.js";
import BotonGenero from "../Componentes/BotonGenero.js";
import "../style/Partidos.css";

import { partidos } from "../../BBDD/PartidosBBDD.js";
import { Link } from "react-router-dom";

export default function Partidos() {
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
    if (width > 1100) {
        return (
            <>
                <Generos />
                <div className="Partidos">
                    <div className="PartidosGenero">
                        {partidos.map((match) => {
                            if (match.genero === "Masculino") {
                                return (
                                    <button>
                                        <Link to={match.id}>
                                            <Partido ID={match.id} />
                                        </Link>
                                    </button>
                                );
                            }
                        })}
                    </div>
                    <div className="PartidosGenero">
                        {partidos.map((match) => {
                            if (match.genero === "Femenino") {
                                return (
                                    <button>
                                        <Link to={match.id}>
                                            <Partido ID={match.id} />
                                        </Link>
                                    </button>
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
                <div className="PartidosResposive">
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
                    {partidos.map((match) => {
                        let control =
                            gender === "Masc" ? "Masculino" : "Femenino";
                        if (match.genero === control) {
                            return (
                                <button>
                                    <Link to={match.id}>
                                        <Partido ID={match.id} />
                                    </Link>
                                </button>
                            );
                        }
                    })}
                </div>
            </>
        );
    }
}
