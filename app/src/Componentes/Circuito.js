import React from "react";
import "../style/Circuito.css";
import "../style/Global.css";

export default function Circuito(p) {;
    const Torneo = params =>{
        return (
        <div className="TorneoCircuito">
            <div className="TituloCircuito">
                <h1 className="TituloCircuitoTexto">{params.name}</h1>    
            </div>  
            <div className="ContenidoCircuito">
                <h1 className="ContenidoCircuitoTexto">{params.contenido}</h1>    
            </div>
        </div>
        )
    }
    return ( 
    <div className="Circuito">
        <div className="NombreCircuito">
            <h1 className="NombreCircuitoTexto">{p.name}</h1>
            <img 
            className="LogoCircuito"
            alt="Logo del circuito"
            src="wptcirculo.svg">
            </img>
        </div>
            <div>
                <Torneo name={p.torneo1name} contenido={p.torneo1contenido} />
                <Torneo name={p.torneo2name} contenido={p.torneo2contenido} />
                <Torneo name={p.torneo3name} contenido={p.torneo3contenido} />
                <Torneo name={p.torneo4name} contenido={p.torneo4contenido} />
            </div>
    </div>
        
        );
}
