import React, { useEffect, useState } from "react";
import ParejaMiniatura from "../Componentes/ParejaMiniatura.js";
import Generos from "../Componentes/Generos.js";
import BotonGenero from "../Componentes/BotonGenero.js";

import { parejas } from "../../BBDD/ParejasBBDD.js";

import "../style/Parejas.css";
import { Link } from "react-router-dom";
export default function Parejas() {
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
    if (width < 700) {
        return (
            <>
                <div className="ParejasResposive">
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
                    {parejas.map((pareja) => {
                        let control =
                            gender === "Masc" ? "Masculino" : "Femenino";
                        if (pareja.Genero === control) {
                            return (
                                <button>
                                    <Link to={pareja.id}>
                                        <ParejaMiniatura ID={pareja.id} />
                                    </Link>
                                </button>
                            );
                        }
                    })}
                </div>
            </>
        );
    } else {
        return (
            <>
                <Generos />
                <div className="Parejas">
                    <div className="ParejasGenero">
                        {parejas.map((pareja) => {
                            if (pareja.Genero === "Masculino") {
                                return (
                                    <button>
                                        <Link to={pareja.id}>
                                            <ParejaMiniatura ID={pareja.id} />
                                        </Link>
                                    </button>
                                );
                            }
                        })}
                    </div>
                    <div className="ParejasGenero">
                        {parejas.map((pareja) => {
                            if (pareja.Genero === "Femenino") {
                                return (
                                    <button>
                                        <Link to={pareja.id}>
                                            <ParejaMiniatura ID={pareja.id} />
                                        </Link>
                                    </button>
                                );
                            }
                        })}
                    </div>
                </div>
            </>
        );
    }
}
