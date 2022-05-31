import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./style/Login.css";
import api from "../api";
import useAuth from "./hooks/useAuth";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const {logged, setLogged} = useAuth();

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const {data} = await api.post("/login", {
                username, password
            }, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            });
            const {accessToken} = data;
            localStorage.setItem("accessToken", accessToken);
            setLogged(true);
        } catch (e) {
            setError(true);
        }

    };

    return (
        <div className="Login">
            <form className="ConLogin">
                <div className="CentralLogin">
                    <h2 className="LoginTitle">Login</h2>
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
                    <p className="ErrorMessage">{error && "Error al iniciar sesión, verifique sus credenciales"}</p>
                </div>
                <button
                    type="submit"
                    onClick={onSubmit}
                    className="LoginButton"
                >
                    Iniciar sesión
                </button>
            </form>
            <Link to="/" className="SinLogin">
                Acceder sin iniciar sesión
            </Link>
        </div>
    );
}
