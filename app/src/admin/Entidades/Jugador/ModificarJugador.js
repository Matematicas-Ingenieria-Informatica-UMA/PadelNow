import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../../style/CrearRecurso.css";
import "../../../user/style/Global.css";
import useJugador from "../../../shared/Jugador/useJugador";
import { useForm } from "react-hook-form";
import { Paises } from "../../../assets/Paises";
import api from "../../../api";

export default function ModificarJugador() {
  const { jugadores } = useJugador();
  const { id } = useParams();
  const navigate = useNavigate();
  const jugador = jugadores.find((x) => x.id === parseInt(id));
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    try {
      await api.put("jugadores/" + id, data);
      navigate("/admin/recursos/jugadores");
      window.location.reload();
    } catch (err) {
      alert("Error al modificar el jugador");
    }
  };

  return (
    <>
      <h1 className="TituloAdmin">PadelNow - MODIFICAR JUGADOR</h1>

      <form className="CreaRecursoCard" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="CenterAlign">
          Rellene únicamente los datos del jugador a modificar
        </h1>
        <div className="IncidenciaTop">
          <div className="InputStyle DataInput">
            <img src="/Profile.svg" alt="Profile" />
            <input
              required
              type="text"
              id="Name"
              defaultValue={jugador.nombre}
              {...register("nombre")}
            />
          </div>
          <div className="InputStyle DataInput">
            <input
              required
              type="text"
              id="Surnames"
              defaultValue={jugador.apellidos}
              {...register("apellidos")}
            />
          </div>
        </div>
        <div className="IncidenciaTop">
          <div className="InputStyle DateInput">
            <p className="m-0">Fecha de Nacimiento</p>
            <input
              type="date"
              id="Birth"
              {...register("fechaNacimiento")}
              defaultValue={jugador.fechaNacimiento}
            />
          </div>
          <select
            name="Gender"
            id="Gender"
            className="DesplegableRecurso"
            {...register("sexo")}
            defaultValue={jugador.sexo}
          >
            <option disabled>Selecciona el género ({jugador.sexo})</option>

            <option>MASCULINO</option>

            <option>FEMENINO</option>
          </select>
        </div>
        <div className="IncidenciaTop">
          <select
            type="text"
            className="DesplegableRecurso"
            id="Nationality"
            defaultValue={`Nacionalidad`}
            {...register("pais")}
          >
            {Object.entries(Paises).map(([k, v]) => (
              <option value={k}>{v}</option>
            ))}
          </select>

          <div className="InputStyle DataInput">
            <input
              required
              type="text"
              id="City"
              placeholder={`Ciudad: (${jugador.ciudad})`}
              {...register("ciudad")}
            />
          </div>
        </div>
        <div className="IncidenciaTop">
          <select
            name="Dominant"
            id="Dominant"
            className="DesplegableRecurso"
            {...register("brazoDominante")}
            defaultValue={jugador.brazoDominante}
          >
            <option disabled>Selecciona el brazo dominante</option>

            <option>DIESTRO</option>

            <option>ZURDO</option>
          </select>
          <div className="InputStyle DataInput">
            <input
              type="url"
              id="PhotoURL"
              placeholder={`${jugador.foto}`}
              {...register("foto")}
            />
          </div>
        </div>
        <div className="IncidenciaTop">
          <select
            name="Position"
            id="Position"
            className="DesplegableRecurso"
            defaultValue={jugador.posicionDeJuego}
            {...register("posicionDeJuego")}
          >
            <option disabled>Selecciona la posición</option>

            <option>REVES</option>

            <option>DERECHA</option>
          </select>
        </div>
        <button type="submit" className="BotonConFondo">
          Modificar Jugador
        </button>
        <Link to="/admin/recursos/jugadores" className="SimpleButton">
          Cancelar
        </Link>
      </form>
    </>
  );
}
