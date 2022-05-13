import React, { useState } from "react";
import "../style/Header.css";
import "../style/Global.css";
import Logo from "./Logo.js";

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
                        />
                    </div>
                    <button
                        onMouseEnter={() => setClase("Desplegable")}
                        onMouseLeave={() => setClase("noDisplay")}
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
                DESPLEGABLE
            </div>
        </>
    );
}
