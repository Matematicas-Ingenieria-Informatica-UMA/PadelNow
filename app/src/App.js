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

import "./style/App.css";

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
                <Route>ERROR 404</Route>
            </Switch>
            {location.startsWith("/admin") ? <></> : <Footer />}
        </div>
    );
}

export default App;
