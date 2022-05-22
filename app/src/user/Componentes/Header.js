import React, { useState } from "react";
import { Route, Switch, Link } from "wouter";

import "../style/Header.css";
import "../style/Global.css";
import Logo from "./Logo.js";
// import Jugadores from "../Vistas/Jugadores.js";

export default function Header() {
    const [clase, setClase] = useState("noDisplay");
    return (
        <>
            <div className="Header">
                <Link to="/">
                    <div className="TitleHeader">
                        <Logo></Logo>
                        <h2 className="Title">PadelNow</h2>
                    </div>
                </Link>
                <div className="Navigate">
                    <div className="Search">
                        <Link to="/admin">
                            <img src="/lense.svg" alt="Search" />
                        </Link>
                        <input
                            type="text"
                            id="Search"
                            placeholder="Buscar..."
                            className="SearchInput"
                        />
                    </div>
                    <button
                        onMouseEnter={() => setClase("Desplegable")}
                        onMouseLeave={() => setClase("noDisplay")}
                        onClick={() => {
                            if (clase === "Desplegable") {
                                setClase("noDisplay");
                            } else {
                                setClase("Desplegable");
                            }
                        }}
                    >
                        <img
                            className="Menu"
                            src="menuButton.svg"
                            alt="Botón Menu"
                        ></img>
                    </button>
                </div>
            </div>
            <div
                className={clase}
                onMouseEnter={() => setClase("Desplegable")}
                onMouseLeave={() => setClase("noDisplay")}
            >
                <div className="DesplegableTop">
                    <Link to="/partidos">
                        <button className="DesplegableTitles">
                            Últimos Partidos
                        </button>
                    </Link>
                    <Link to="/jugadores">
                        <button className="DesplegableTitles">
                            Ver Jugadores
                        </button>
                    </Link>
                    <Link to="/parejas">
                        <button className="DesplegableTitles">
                            Ver Parejas
                        </button>
                    </Link>
                    <Link to="/torneos">
                        <button className="DesplegableTitles">
                            Ver Torneos
                        </button>
                    </Link>
                    <Link to="/noticias">
                        <button className="DesplegableTitles">
                            Todas las Noticias
                        </button>
                    </Link>
                </div>
                <div className="HeaderSepHor"></div>
                <div className="DesplegableBottom">
                    <button className="DesplegableTitles">Modo Claro</button>
                    <Link to="/enviarincidencia">
                        <button className="DesplegableTitles">
                            Enviar Incidencia
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}
