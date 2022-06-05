import React, { useEffect, useState } from "react";
import Generos from "../Componentes/Generos";
import JugadorMiniatura from "../Componentes/JugadorMiniatura";
import BotonGenero from "../Componentes/BotonGenero";
import "../style/Jugadores.css";
import useJugador from "../../shared/Jugador/useJugador";

export default function Jugadores(props) {
    const [width, setWidth] = useState(0);
    const [gender, setGender] = useState("Masc");
    const { jugadores } = useJugador();

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
                        {jugadores
                            .filter((j) => j.sexo === "MASCULINO")
                            .map((jugador) => (
                                <JugadorMiniatura jugador={jugador} />
                            ))}
                    </div>
                    <div className="JugadoresGenero">
                        {jugadores
                            .filter((j) => j.sexo === "FEMENINO")
                            .map((jugador) => (
                                <JugadorMiniatura jugador={jugador} />
                            ))}
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
                    {jugadores.map((jugador) => {
                        let control =
                            gender === "Masc" ? "MASCULINO" : "FEMENINO";
                        if (jugador.sexo === control) {
                            return (
                                <JugadorMiniatura
                                    jugador={jugador}
                                ></JugadorMiniatura>
                            );
                        }
                    })}
                </div>
            </>
        );
    }
}
