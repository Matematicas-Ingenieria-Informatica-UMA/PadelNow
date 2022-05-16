import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import Feed from "./Componentes/Feed";
import "./style/App.css"
import Jugador from "./Componentes/Jugador";
function App() {
    return (
        <div className="App">
            <Header></Header>
            <Feed></Feed>
            <Jugador></Jugador>
            <Footer></Footer>
        </div>
    );
}

export default App;
