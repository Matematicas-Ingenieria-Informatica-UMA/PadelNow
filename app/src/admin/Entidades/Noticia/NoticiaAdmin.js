import React from "react";
import MiniaturaCRUD from "./MiniaturaCRUD";
import { Link, useLocation } from "wouter";

import "./Noticias.css";

export default function NoticiaAdmin() {
  const [location, setLocation] = useLocation();
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
    {
      id: 5,
      URL: "http://www.padelspain.net/userfiles/Previa-Tyc3-Menores-Jaen-2022-fuera.jpg",
      Titulo:
        "El sur peninsular se convierte en epicentro del pádel de cantera gracias al TyC3",
    },
    {
      id: 6,
      URL: "http://www.padelspain.net/userfiles/Nuevo-proyecto-para-Talavan-y-Nuria-Rodriguez-2022-fuera.jpg",
      Titulo:
        "Un nuevo proyecto de Talaván diluye su unión con Nuria Rodríguez",
    },
    {
      id: 7,
      URL: "http://www.padelspain.net/userfiles/Torneo-adidas-padel-tour--Club-Europadel-y-Club-Paiporta-2022-fuera.jpg",
      Titulo:
        "Nuevas tierras conquistadas para el circuito adidas Padel Tour by Sofinco",
    },
  ];
  return (
    <>
      <div className="BotonesAdmin">
        <Link to={`${location}/crear`}>
          <button className="mt-15 BotonConFondo">Nueva Noticia</button>
        </Link>
        <Link to="/admin/recursos">
          <button className="mt-15 BotonConFondo">Volver</button>
        </Link>
      </div>
      <div className="NoticiaAdmin">
        {ejemplos.map((noticia) => {
          return <MiniaturaCRUD datos={noticia} />;
        })}
      </div>
      <Link to="/admin/recursos">
        <button className="mt-15 mb-15 SimpleButton">Volver</button>
      </Link>
    </>
  );
}
