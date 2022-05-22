import React from "react";
import MiniaturaCRUD from "./MiniaturaCRUD";
import { Link, useLocation } from "wouter";
import { noticias } from "../../../BBDD/NoticiasBBDD";
import "./Noticias.css";

export default function NoticiaAdmin() {
    const [location, setLocation] = useLocation();

    return (
        <>
            <div className="BotonesAdmin">
                <Link to={`${location}/crear`}>
                    <button className="mt-15 BotonConFondo">
                        Nueva Noticia
                    </button>
                </Link>
                <Link to="/admin/recursos">
                    <button className="mt-15 BotonConFondo">Volver</button>
                </Link>
            </div>
            <div className="NoticiaAdmin">
                {noticias.map((x) => {
                    return <MiniaturaCRUD ID={x.id} />;
                })}
            </div>
            <Link to="/admin/recursos">
                <button className="mt-15 mb-15 SimpleButton">Volver</button>
            </Link>
        </>
    );
}
