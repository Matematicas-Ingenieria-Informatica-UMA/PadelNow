import React from "react";
import ParejaCRUD from "./ParejaCRUD.js";
import "./Parejas.css";

export default function ParejaAdmin() {
    return (
        <div className="Parejas">
            <div className="ParejasGenero">
                <ParejaCRUD></ParejaCRUD>
                <ParejaCRUD></ParejaCRUD>
                <ParejaCRUD></ParejaCRUD>
                <ParejaCRUD></ParejaCRUD>
            </div>
            <div className="ParejasGenero">
                <ParejaCRUD></ParejaCRUD>
                <ParejaCRUD></ParejaCRUD>
                <ParejaCRUD></ParejaCRUD>
                <ParejaCRUD></ParejaCRUD>
            </div>
        </div>
    );
}
