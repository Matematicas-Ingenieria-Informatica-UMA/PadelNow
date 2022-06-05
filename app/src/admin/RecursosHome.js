import React from "react";

import "./style/Recursos.css";
import useAuth from "./auth/useAuth";
import { Link, Navigate } from "react-router-dom";

export default function RecursosHome() {
  const { logged, setLogged } = useAuth();

  const logout = () => {
    localStorage.removeItem("accessToken");
    setLogged(false);
  };

  if (!logged) return <Navigate to="/admin" />;

  return (
    <>
      <div className="AdminHeader">
        <h1 className="TituloAdmin">PadelNow</h1>
        <button className="LogoutButton" type="button" onClick={logout}>
          Cerrar sesión
        </button>
      </div>
      <div className="Recursos">
        <Link to="jugadores" className="RecursosButton">
          Jugador
        </Link>
        <Link to="parejas" className="RecursosButton">
          Pareja
        </Link>
        <Link to="partidos" className="RecursosButton">
          Partido
        </Link>
        <Link to="noticias" className="RecursosButton">
          Noticia
        </Link>
        <Link to="torneos" className="RecursosButton">
          Torneo
        </Link>
      </div>
    </>
  );
}
