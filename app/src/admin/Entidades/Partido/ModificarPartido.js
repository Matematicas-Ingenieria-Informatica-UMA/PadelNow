import React from "react";
import {Link} from "react-router-dom";

export default function ModificarPartido() {
    const datos = {
        id: 4,
        nombre: "WPT Master Final",
        fase: "Semifinales",
        pareja1: {Jugador1: "Julia Pérez", Jugador2: "María José García"},
        pareja2: {Jugador1: "Pepita", Jugador2: "Jaimita"},
        tiempo: "02:15:03",
        resultado: "2/6/6/4/6/1",
        fecha: "18/05/2022",
    };
    const [dia, mes, anyo] = datos.fecha.split("/");

    return (
        <>
            <h1 className="TituloAdmin">PadelNow - MODIFICAR PARTIDO</h1>
            <div className="CreaRecursoCard">
                <h1 className="CenterAlign">Rellene los datos del partido</h1>
                <div className="IncidenciaTop">
                    <select
                        required
                        id="Couple1"
                        name="Pareja1"
                        className="DesplegableRecurso"
                    >
                        <option disabled selected>
                            Selecciona una pareja ({datos.pareja1.Jugador1}-
                            {datos.pareja1.Jugador2})
                        </option>

                        <option>Lebrón-Galán</option>
                    </select>
                    <select
                        required
                        id="Couple2"
                        name="Pareja2"
                        className="DesplegableRecurso"
                    >
                        <option disabled selected>
                            Selecciona una pareja ({datos.pareja1.Jugador1}-
                            {datos.pareja1.Jugador2})
                        </option>

                        <option>Triay-Salazar</option>
                    </select>
                </div>
                <div className="IncidenciaTop">
                    <div className="InputStyle DateInput">
                        <p className="m-0">Fecha</p>
                        <input
                            required
                            type="date"
                            id="Date"
                            value={`${anyo}-${mes}-${dia}`}
                        />
                    </div>
                    <div className="InputStyle ">
                        <input
                            className="InputStyle"
                            required
                            type="text"
                            id="Result"
                            placeholder={datos.resultado}
                        />
                    </div>
                </div>
                <div className="IncidenciaTop">
                    <div className="InputStyle ">
                        <input required type="text" id="Winners" placeholder="Winners"/>
                    </div>
                    <div className="InputStyle DataInput">
                        <input
                            required
                            type="text"
                            id="Errors"
                            placeholder="Errores No Forzados"
                        />
                    </div>
                </div>
                <div className="IncidenciaTop">
                    <div className="InputStyle ">
                        <input
                            required
                            type="text"
                            id="Breaks"
                            placeholder="Bolas de Break"
                        />
                    </div>
                    <div className="InputStyle ">
                        <input required type="text" id="Smashes" placeholder="Smashes"/>
                    </div>
                </div>
                <div className="IncidenciaTop">
                    <div className="InputStyle ">
                        <input
                            required
                            type="text"
                            id="Referee"
                            placeholder="Juez de Silla"
                        />
                    </div>
                    <div className="InputStyle ">
                        <input
                            required
                            type="text"
                            id="GoldBalls"
                            placeholder="Bolas de Oro"
                        />
                    </div>
                </div>
                <div className="IncidenciaTop">
                    <div className="InputStyle DataInput">
                        <input required type="text" id="Stage" placeholder={datos.fase}/>
                    </div>
                    <div className="InputStyle DataInput">
                        <input required type="text" id="Time" placeholder={datos.tiempo}/>
                    </div>
                </div>
                <button className="BotonConFondo">Modificar Partido</button>
                <Link to="/admin/recursos/partidos" className="SimpleButton">
                    Cancelar
                </Link>
            </div>
        </>
    );
}
