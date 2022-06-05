import React, { useEffect, useState } from "react";
import { jugadores } from "../../BBDD/JugadoresBBDD";
import Generos from "../Componentes/Generos";

import JugadorMiniatura from "../Componentes/JugadorMiniatura";
import BotonGenero from "../Componentes/BotonGenero";

import "../style/Jugadores.css";

export default function Jugadores(props) {
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

    if (width > 700) {
        return (
            <>
                <Generos />
                <div className="Jugadores">
                    <div className="JugadoresGenero">
                        {jugadores.map((x) => {
                            if (x.genero === "Masculino") {
                                return (
                                    <JugadorMiniatura
                                        ID={x.id}
                                    ></JugadorMiniatura>
                                );
                            }
                        })}
                    </div>
                    <div className="JugadoresGenero">
                        {jugadores.map((x) => {
                            if (x.genero === "Femenino") {
                                return (
                                    <JugadorMiniatura
                                        ID={x.id}
                                    ></JugadorMiniatura>
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
                    {jugadores.map((x) => {
                        let control =
                            gender === "Masc" ? "Masculino" : "Femenino";
                        if (x.genero === control) {
                            return (
                                <JugadorMiniatura ID={x.id}></JugadorMiniatura>
                            );
                        }
                    })}
                </div>
            </>
        );
    }
}
