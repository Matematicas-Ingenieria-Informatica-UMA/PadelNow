import React from "react";
import Noticias from "./user/Vistas/Noticias";
import Feed from "./user/Vistas/Feed";
import Jugadores from "./user/Vistas/Jugadores";
import Parejas from "./user/Vistas/Parejas";
import Partidos from "./user/Vistas/Partidos";
import EnviarIncidencia from "./user/Vistas/EnviarIncidencia";
import Torneos from "./user/Vistas/Torneos";

import Error from "./user/Vistas/Error";
import AdminLayout from "./admin/layouts/AdminLayout";
import "./user/style/App.css";
import Noticia from "./user/Componentes/Noticia";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./user/layouts/UserLayout";
import Login from "./admin/Login";
import RecursosHome from "./admin/RecursosHome";
import JugadorAdmin from "./admin/Entidades/Jugador/JugadorAdmin";
import CrearJugador from "./admin/Entidades/Jugador/CrearJugador";
import ModificarJugador from "./admin/Entidades/Jugador/ModificarJugador";
import ParejaAdmin from "./admin/Entidades/Pareja/ParejaAdmin";
import CrearPareja from "./admin/Entidades/Pareja/CrearPareja";
import ModificarPareja from "./admin/Entidades/Pareja/ModificarPareja";
import PartidoAdmin from "./admin/Entidades/Partido/PartidoAdmin";
import CrearPartido from "./admin/Entidades/Partido/CrearPartido";
import ModificarPartido from "./admin/Entidades/Partido/ModificarPartido";
import NoticiaAdmin from "./admin/Entidades/Noticia/NoticiaAdmin";
import CrearNoticia from "./admin/Entidades/Noticia/CrearNoticia";
import ModificarNoticia from "./admin/Entidades/Noticia/ModificarNoticia";
import TorneoAdmin from "./admin/Entidades/Torneo/TorneoAdmin";
import CrearTorneo from "./admin/Entidades/Torneo/CrearTorneo";
import ModificarTorneo from "./admin/Entidades/Torneo/ModificarTorneo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Login />} />
          <Route path="recursos">
            <Route index element={<RecursosHome />} />
            <Route path="jugadores" element={<JugadorAdmin />} />

            <Route path="jugadores/crear" element={<CrearJugador />} />

            <Route
              path="jugadores/modificar/:id"
              element={<ModificarJugador />}
            />

            <Route path="parejas" element={<ParejaAdmin />} />

            <Route path="parejas/crear" element={<CrearPareja />} />

            <Route path="parejas/modificar/:id" element={<ModificarPareja />} />

            <Route path="partidos" element={<PartidoAdmin />} />

            <Route path="partidos/crear" element={<CrearPartido />} />

            <Route
              path="partidos/modificar/:id"
              element={<ModificarPartido />}
            />

            <Route path="noticias" element={<NoticiaAdmin />} />

            <Route path="noticias/crear" element={<CrearNoticia />} />

            <Route
              path="noticias/modificar/:id"
              element={<ModificarNoticia />}
            />

            <Route path="torneos" element={<TorneoAdmin />} />

            <Route path="torneos/crear" element={<CrearTorneo />} />

            <Route path="torneos/modificar/:id" element={<ModificarTorneo />} />
          </Route>
        </Route>

        <Route path="/" element={<UserLayout />}>
          <Route index element={<Feed />} />

          <Route path="jugadores" element={<Jugadores />} />

          <Route path="parejas" element={<Parejas />} />

          <Route path="enviarincidencia" element={<EnviarIncidencia />} />

          <Route path="partidos" element={<Partidos />} />

          <Route path="noticias" element={<Noticias />} />

          <Route path="noticias/:id" element={<Noticia />} />

          <Route path="torneos" element={<Torneos />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
