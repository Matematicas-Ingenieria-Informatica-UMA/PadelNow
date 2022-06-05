import React, { useEffect, useState } from "react";
import ParejaMiniatura from "../Componentes/ParejaMiniatura.js";
import Generos from "../Componentes/Generos.js";
import BotonGenero from "../Componentes/BotonGenero.js";

import "../style/Parejas.css";
import { Link } from "react-router-dom";
import usePareja from "../../shared/Pareja/usePareja.js";
export default function Parejas() {
    const [width, setWidth] = useState(0);
    const [gender, setGender] = useState("Masculino");
    const { parejas } = usePareja();
    useEffect(() => {
        const updateWidth = () => {
            const x = document.body.clientWidth;
            setWidth(x);
        };
        updateWidth();
        window.addEventListener("resize", updateWidth);
    }, [width]);
    if (width < 700) {
        return (
            <>
                <div className="ParejasResposive">
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
                    {parejas
                        .filter((p) => {
                            let control =
                                gender === "Masculino"
                                    ? "MASCULINO"
                                    : "FEMENINO";
                            return p.genero === control;
                        })
                        .map((pareja, index) => (
                            <ParejaMiniatura
                                pareja={pareja}
                                ranking={index + 1}
                            />
                        ))}
                </div>
            </>
        );
    } else {
        return (
            <>
                <Generos />
                <div className="Parejas">
                    <div className="ParejasGenero">
                        {parejas
                            .filter((p) => p.genero === "MASCULINO")
                            .map((pareja, index) => (
                                <ParejaMiniatura
                                    pareja={pareja}
                                    ranking={index + 1}
                                />
                            ))}
                    </div>
                    <div className="ParejasGenero">
                        {parejas
                            .filter((p) => p.genero === "FEMENINO")
                            .map((pareja, index) => (
                                <ParejaMiniatura
                                    pareja={pareja}
                                    ranking={index + 1}
                                />
                            ))}
                    </div>
                </div>
            </>
        );
    }
}
