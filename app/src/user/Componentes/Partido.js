import React from "react";
import { partidos } from "../../BBDD/PartidosBBDD";
import { torneos } from "../../BBDD/TorneosBBDD";
import "../style/Partido.css";
import "../style/Global.css";

export default function Partido(props) {
  let datos = partidos.find((x) => x.id === props.ID);
  let torneo = torneos.find((x)=> x.id === datos.torneoID);
  let resultado = datos.resultado.split("/");
  return (
    <>
      <div className="PartidoCard">
        <h2 className="LeftAlign">{torneo.nombre}</h2>

        <div className="Titles">
          <h4 className="Round">{datos.fase}</h4>
          <div className="Sets">
            <h4>Set 1</h4>
            <h4>Set 2</h4>
            <h4>Set 3</h4>
          </div>
        </div>
        <div className="SepHor"></div>

        <div className="PartidoSection">
          <div className="ParejaPartido">
            <div className="JugadorPartido">
              <img src="/Spain.svg" />
              <h4>{datos.pareja1.Jugador1}</h4>
            </div>
            <div className="JugadorPartido">
              <img src="/Spain.svg" />
              <h4>{datos.pareja1.Jugador2}</h4>
            </div>
          </div>
          <div className="Resultados">
            <h1>{resultado[0]}</h1>
            <h1>{resultado[2]}</h1>
            <h1>{resultado[4]}</h1>
          </div>
        </div>
        <div className="SepHor"></div>
        <div className="PartidoSection">
          <div className="ParejaPartido">
            <div className="JugadorPartido">
              <img src="/Spain.svg" />
              <h4 className="NombreJugador">{datos.pareja2.Jugador1}</h4>
            </div>
            <div className="JugadorPartido">
              <img src="/Spain.svg" />
              <h4>{datos.pareja2.Jugador2}</h4>
            </div>
          </div>
          <div className="Resultados">
          <h1>{resultado[1]}</h1>
            <h1>{resultado[3]}</h1>
            <h1>{resultado[5]}</h1>
          </div>
        </div>
        <div className="SepHor"></div>
        <div className="Subtitles">
          <h4>Tiempo de Partido</h4>
          <h3>{datos.tiempo}</h3>

          <h4>Fecha</h4>
          <h4>{datos.fecha}</h4>
        </div>
      </div>
    </>
  );
}
