import React from "react";
import { Link } from "wouter";
import "../style/Login.css";

export default function Login() {
    return (
        <div className="Login">
            <div className="ConLogin">
                <h2 className="LoginTitle">Login</h2>
                <div className="CentralLogin">
                    <input
                        type="text"
                        placeholder="Email"
                        className="InputLogin"
                    />
                    <input
                        type="text"
                        placeholder="Contraseña"
                        className="InputLogin"
                    />
                    <div className="OlvContra">¿Olvidaste la contraseña?</div>
                </div>
                <Link to="/admin/crud">
                    <div className="LoginButton">Iniciar sesión</div>
                </Link>
            </div>
            <Link to="/">
                <div className="SinLogin">Acceder sin iniciar sesión</div>
            </Link>
        </div>
    );
}
