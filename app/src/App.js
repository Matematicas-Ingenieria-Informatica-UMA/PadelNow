import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import Feed from "./Componentes/Feed";
import Jugador from "./Componentes/Jugador";
import Generos from "./Componentes/Generos";
import "./style/App.css";
function App() {
    return (
        <div className="App">
            <Header></Header>
            {/* <Generos></Generos>*/}
            <Feed></Feed>
            <Jugador></Jugador>
            <Feed></Feed>
            <Footer></Footer>
        </div>
    );
}

export default App;
