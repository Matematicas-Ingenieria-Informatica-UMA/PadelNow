import React from "react";
import PartidoCRUD from "./PartidoCRUD.js";
import "./Partidos.css";

export default function PartidoAdmin() {
    return (
        <div className="Partidos">
            <div className="PartidosGenero">
                <PartidoCRUD></PartidoCRUD>
                <PartidoCRUD></PartidoCRUD>
                <PartidoCRUD></PartidoCRUD>
                <PartidoCRUD></PartidoCRUD>
            </div>
            <div className="PartidosGenero">
                <PartidoCRUD></PartidoCRUD>
                <PartidoCRUD></PartidoCRUD>
                <PartidoCRUD></PartidoCRUD>
                <PartidoCRUD></PartidoCRUD>
            </div>
        </div>
    );
}
