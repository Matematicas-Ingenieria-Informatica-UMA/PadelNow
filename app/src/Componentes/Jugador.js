import React from 'react';
import "../style/Jugador.css";

export default function Jugador() {
  return (
    <>
      <div className="Jugador">
        <div className="Imagen">
            <img src=".\logo.svg" alt="foto"/>
        </div>
        <div className="Datos">
          <h1 className="Nombre">ALEJANDRA SALAZAR BENGOECHEA</h1>
          <hr></hr>
          <div className="Tabla">
            <table >
              <tr>
                <td id="prim">Fecha de Nacimiento</td>
                <td id="sec">31 de Diciembre de 1985</td>
              </tr>
              <tr>
                <td id="prim">Nacionalidad</td>
                <td id="sec">Española</td>
              </tr>
              <tr>
                <td id="prim">Ciudad</td>
                <td id="sec">Madrid</td>
              </tr>
              <tr>
                <td id="prim">Ranking</td>
                <td id="sec">1</td>
              </tr>
              <tr>
                <td id="prim">Brazo dom.</td>
                <td id="sec">Diestra</td>
              </tr>
              <tr>
                <td id="prim">Compañerx</td>
                <td id="sec">Gemma Triay</td>
              </tr>
              <tr>
                <td id="prim">Altura</td>
                <td id="sec">1,68</td>
              </tr>
              <tr>
                <td id="prim">Posición</td>
                <td id="sec">Revés</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
