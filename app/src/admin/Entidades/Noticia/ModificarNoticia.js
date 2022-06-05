import React from "react";
import "../../style/CrearRecurso.css";
import "../../../user/style/Global.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import useNoticia from "../../../shared/Noticia/useNoticia";
import { useForm } from "react-hook-form";
import api from "../../../api";

export default function ModificarNoticia() {
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  const { noticias } = useNoticia();
  const noticia = noticias.find((noticia) => noticia.id === parseInt(id));
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await api.put(`/noticias/${noticia.id}`, data);
      navigate("/admin/recursos/noticias");
      window.location.reload();
    } catch (err) {
      alert("Error al modificar la noticia");
    }
  };

  return (
    <>
      <h1 className="TituloAdmin">PadelNow - MODIFICAR Noticia</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="CreaRecursoCard">
        <h1 className="CenterAlign">
          Rellene únicamente los datos a modificar de la noticia
        </h1>

        <div className="IncidenciaTop">
          <div className="InputStyle">
            <input
              required
              defaultValue={noticia.titulo}
              {...register("titulo")}
              type="text"
              id="Title"
              placeholder={`Título: ${noticia.titulo}`}
            />
          </div>
          <div className="InputStyle">
            <input
              type="text"
              id="Subtitle"
              defaultValue={noticia.subtitulo}
              {...register("subtitulo")}
              placeholder={`Título: ${noticia.subtitulo}`}
            />
          </div>
        </div>
        <div className="IncidenciaTop">
          <div className="InputStyle DateInput">
            <p className="m-0">Fecha</p>
            <input
              type="date"
              id="Date"
              defaultValue={noticia.fecha}
              {...register("fecha")}
            />
          </div>
        </div>
        <div className="IncidenciaTop">
          <div className="InputStyle">
            <input
              required
              placeholder={"URL del video: " + noticia.video}
              type="text"
              id="Video"
              defaultValue={noticia.video}
              {...register("video")}
            />
          </div>
          <div className="InputStyle">
            <input
              type="text"
              id="PhotoURL"
              placeholder={"URL de la foto: " + noticia.foto}
              defaultValue={noticia.foto}
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
              placeholder={"Cuerpo de la Noticia: " + noticia.cuerpo}
              defaultValue={noticia.cuerpo}
              {...register("cuerpo")}
            />
          </div>
        </div>
        <button className="BotonConFondo">Modificar Noticia</button>
        <Link to="/admin/recursos/noticias" className="SimpleButton">
          Cancelar
        </Link>
      </form>
    </>
  );
}
