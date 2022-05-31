import {Outlet} from "react-router-dom";
import Header from "../Componentes/Header";
import Footer from "../Componentes/Footer";

export default function UserLayout() {

    return (
        <div className="App">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
}
