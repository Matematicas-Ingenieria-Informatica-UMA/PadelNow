import { Route, Switch, Link } from "wouter";

import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import Feed from "./Vistas/Feed";
import Jugadores from "./Vistas/Jugadores";
import Parejas from "./Vistas/Parejas";
import Partidos from "./Vistas/Partidos";
import EnviarIncidencia from "./Vistas/EnviarIncidencia";
import Generos from "./Componentes/Generos";

import "./style/App.css";

function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Feed />
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
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
