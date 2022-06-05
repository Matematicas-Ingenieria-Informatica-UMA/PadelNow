import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../style/Header.css";
import "../style/Global.css";
import Logo from "./Logo.js";
// import Jugadores from "../Vistas/Jugadores.js";

export default function Header() {
  const [clase, setClase] = useState("noDisplay");
  const [search, setSearch] = useState("");
  const [claseSearch, setClaseSearch] = useState("noDisplay");
  return (
    <>
      <div className="Header">
        <Link className="TitleHeader" to="/">
          <Logo></Logo>
          <h2 className="Title">PadelNow</h2>
        </Link>
        <div className="Navigate">
          <div className="SearchWithDesplegable">
            <div className="Search">
              <img src="/lense.svg" alt="Search" />
              <input
                type="text"
                id="Search"
                placeholder="Buscar..."
                className="SearchInput"
                value={search}
                onChange={(e) => {
                  if (e.target.value.length >= 3) {
                    setClaseSearch("DesplegableSearch");
                  } else {
                    setClaseSearch("noDisplay");
                  }
                  setSearch(e.target.value);
                }}
              />
            </div>
            <div className={claseSearch}>
              <h4>hola</h4>
              <h4>hola</h4>
              <h4>hola</h4>
            </div>
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
          <Link to="/partidos" className="DesplegableTitles">
            Últimos Partidos
          </Link>
          <Link to="/jugadores" className="DesplegableTitles">
            Ver Jugadores
          </Link>
          <Link to="/parejas" className="DesplegableTitles">
            Ver Parejas
          </Link>
          <Link to="/torneos" className="DesplegableTitles">
            Ver Torneos
          </Link>
          <Link to="/noticias" className="DesplegableTitles">
            Todas las Noticias
          </Link>
        </div>
        <div className="HeaderSepHor"></div>
        <div className="DesplegableBottom">
          <button className="DesplegableTitles">Modo Claro</button>
          <Link to="/enviarincidencia" className="DesplegableTitles">
            Enviar Incidencia
          </Link>
        </div>
      </div>
    </>
  );
}
