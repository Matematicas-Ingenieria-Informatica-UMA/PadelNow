import React from "react";
import Noticias from "./user/Vistas/Noticias";
import Feed from "./user/Vistas/Feed";
import Jugadores from "./user/Vistas/Jugadores";
import Parejas from "./user/Vistas/Parejas";
import Partidos from "./user/Vistas/Partidos";
import EnviarIncidencia from "./user/Vistas/EnviarIncidencia";
import Torneos from "./user/Vistas/Torneos";

import Error from "./user/Vistas/Error";
import AdminLayout from "./admin/layouts/AdminLayout";
import "./user/style/App.css";
import Noticia from "./user/Componentes/Noticia";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserLayout from "./user/layouts/UserLayout";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/admin" element={<AdminLayout/>}>
                    
                </Route>
                <Route path="/" element={<UserLayout/>}>

                    <Route index element={<Feed/>}/>

                    <Route path="jugadores" element={<Jugadores/>}/>

                    <Route path="parejas" element={<Parejas/>}/>

                    <Route path="enviarincidencia" element={<EnviarIncidencia/>}/>

                    <Route path="partidos" element={<Partidos/>}/>

                    <Route path="noticias" element={<Noticias/>}/>

                    <Route path="noticias/:id" element={<Noticia/>}/>

                    <Route path="torneos" element={<Torneos/>}/>
                </Route>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
