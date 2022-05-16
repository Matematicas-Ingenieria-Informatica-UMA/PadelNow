import React from "react";
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

            <div className="SepVert"></div>

            <div className="FooterSecond">
                <h4 className="SobreNosotros">Sobre Nosotros</h4>
                <h4 className="SubtituloFooter">Instagram</h4>
                <h4 className="SubtituloFooter">Twitter</h4>
                <h4 className="SubtituloFooter">Facebook</h4>
            </div>

            <div className="SepVert"></div>

            <div className="FooterThird">
                <h4 className="TienesAlgun">¿Tienes algún problema?</h4>
                <h4 className="SubtituloFooter">Enviar Incidencia</h4>
                <h4 className="Copyright">© Derechos reservados</h4>
            </div>
        </div>
    );
}
