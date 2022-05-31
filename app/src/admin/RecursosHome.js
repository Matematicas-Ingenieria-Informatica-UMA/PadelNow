import React from "react";
import {Link, Redirect, useLocation} from "wouter";

import "./style/Recursos.css";
import useAuth from "./hooks/useAuth";

export default function RecursosHome() {

    const {logged, setLogged} = useAuth();
    const [, setLocation] = useLocation();

    const logout = () => {
        localStorage.removeItem("accessToken");
        setLogged(false);
    }

    if (!logged) return <Redirect to={"/"}/>


    return (
        <>
            <div className="AdminHeader">
                <h1 className="TituloAdmin">PadelNow</h1>
                <button className="LogoutButton" type="button" onClick={logout}>Cerrar sesión</button>
            </div>
            <div className="Recursos">
                <Link to="/jugadores">
                    <button className="RecursosButton">Jugador</button>
                </Link>
                <Link to="/parejas">
                    <button className="RecursosButton">Pareja</button>
                </Link>
                <Link to="/partidos">
                    <button className="RecursosButton">Partido</button>
                </Link>
                <Link to="/noticias">
                    <button className="RecursosButton">Noticia</button>
                </Link>
                <Link to="/torneos">
                    <button className="RecursosButton">Torneo</button>
                </Link>
            </div>
        </>
    );
}
