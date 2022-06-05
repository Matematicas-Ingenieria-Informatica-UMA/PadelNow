import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../../style/CrearRecurso.css";
import "../../../user/style/Global.css";
import { Paises } from "../../../assets/Paises";
import api from "../../../api";

export default function CrearJugador() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      await api.post("/jugadores", data);
      navigate("/admin/recursos/jugadores");
      window.location.reload();
    } catch (err) {
      alert("Error al crear el jugador");
    }
  };

  return (
    <>
      <h1 className="TituloAdmin">PadelNow - CREAR JUGADOR</h1>
      <form className="CreaRecursoCard" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="CenterAlign">Inserte los datos del nuevo jugador</h1>
        <div className="IncidenciaTop">
          <div className="InputStyle DataInput">
            <img src="/Profile.svg" alt="Profile" />
            <input required type="text" id="Name" {...register("nombre")} />
          </div>
          <div className="InputStyle DataInput">
            <input
              required
              type="text"
              id="Surnames"
              {...register("apellidos")}
            />
          </div>
        </div>
        <div className="IncidenciaTop">
          <div className="InputStyle DateInput">
            <p className="m-0">Fecha de Nacimiento</p>
            <input type="date" id="Birth" {...register("fechaNacimiento")} />
          </div>
          <select
            name="Gender"
            id="Gender"
            className="DesplegableRecurso"
            {...register("sexo")}
          >
            <option disabled>Selecciona el género</option>

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
              placeholder="Ciudad"
              type="text"
              id="City"
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
          >
            <option disabled>Selecciona el brazo dominante</option>

            <option>DIESTRO</option>

            <option>ZURDO</option>
          </select>
        </div>
        <div className="IncidenciaTop">
          <select
            name="Position"
            id="Position"
            className="DesplegableRecurso"
            {...register("posicionDeJuego")}
          >
            <option disabled>Selecciona la posición</option>

            <option>REVES</option>

            <option>DERECHA</option>
          </select>
        </div>
        <button type="submit" className="BotonConFondo">
          Crear Jugador
        </button>
        <Link to="/admin/recursos/jugadores" className="SimpleButton">
          Cancelar
        </Link>
      </form>
    </>
  );
}
