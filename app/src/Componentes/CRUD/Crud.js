import React from "react";
import { Link } from "wouter";

import "../../style/CRUD/Crud.css";

export default function Crud() {
    return (
        <>
            <div className="Crud">
                <Link to="/admin/crud/create">
                    <button className="CrudButton">Crear Recurso</button>
                </Link>
                <Link to="/admin/crud/modify">
                    <button className="CrudButton">Modificar Recurso</button>
                </Link>
                <Link to="/admin/crud/read">
                    <button className="CrudButton">Leer Recursos</button>
                </Link>
                <Link to="/admin/crud/delete">
                    <button className="CrudButton">Eliminar Recurso</button>
                </Link>
                <Link to="/admin">
                    <button className="CrudNoButton">Cerrar Sesión</button>
                </Link>
            </div>
        </>
    );
}
