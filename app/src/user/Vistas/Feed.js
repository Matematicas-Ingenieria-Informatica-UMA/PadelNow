import React from "react";
import { Link } from "wouter";
import Miniatura from "../Componentes/Miniatura";
import Noticia from "../Componentes/Noticia";
import "../style/Feed.css";

export default function Feed() {
  const ejemplos = [
    {
      id: 1,
      URL: "https://images.ole.com.ar/2022/05/21/qxMN00Pqu_1256x620__1.jpg",
      Titulo: "WPT: Sanyo y Tapia dan una 'master class' en pista lenta",
    },
    {
      id: 2,
      URL: "http://www.padelspain.net/userfiles/Lucho-Capra-semis-Dinamarca-Open-2022-dentro.jpg",
      Titulo:
        "Final 100% argentina en Dinamarca: Maxi y 'Lucho' doblegan a Stupa y Lima para pelear el título con 'Sanyo' y Tapia",
    },
    {
      id: 3,
      URL: "http://www.padelspain.net/userfiles/Cronica-semifinales-femninas-Dinamarca-Open-2022-fuera.jpg",
      Titulo:
        "Martita Ortega y Bea González completan el espectáculo: eliminan a Salazar y Triay para llegar a una final inédita",
    },
    {
      id: 4,
      URL: "http://www.padelspain.net/userfiles/Crecimiento-Mundial-del-Padel-2022-fuera.jpg",
      Titulo:
        "Crecimiento de récord para el pádel: el número de clubes aumenta un 181% en cinco años",
    },
  ];
  return (
    <>
      <Noticia ID="3"></Noticia>
      <div className="NoticiaSepHor"></div>
      <div className="MiniaturasRow">
        {ejemplos.map((noticia) => {
          return <Miniatura datos={noticia} />;
        })}

        <Link to="/noticias">
          <h4 className="VerMas">Ver más...</h4>
        </Link>
      </div>
      <div className="NoticiaSepHor"></div>
    </>
  );
}
