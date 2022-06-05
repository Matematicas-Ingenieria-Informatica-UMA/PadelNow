import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../../style/CrearRecurso.css";
import "../../../user/style/Global.css";
import api from "../../../api";

export default function CrearNoticia() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      await api.post("/noticias", data);
      navigate("/admin/recursos/noticias");
      window.location.reload();
    } catch (err) {
      alert("Error al crear la noticia");
    }
  };

  return (
    <>
      <h1 className="TituloAdmin">PadelNow - CREAR Noticia</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="CreaRecursoCard">
        <h1 className="CenterAlign">Rellene los datos de la noticia</h1>

        <div className="IncidenciaTop">
          <div className="InputStyle">
            <input
              required
              {...register("titulo")}
              type="text"
              id="Title"
              placeholder="Título"
            />
          </div>
          <div className="InputStyle">
            <input
              type="text"
              id="Subtitle"
              placeholder="Subtítulo"
              {...register("subtitulo")}
            />
          </div>
        </div>
        <div className="IncidenciaTop">
          <div className="InputStyle DateInput">
            <p className="m-0">Fecha</p>
            <input type="date" id="Date" {...register("fecha")} />
          </div>
        </div>
        <div className="IncidenciaTop">
          <div className="InputStyle">
            <input
              placeholder={"URL del video: "}
              {...register("video")}
              type="text"
              id="Video"
            />
          </div>
          <div className="InputStyle">
            <input
              type="text"
              id="PhotoURL"
              placeholder="URL de la foto"
              {...register("foto")}
            />
          </div>
        </div>
        <div className="IncidenciaTop">
          <div className="InputStyle">
            <input
              required
              type="text"
              id="Body"
              placeholder="Cuerpo de la Noticia"
              {...register("cuerpo")}
            />
          </div>
        </div>
        <button type="submit" className="BotonConFondo">
          Crear Noticia
        </button>
        <Link to="/admin/recursos/noticias" className="SimpleButton">
          Cancelar
        </Link>
      </form>
    </>
  );
}
