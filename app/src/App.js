import { Route, Switch, useLocation } from "wouter";

import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import Login from "./Componentes/Login";
import Crud from "./Componentes/CRUD/Crud";
import Generos from "./Componentes/Generos";
import Recursos from "./Componentes/CRUD/Recursos";
import CrearJugador from "./Componentes/CRUD/Create/CrearJugador";
import CrearPartido from "./Componentes/CRUD/Create/CrearPartido";

import Feed from "./Vistas/Feed";
import Jugadores from "./Vistas/Jugadores";
import Parejas from "./Vistas/Parejas";
import Partidos from "./Vistas/Partidos";
import EnviarIncidencia from "./Vistas/EnviarIncidencia";
import Circuitos from "./Vistas/Circuitos";
import Error from "./Vistas/Error";

import "./style/App.css";
import CrearPareja from "./Componentes/CRUD/Create/CrearPareja";

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
        <Route path="/admin/crud" exact>
          <div className="AdminBackground">
            <h1 className="TituloAdmin">PadelNow</h1>
            <Crud></Crud>
          </div>
        </Route>
        <Route path="/admin/crud/create" exact>
          <div className="AdminBackground">
            <h1 className="TituloAdmin">PadelNow - CREAR RECURSO</h1>
            <Recursos />
          </div>
        </Route>
        <Route path="/admin/crud/create/player" exact>
          <div className="AdminBackground">
            <h1 className="TituloAdmin">PadelNow - CREAR JUGADOR</h1>
            <CrearJugador />
          </div>
        </Route>
        <Route path="/admin/crud/create/couple" exact>
          <div className="AdminBackground">
            <h1 className="TituloAdmin">PadelNow - CREAR Pareja</h1>
            <CrearPareja />
          </div>
        </Route>
        <Route path="/admin/crud/create/match" exact>
          <div className="AdminBackground">
            <h1 className="TituloAdmin">PadelNow - CREAR Partido</h1>
            <CrearPartido />
          </div>
        </Route>
        <Route path="/admin/crud/modify" exact>
          <div className="AdminBackground">
            <h1 className="TituloAdmin">PadelNow - MODIFICAR RECURSO</h1>
            <Recursos></Recursos>
          </div>
        </Route>
        <Route path="/admin/crud/read" exact>
          <div className="AdminBackground">
            <h1 className="TituloAdmin">PadelNow - LEER RECURSO</h1>
            <Recursos></Recursos>
          </div>
        </Route>
        <Route path="/admin/crud/delete" exact>
          <div className="AdminBackground">
            <h1 className="TituloAdmin">PadelNow - ELIMINAR RECURSO</h1>
            <Recursos></Recursos>
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
