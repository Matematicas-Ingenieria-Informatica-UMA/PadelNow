import { Route, Switch, useLocation } from "wouter";

import Header from "./user/Componentes/Header";
import Footer from "./user/Componentes/Footer";
import Generos from "./user/Componentes/Generos";

import Feed from "./user/Vistas/Feed";
import Jugadores from "./user/Vistas/Jugadores";
import Parejas from "./user/Vistas/Parejas";
import Partidos from "./user/Vistas/Partidos";
import EnviarIncidencia from "./user/Vistas/EnviarIncidencia";
import Circuitos from "./user/Vistas/Circuitos";
import Error from "./user/Vistas/Error";

import Recursos from "./admin/Recursos";
import Login from "./admin/Login";
import CrearJugador from "./admin/Entidades/Jugador/CrearJugador";
import CrearPartido from "./admin/Entidades/Partido/CrearPartido";
import CrearPareja from "./admin/Entidades/Pareja/CrearPareja";
import CrearNoticia from "./admin/Entidades/Noticia/CrearNoticia";
import CrearCircuito from "./admin/Entidades/Circuito/CrearCircuito";
import CrearInstitucion from "./admin/Entidades/Institucion/CrearInstitucion";
import CrearTorneo from "./admin/Entidades/Torneo/CrearTorneo";
import JugadorAdmin from "./admin/Entidades/Jugador/JugadorAdmin";
import PartidoAdmin from "./admin/Entidades/Partido/PartidoAdmin";
import ParejaAdmin from "./admin/Entidades/Pareja/ParejaAdmin";
import NoticiaAdmin from "./admin/Entidades/Noticia/NoticiaAdmin";
import CircuitoAdmin from "./admin/Entidades/Circuito/CircuitoAdmin";
import InstitucionAdmin from "./admin/Entidades/Institucion/InstitucionAdmin";
import TorneoAdmin from "./admin/Entidades/Torneo/TorneoAdmin";

import "./user/style/App.css";

function App() {
  const [location, setLocation] = useLocation();

  return (
    <div className="App">
      {location.startsWith("/admin") ? <></> : <Header />}
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
            <h1 className="TituloAdmin">PadelNow - CREAR JUGADOR</h1>
            <CrearJugador />
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
        <Route path="/admin/recursos/partidos" exact>
          <div className="AdminBackground">
            <h1 className="TituloAdmin">PadelNow - Partidos</h1>
            <PartidoAdmin />
          </div>
        </Route>
        <Route path="/admin/recursos/partidos/crear" exact>
          <div className="AdminBackground">
            <h1 className="TituloAdmin">PadelNow - CREAR Partido</h1>
            <CrearPartido />
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
            <h1 className="TituloAdmin">PadelNow - CREAR Noticia</h1>
            <CrearNoticia />
          </div>
        </Route>
        <Route path="/admin/recursos/circuitos" exact>
          <div className="AdminBackground">
            <h1 className="TituloAdmin">PadelNow - Circuitos</h1>
            <CircuitoAdmin />
          </div>
        </Route>
        <Route path="/admin/recursos/circuitos/crear" exact>
          <div className="AdminBackground">
            <h1 className="TituloAdmin">PadelNow - CREAR Circuito</h1>
            <CrearCircuito />
          </div>
        </Route>
        <Route path="/admin/recursos/instituciones" exact>
          <div className="AdminBackground">
            <h1 className="TituloAdmin">PadelNow - Instituciones</h1>
            <InstitucionAdmin />
          </div>
        </Route>
        <Route path="/admin/recursos/instituciones" exact>
          <div className="AdminBackground">
            <h1 className="TituloAdmin">PadelNow - CREAR Institución</h1>
            <CrearInstitucion />
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
        <Route path="/jugadores" exact>
          <Generos />
          <Jugadores />
        </Route>
        <Route path="/parejas" exact>
          <Generos />
          <Parejas />
        </Route>
        <Route path="/enviarincidencia" exact>
          <EnviarIncidencia />
        </Route>
        <Route path="/partidos" exact>
          <Generos />
          <Partidos />
        </Route>
        <Route path="/torneos" exact></Route>
        <Route path="/circuitos" exact>
          <Circuitos />
        </Route>
        <Route>
          <div className="AdminBackground">
            <h1 className="TituloAdmin">PadelNow</h1>
            <Error />
          </div>
        </Route>
      </Switch>
      {location.startsWith("/admin") ? <></> : <Footer />}
    </div>
  );
}

export default App;
