import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "../style/Header.css";
import "../style/Global.css";
import Logo from "./Logo.js";
// import Jugadores from "../Vistas/Jugadores.js";

export default function Header() {
    const [clase, setClase] = useState("noDisplay");
    return (
        <>
            <div className="Header">
                <div className="TitleHeader">
                    <Logo></Logo>
                    <h2 className="Title">PadelNow</h2>
                </div>
                <div className="Navigate">
                    <div className="Search">
                        <img src="/lense.svg" alt="Search" />
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
                    <button
                        className="DesplegableTitles"
                        // onClick={() => (
                        //     <Router>
                        //         <Switch>
                        //             <Route exact path="/Jugadores">
                        //                 <Jugadores />
                        //             </Route>
                        //         </Switch>
                        //     </Router>
                        // )}
                    >
                        Partidos
                    </button>
                    <button className="DesplegableTitles">Parejas</button>
                    <button className="DesplegableTitles">Circuitos</button>
                    <button className="DesplegableTitles">Torneos</button>
                </div>
                <div className="SepHor"></div>
                <div className="DesplegableBottom">
                    <button className="DesplegableTitles">Modo Claro</button>
                    <button className="DesplegableTitles">
                        Sobre Nosotros
                    </button>
                    <button className="DesplegableTitles">
                        Enviar Incidencia
                    </button>
                </div>
            </div>
        </>
    );
}
