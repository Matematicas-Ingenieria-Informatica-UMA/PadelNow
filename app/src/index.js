import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AuthProvider from "./admin/auth/AuthProvider";
import JugadorProvider from "./shared/Jugador/JugadorProvider";
import ParejaProvider from "./shared/Pareja/ParejaProvider";
import PartidoProvider from "./shared/Partido/PartidoProvider";
import TorneoProvider from "./shared/Torneo/TorneoProvider";
import NoticiaProvider from "./shared/Noticia/NoticiaProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <JugadorProvider>
      <ParejaProvider>
        <PartidoProvider>
          <TorneoProvider>
            <NoticiaProvider>
              <AuthProvider>
                <App />
              </AuthProvider>
            </NoticiaProvider>
          </TorneoProvider>
        </PartidoProvider>
      </ParejaProvider>
    </JugadorProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
