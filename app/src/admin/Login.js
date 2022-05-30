import React, { useState } from "react";
import { Link } from "wouter";
import "./style/Login.css";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
    };

    return (
        <div className="Login">
            <form className="ConLogin">
                <h2 className="LoginTitle">Login</h2>
                <div className="CentralLogin">
                    <input
                        type="text"
                        placeholder="Username"
                        className="InputLogin"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Contraseña"
                        className="InputLogin"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="OlvContra">¿Olvidaste la contraseña?</div>
                </div>
                <button
                    type="submit"
                    onClick={onSubmit}
                    className="LoginButton"
                >
                    Iniciar sesión
                </button>
            </form>
            <Link to="/">
                <div className="SinLogin">Acceder sin iniciar sesión</div>
            </Link>
        </div>
    );
}
