import { Link, Route, Switch, useLocation } from "wouter";

import Header from "./user/Componentes/Header";
import Footer from "./user/Componentes/Footer";

import Noticias from "./user/Vistas/Noticias";
import Feed from "./user/Vistas/Feed";
import Jugadores from "./user/Vistas/Jugadores";
import Parejas from "./user/Vistas/Parejas";
import Partidos from "./user/Vistas/Partidos";
import EnviarIncidencia from "./user/Vistas/EnviarIncidencia";
import Torneos from "./user/Vistas/Torneos";
import Error from "./user/Vistas/Error";

import Recursos from "./admin/Recursos";
import Login from "./admin/Login";
import CrearJugador from "./admin/Entidades/Jugador/CrearJugador";
import CrearPartido from "./admin/Entidades/Partido/CrearPartido";
import CrearPareja from "./admin/Entidades/Pareja/CrearPareja";
import CrearNoticia from "./admin/Entidades/Noticia/CrearNoticia";
import CrearTorneo from "./admin/Entidades/Torneo/CrearTorneo";
import ModificarJugador from "./admin/Entidades/Jugador/ModificarJugador";
import JugadorAdmin from "./admin/Entidades/Jugador/JugadorAdmin";
import PartidoAdmin from "./admin/Entidades/Partido/PartidoAdmin";
import ModificarPareja from "./admin/Entidades/Pareja/ModificarPareja";
import ParejaAdmin from "./admin/Entidades/Pareja/ParejaAdmin";
import NoticiaAdmin from "./admin/Entidades/Noticia/NoticiaAdmin";
import TorneoAdmin from "./admin/Entidades/Torneo/TorneoAdmin";

import "./user/style/App.css";
import ModificarPartido from "./admin/Entidades/Partido/ModificarPartido";
import ModificarNoticia from "./admin/Entidades/Noticia/ModificarNoticia";
import Noticia from "./user/Componentes/Noticia";
import ModificarTorneo from "./admin/Entidades/Torneo/ModificarTorneo";

function App() {
    const [location, setLocation] = useLocation();

    return (
        <div className="App">
            {!location.startsWith("/admin") && <Header />}
            <Switch>
                <Route path="/" exact>
                    <Feed />
                </Route>
                <Route path="/admin" exact>
                    <div className="AdminBackground">
                        <h1 className="TituloAdmin">PadelNow</h1>
                        <Login />
                    </div>
                </Route>
                <Route path="/admin/recursos" exact>
                    <div className="AdminBackground">
                        <h1 className="TituloAdmin">PadelNow</h1>
                        <Recursos />
                    </div>
                </Route>
                <Route path="/admin/recursos/jugadores" exact>
                    <div className="AdminBackground">
                        <h1 className="TituloAdmin">PadelNow - Jugadores</h1>
                        <JugadorAdmin />
                    </div>
                </Route>
                <Route path="/admin/recursos/jugadores/crear" exact>
                    <div className="AdminBackground">
                        <h1 className="TituloAdmin">
                            PadelNow - CREAR JUGADOR
                        </h1>
                        <CrearJugador />
                    </div>
                </Route>
                <Route path="/admin/recursos/jugadores/modificar/:id" exact>
                    <div className="AdminBackground">
                        <h1 className="TituloAdmin">
                            PadelNow - MODIFICAR JUGADOR
                        </h1>
                        <ModificarJugador />
                    </div>
                </Route>
                <Route path="/admin/recursos/parejas" exact>
                    <div className="AdminBackground">
                        <h1 className="TituloAdmin">PadelNow - Parejas</h1>
                        <ParejaAdmin />
                    </div>
                </Route>
                <Route path="/admin/recursos/parejas/crear" exact>
                    <div className="AdminBackground">
                        <h1 className="TituloAdmin">PadelNow - CREAR Pareja</h1>
                        <CrearPareja />
                    </div>
                </Route>
                <Route path="/admin/recursos/parejas/modificar/:id" exact>
                    <div className="AdminBackground">
                        <h1 className="TituloAdmin">
                            PadelNow - MODIFICAR PAREJA
                        </h1>
                        <ModificarPareja />
                    </div>
                </Route>
                <Route path="/admin/recursos/partidos" exact>
                    <div className="AdminBackground">
                        <h1 className="TituloAdmin">PadelNow - Partidos</h1>
                        <PartidoAdmin />
                    </div>
                </Route>
                <Route path="/admin/recursos/partidos/crear" exact>
                    <div className="AdminBackground">
                        <h1 className="TituloAdmin">
                            PadelNow - CREAR PARTIDO
                        </h1>
                        <CrearPartido />
                    </div>
                </Route>
                <Route path="/admin/recursos/partidos/modificar/:id" exact>
                    <div className="AdminBackground">
                        <h1 className="TituloAdmin">
                            PadelNow - MODIFICAR PARTIDO
                        </h1>
                        <ModificarPartido />
                    </div>
                </Route>
                <Route path="/admin/recursos/noticias" exact>
                    <div className="AdminBackground">
                        <h1 className="TituloAdmin">PadelNow - Noticias</h1>
                        <NoticiaAdmin />
                    </div>
                </Route>
                <Route path="/admin/recursos/noticias/crear" exact>
                    <div className="AdminBackground">
                        <h1 className="TituloAdmin">
                            PadelNow - CREAR Noticia
                        </h1>
                        <CrearNoticia />
                    </div>
                </Route>
                <Route path="/admin/recursos/noticias/modificar/:id" exact>
                    <div className="AdminBackground">
                        <h1 className="TituloAdmin">
                            PadelNow - MODIFICAR Noticia
                        </h1>
                        <ModificarNoticia />
                    </div>
                </Route>
                <Route path="/admin/recursos/torneos" exact>
                    <div className="AdminBackground">
                        <h1 className="TituloAdmin">PadelNow - Torneos</h1>
                        <TorneoAdmin />
                    </div>
                </Route>
                <Route path="/admin/recursos/torneos/crear" exact>
                    <div className="AdminBackground">
                        <h1 className="TituloAdmin">PadelNow - CREAR Torneo</h1>
                        <CrearTorneo />
                    </div>
                </Route>
                <Route path="/admin/recursos/torneos/modificar/:id" exact>
                    <div className="AdminBackground">
                        <h1 className="TituloAdmin">
                            PadelNow - MODIFICAR Torneo
                        </h1>
                        <ModificarTorneo />
                    </div>
                </Route>
                <Route path="/jugadores" exact>
                    <Jugadores />
                </Route>
                <Route path="/parejas" exact>
                    <Parejas />
                </Route>
                <Route path="/enviarincidencia" exact>
                    <EnviarIncidencia />
                </Route>
                <Route path="/partidos" exact>
                    <Partidos />
                </Route>
                <Route path="/noticias" exact>
                    <Noticias />
                </Route>
                <Route path="/noticias/ver/:id" exact>
                    <Noticia ID={useLocation()[0].split("/").pop()}></Noticia>
                    <Link to="/noticias">
                        <button className="mt-15 mb-15 SimpleButton">
                            Volver
                        </button>
                    </Link>
                </Route>
                <Route path="/torneos" exact>
                    <Torneos></Torneos>
                </Route>
                <Route>
                    <div className="AdminBackground">
                        <h1 className="TituloAdmin">PadelNow</h1>
                        <Error />
                    </div>
                </Route>
            </Switch>
            {!location.startsWith("/admin") && <Footer />}
        </div>
    );
}

export default App;
