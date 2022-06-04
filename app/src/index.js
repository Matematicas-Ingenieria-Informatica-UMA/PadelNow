import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AuthProvider from "./admin/contexts/AuthProvider";
import JugadorProvider from "./shared/Jugador/JugadorProvider";
import ParejaProvider from "./shared/Pareja/ParejaProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <JugadorProvider>
      <ParejaProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ParejaProvider>
    </JugadorProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
