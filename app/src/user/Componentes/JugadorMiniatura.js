import React from "react";
import { useState } from "react";
import { Paises } from "../../assets/Paises";
import BrazoDominante from "../../assets/BrazoDominante";
import PosicionDeJuego from "../../assets/PosicionDeJuego";
import "../style/Jugador.css";
import { Link } from "react-router-dom";

export default function JugadorMiniatura({ jugador }) {
    const [clase, setClase] = useState("JugadorNoDisplay");
    const [boton, setBoton] = useState("JugadorVerMas JugadorFont");
    const formattedDate = new Date(jugador.fechaNacimiento).toLocaleDateString(
        "es-ES"
    );

    return (
        <>
            <div className="Jugador">
                <button>
                    <Link to={`/jugadores/${jugador.id}`}>
                        <img
                            src={jugador.foto}
                            className="Imagen"
                            alt={jugador.foto}
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
                            <h3>{formattedDate}</h3>
                        </div>
                        <div className="keyValue">
                            <h4>Nacionalidad</h4>
                            <div className="NacionalidadPerfil">
                                <img
                                    src={`https://flagcdn.com/256x192/${jugador.pais}.png`}
                                    className="BanderaPerfil"
                                    alt={jugador.pais}
                                ></img>
                                <h3>{Paises[jugador.pais]}</h3>
                            </div>
                        </div>
                        <div className="keyValue">
                            <h4>Ciudad</h4>
                            <h3>{jugador.ciudad}</h3>
                        </div>
                        <div className="keyValue">
                            <h4>Ranking</h4>
                            <h3>.</h3>
                        </div>
                        <div className="keyValue">
                            <h4>Brazo Dominante</h4>
                            <h3>{BrazoDominante[jugador.brazoDominante]}</h3>
                        </div>
                        <div className="keyValue">
                            <h4>Compañerx</h4>
                            <h3>.</h3>
                        </div>
                        <div className="keyValue">
                            <h4>Altura</h4>
                            <h3>{jugador.altura}</h3>
                        </div>
                        <div className="keyValue">
                            <h4>Posición</h4>
                            <h3>{PosicionDeJuego[jugador.posicionDeJuego]}</h3>
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
