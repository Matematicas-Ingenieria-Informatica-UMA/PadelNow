import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Noticias from "./user/Vistas/Noticias";
import Feed from "./user/Vistas/Feed";
import Jugadores from "./user/Vistas/Jugadores";
import Parejas from "./user/Vistas/Parejas";
import Partidos from "./user/Vistas/Partidos";
import EnviarIncidencia from "./user/Vistas/EnviarIncidencia";
import Torneos from "./user/Vistas/Torneos";
import VerJugador from "./user/Vistas/VerJugador";
import VerPartido from "./user/Vistas/VerPartido";
import VerPareja from "./user/Vistas/VerPareja";

import Error from "./user/Vistas/Error";
import AdminLayout from "./admin/layouts/AdminLayout";
import "./user/style/App.css";
import Noticia from "./user/Componentes/Noticia";
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
import { Link } from "react-router-dom";
import VerTorneo from "./user/Vistas/VerTorneo";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<Login />} />
                    <Route path="recursos">
                        <Route index element={<RecursosHome />} />
                        <Route path="jugadores" element={<JugadorAdmin />} />

                        <Route
                            path="jugadores/crear"
                            element={<CrearJugador />}
                        />

                        <Route
                            path="jugadores/modificar/:id"
                            element={<ModificarJugador />}
                        />

                        <Route path="parejas" element={<ParejaAdmin />} />

                        <Route path="parejas/crear" element={<CrearPareja />} />

                        <Route
                            path="parejas/modificar/:id"
                            element={<ModificarPareja />}
                        />

                        <Route path="partidos" element={<PartidoAdmin />} />

                        <Route
                            path="partidos/crear"
                            element={<CrearPartido />}
                        />

                        <Route
                            path="partidos/modificar/:id"
                            element={<ModificarPartido />}
                        />

                        <Route path="noticias" element={<NoticiaAdmin />} />

                        <Route
                            path="noticias/crear"
                            element={<CrearNoticia />}
                        />

                        <Route
                            path="noticias/modificar/:id"
                            element={<ModificarNoticia />}
                        />

                        <Route path="torneos" element={<TorneoAdmin />} />

                        <Route path="torneos/crear" element={<CrearTorneo />} />

                        <Route
                            path="torneos/modificar/:id"
                            element={<ModificarTorneo />}
                        />
                    </Route>
                </Route>

                <Route path="/" element={<UserLayout />}>
                    <Route index element={<Feed />} />

                    <Route path="jugadores" element={<Jugadores />} />

                    <Route
                        path="jugadores/:id"
                        element={
                            <>
                                <VerJugador />
                                <Link
                                    to="/jugadores"
                                    className="mt-15 mb-15 SimpleButton"
                                >
                                    Volver
                                </Link>
                            </>
                        }
                    />

                    <Route path="parejas" element={<Parejas />} />

                    <Route
                        path="parejas/:id"
                        element={
                            <>
                                <VerPareja />
                                <Link
                                    to="/parejas"
                                    className="mt-15 mb-15 SimpleButton"
                                >
                                    Volver
                                </Link>
                            </>
                        }
                    />

                    <Route
                        path="enviarincidencia"
                        element={<EnviarIncidencia />}
                    />

                    <Route path="partidos" element={<Partidos />} />

                    <Route
                        path="partidos/:id"
                        element={
                            <>
                                <VerPartido />
                                <Link
                                    to="/partidos"
                                    className="mt-15 mb-15 SimpleButton"
                                >
                                    Volver
                                </Link>
                            </>
                        }
                    />

                    <Route path="noticias" element={<Noticias />} />

                    <Route
                        path="noticias/:id"
                        element={
                            <>
                                <Noticia />
                                <Link
                                    to="/"
                                    className="mt-15 mb-15 SimpleButton"
                                >
                                    Volver
                                </Link>
                            </>
                        }
                    />

                    <Route path="torneos" element={<Torneos />} />

                    <Route
                        path="torneos/:id"
                        element={
                            <>
                                <VerTorneo />
                                <Link
                                    to="/torneos"
                                    className="mt-15 mb-15 SimpleButton"
                                >
                                    Volver
                                </Link>
                            </>
                        }
                    />
                </Route>
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
