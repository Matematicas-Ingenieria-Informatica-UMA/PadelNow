import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./style/Login.css";
import api from "../api";
import useAuth from "./auth/useAuth";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const { logged, setLogged } = useAuth();

  const onSubmit = async (credentials) => {
    try {
      const { data } = await api.post("/login", credentials, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const { accessToken } = data;
      localStorage.setItem("accessToken", accessToken);
      setLogged(true);
    } catch (e) {
      alert("Error al iniciar sesión");
    }
  };

  if (logged) return <Navigate to={"recursos"} />;

  return (
    <>
      <h1 className="TituloAdmin">PadelNow</h1>
      <div className="Login">
        <form className="ConLogin" onSubmit={handleSubmit(onSubmit)}>
          <div className="CentralLogin">
            <h2 className="LoginTitle">Login</h2>
            <input
              type="text"
              placeholder="Username"
              className="InputLogin"
              {...register("username")}
            />
            <input
              type="text"
              placeholder="Contraseña"
              className="InputLogin"
              {...register("password")}
            />
          </div>
          <button type="submit" className="LoginButton">
            Iniciar sesión
          </button>
        </form>
        <Link to="/" className="SinLogin">
          Acceder sin iniciar sesión
        </Link>
      </div>
    </>
  );
}
