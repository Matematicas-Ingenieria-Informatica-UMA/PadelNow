import React from 'react';
import RecursosHome from "../RecursosHome";
import JugadorAdmin from "../Entidades/Jugador/JugadorAdmin";
import CrearJugador from "../Entidades/Jugador/CrearJugador";
import ModificarJugador from "../Entidades/Jugador/ModificarJugador";
import ParejaAdmin from "../Entidades/Pareja/ParejaAdmin";
import CrearPareja from "../Entidades/Pareja/CrearPareja";
import ModificarPareja from "../Entidades/Pareja/ModificarPareja";
import PartidoAdmin from "../Entidades/Partido/PartidoAdmin";
import CrearPartido from "../Entidades/Partido/CrearPartido";
import ModificarPartido from "../Entidades/Partido/ModificarPartido";
import NoticiaAdmin from "../Entidades/Noticia/NoticiaAdmin";
import CrearNoticia from "../Entidades/Noticia/CrearNoticia";
import ModificarNoticia from "../Entidades/Noticia/ModificarNoticia";
import TorneoAdmin from "../Entidades/Torneo/TorneoAdmin";
import CrearTorneo from "../Entidades/Torneo/CrearTorneo";
import ModificarTorneo from "../Entidades/Torneo/ModificarTorneo";
import Login from "../Login";
import {Route} from "react-router-dom";

export default function AdminLayout() {

    return (
        <div className="AdminBackground">
            <Route index>
                <h1 className="TituloAdmin">PadelNow</h1>
                <Login/>
            </Route>
            <Route path="recursos">
                <Route index exact>
                    <RecursosHome/>
                </Route>
                <Route path="jugadores" exact>
                    <h1 className="TituloAdmin">PadelNow - Jugadores</h1>
                    <JugadorAdmin/>
                </Route>
                <Route path="jugadores/crear" exact>
                    <h1 className="TituloAdmin">
                        PadelNow - CREAR JUGADOR
                    </h1>
                    <CrearJugador/>
                </Route>
                <Route path="jugadores/modificar/:id" exact>
                    <h1 className="TituloAdmin">
                        PadelNow - MODIFICAR JUGADOR
                    </h1>
                    <ModificarJugador/>
                </Route>
                <Route path="parejas" exact>
                    <h1 className="TituloAdmin">PadelNow - Parejas</h1>
                    <ParejaAdmin/>
                </Route>
                <Route path="parejas/crear" exact>
                    <h1 className="TituloAdmin">PadelNow - CREAR Pareja</h1>
                    <CrearPareja/>
                </Route>
                <Route path="parejas/modificar/:id" exact>
                    <h1 className="TituloAdmin">
                        PadelNow - MODIFICAR PAREJA
                    </h1>
                    <ModificarPareja/>
                </Route>
                <Route path="partidos" exact>
                    <h1 className="TituloAdmin">PadelNow - Partidos</h1>
                    <PartidoAdmin/>
                </Route>
                <Route path="partidos/crear" exact>
                    <h1 className="TituloAdmin">
                        PadelNow - CREAR PARTIDO
                    </h1>
                    <CrearPartido/>
                </Route>
                <Route path="partidos/modificar/:id" exact>
                    <h1 className="TituloAdmin">
                        PadelNow - MODIFICAR PARTIDO
                    </h1>
                    <ModificarPartido/>
                </Route>
                <Route path="noticias" exact>
                    <h1 className="TituloAdmin">PadelNow - Noticias</h1>
                    <NoticiaAdmin/>
                </Route>
                <Route path="noticias/crear" exact>
                    <h1 className="TituloAdmin">
                        PadelNow - CREAR Noticia
                    </h1>
                    <CrearNoticia/>
                </Route>
                <Route path="noticias/modificar/:id" exact>
                    <h1 className="TituloAdmin">
                        PadelNow - MODIFICAR Noticia
                    </h1>
                    <ModificarNoticia/>
                </Route>
                <Route path="torneos" exact>
                    <h1 className="TituloAdmin">PadelNow - Torneos</h1>
                    <TorneoAdmin/>
                </Route>
                <Route path="torneos/crear" exact>
                    <h1 className="TituloAdmin">PadelNow - CREAR Torneo</h1>
                    <CrearTorneo/>
                </Route>
                <Route path="torneos/modificar/:id" exact>
                    <h1 className="TituloAdmin">
                        PadelNow - MODIFICAR Torneo
                    </h1>
                    <ModificarTorneo/>
                </Route>
            </Route>

        </div>
    )
}
