import React from "react";

import JugadorCRUD from "./JugadorCRUD";

import "./Jugadores.css";

export default function JugadorAdmin() {
    return (
        <div className="Jugadores">
            <div className="JugadoresGenero">
                <JugadorCRUD></JugadorCRUD>
                <JugadorCRUD></JugadorCRUD>
                <JugadorCRUD></JugadorCRUD>
                <JugadorCRUD></JugadorCRUD>
            </div>
            <div className="JugadoresGenero">
                <JugadorCRUD></JugadorCRUD>
                <JugadorCRUD></JugadorCRUD>
                <JugadorCRUD></JugadorCRUD>
            </div>
        </div>
    );
}