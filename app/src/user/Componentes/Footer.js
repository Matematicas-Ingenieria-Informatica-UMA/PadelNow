import React from "react";
import {Link} from "react-router-dom";
import "../style/Footer.css";
import "../style/Global.css";

export default function Footer() {
    return (
        <div className="Footer">
            <div className="FooterFirst">
                <img
                    className="LogoBlue"
                    alt="Logo Azul de PadelNow"
                    src="logoblue.svg"
                ></img>
                <h1 className="TituloAzul">PadelNow</h1>
            </div>

            <div className="FooterSepVert"></div>

            <div className="FooterSecond">
                <h1 className="SobreNosotros">Sobre Nosotros</h1>
                <h4 className="SubtituloFooter">Instagram</h4>
                <h4 className="SubtituloFooter">Twitter</h4>
                <h4 className="SubtituloFooter">Facebook</h4>
            </div>

            <div className="FooterSepVert"></div>

            <div className="FooterThird">
                <h1 className="TienesAlgun">¿Tienes algún problema?</h1>
                <Link to="/enviarincidencia" className="SubtituloFooter">
                    Enviar Incidencia
                </Link>
                <h4 className="Copyright">© Derechos reservados</h4>
            </div>
        </div>
    );
}
