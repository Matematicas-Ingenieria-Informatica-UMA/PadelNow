import React from "react";
import { useState } from "react";
import { paises } from "../../assets/paises";
import "../style/Jugador.css";
import useJugador from "../../shared/Jugador/useJugador";
import usePareja from "../../shared/Pareja/usePareja";
import { Link } from "react-router-dom";

export default function JugadorMiniatura(props) {
    const [clase, setClase] = useState("JugadorNoDisplay");
    const [boton, setBoton] = useState("JugadorVerMas JugadorFont");
    const { parejas } = usePareja();
    const { jugadores } = useJugador();
    const jugador = jugadores.find((x) => x.id === props.ID);

    return (
        <>
            <div className="Jugador">
                <button>
                    <Link to={jugador.id}>
                        <img
                            src={jugador.URL}
                            className="Imagen"
                            alt="ProfilePhoto"
                        ></img>
                    </Link>
                </button>

                <div>
                    <div className="JugadorSepHor"></div>
                    <h1 className="Nombre">
                        {jugador.nombre.toUpperCase() +
                            " " +
                            jugador.apellidos.toUpperCase()}
                    </h1>
                    <div className="JugadorSepHor"></div>
                    <div className={clase}>
                        <div className="keyValue">
                            <h4>Nacimiento</h4>
                            <h3>{jugador.nacimiento}</h3>
                        </div>
                        <div className="keyValue">
                            <h4>Nacionalidad</h4>
                            <div className="NacionalidadPerfil">
                                <img
                                    src={`https://flagcdn.com/256x192/${jugador.nacionalidad}.png`}
                                    className="BanderaPerfil"
                                    alt="Bandera País"
                                ></img>
                                <h3>{paises[jugador.nacionalidad]}</h3>
                            </div>
                        </div>
                        <div className="keyValue">
                            <h4>Ciudad</h4>
                            <h3>{jugador.ciudad}</h3>
                        </div>
                        <div className="keyValue">
                            <h4>Ranking</h4>
                            <h3>{jugador.ranking}</h3>
                        </div>
                        <div className="keyValue">
                            <h4>Brazo Dominante</h4>
                            <h3>{jugador.brazodominante}</h3>
                        </div>
                        <div className="keyValue">
                            <h4>Compañerx</h4>
                            <h3>{jugador.compañerx}</h3>
                        </div>
                        <div className="keyValue">
                            <h4>Altura</h4>
                            <h3>{jugador.altura}</h3>
                        </div>
                        <div className="keyValue">
                            <h4>Posición</h4>
                            <h3>{jugador.posicion}</h3>
                        </div>
                        <button
                            className="JugadorVerMas JugadorFont"
                            onClick={() => {
                                setClase("JugadorNoDisplay");
                                setBoton("JugadorVerMas JugadorFont");
                            }}
                        >
                            Ver Menos
                        </button>
                    </div>
                    <button
                        className={boton}
                        onClick={() => {
                            setClase("JugadorFont");
                            setBoton("JugadorNoDisplay");
                        }}
                    >
                        Ver Más
                    </button>
                </div>
            </div>
        </>
    );
}