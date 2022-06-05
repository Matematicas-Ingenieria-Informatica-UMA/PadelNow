import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Partido from "../Componentes/Partido.js";
import Generos from "../Componentes/Generos.js";
import BotonGenero from "../Componentes/BotonGenero.js";
import "../style/Partidos.css";
import usePartido from "../../shared/Partido/usePartido";
import Sexo from "../../assets/Sexo";

export default function Partidos() {
    const [width, setWidth] = useState(0);
    const [gender, setGender] = useState("Masculino");
    const { partidos } = usePartido();

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
                        {partidos
                            .filter((m) => Sexo[m.genero] === "Masculino")
                            .map((partido) => (
                                <Link to={partido.id}>
                                    <Partido partido={partido} />
                                </Link>
                            ))}
                    </div>
                    <div className="PartidosGenero">
                        {partidos
                            .filter((m) => Sexo[m.genero] === "Femenino")
                            .map((partido) => (
                                <Link to={partido.id}>
                                    <Partido partido={partido} />
                                </Link>
                            ))}
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
                            if (gender === "Masculino") {
                                setGender("Femenino");
                            } else {
                                setGender("Masculino");
                            }
                        }}
                    >
                        <BotonGenero clase={gender} />
                    </button>
                    {partidos.map((partido) => {
                        let control =
                            gender === "Masculino" ? "Masculino" : "Femenino";
                        if (Sexo[partido.genero] === control) {
                            return (
                                <Link to={partido.id}>
                                    <Partido partido={partido} />
                                </Link>
                            );
                        }
                    })}
                </div>
            </>
        );
    }
}
