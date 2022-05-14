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
            <input type="text" id="Search" placeholder="Buscar..." />
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
            <img className="Menu" src="menuButton.svg" alt="Botón Menu"></img>
          </button>
        </div>
      </div>
      <div
        className={clase}
        onMouseEnter={() => setClase("Desplegable")}
        onMouseLeave={() => setClase("noDisplay")}
      >
        <div className="DesplegableTop">
          <button className="DesplegableTitles">Partidos</button>
          <button className="DesplegableTitles">Parejas</button>
          <button className="DesplegableTitles">Circuitos</button>
          <button className="DesplegableTitles">Torneos</button>
        </div>
          <div className="SepHor"></div>
        <div className="DesplegableBottom">
          <button className="DesplegableTitles">Modo Claro</button>
          <button className="DesplegableTitles">Sobre Nosotros</button>
          <button className="DesplegableTitles">Enviar Incidencia</button>
        </div>
      </div>
    </>
  );
}
