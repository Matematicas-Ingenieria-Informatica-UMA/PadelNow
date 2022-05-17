import { Route, Switch, useLocation } from "wouter";

import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import Feed from "./Vistas/Feed";
import Jugadores from "./Vistas/Jugadores";
import Parejas from "./Vistas/Parejas";
import Partidos from "./Vistas/Partidos";
import EnviarIncidencia from "./Vistas/EnviarIncidencia";
import Generos from "./Componentes/Generos";
import Login from "./Componentes/Login";
import Crud from "./Componentes/Crud";
import Error from "./Vistas/Error";

import "./style/App.css";

function App() {
  const [location, setLocation] = useLocation();

  return (
    <div className="App">
      {location.startsWith("/admin")? <></> : <Header />}
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
          </div>
        </Route>
        <Route path="/admin/crud/modify" exact>
          <div className="AdminBackground">
            <h1 className="TituloAdmin">PadelNow - MODIFICAR RECURSO</h1>
          </div>
        </Route>
        <Route path="/admin/crud/read" exact>
          <div className="AdminBackground">
            <h1 className="TituloAdmin">PadelNow - LEER RECURSO</h1>
          </div>
        </Route>
        <Route path="/admin/crud/delete" exact>
          <div className="AdminBackground">
            <h1 className="TituloAdmin">PadelNow - ELIMINAR RECURSO</h1>
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
        <Route path="/torneos" exact>
          <Login />
        </Route>
        <Route>
          <div className="AdminBackground">
            <h1 className="TituloAdmin">PadelNow</h1>
            <Error />
          </div>
        </Route>
      </Switch>
      {location.startsWith("/admin")? <></> : <Footer />}
    </div>
  );
}

export default App;
