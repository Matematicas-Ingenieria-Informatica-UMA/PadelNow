import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import Feed from "./Componentes/Feed";
import Jugador from "./Componentes/Jugador";
import Generos from "./Componentes/Generos";
import Incidencia from "./Componentes/Incidencia";
import Partido from "./Componentes/Partido";

import "./style/App.css";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Generos></Generos>
            <Incidencia></Incidencia>
            <Partido></Partido>
            <Feed></Feed>
            <Jugador></Jugador>
            <Footer></Footer>
        </div>
    );
}

export default App;
