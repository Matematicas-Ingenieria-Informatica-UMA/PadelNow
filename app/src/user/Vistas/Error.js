import React from "react";
import {Link} from "react-router-dom";

import "../style/Error.css";
import "../style/Global.css";

export default function Error() {
    return (
        <div className="AdminBackground">
            <div className="Error">
                <h2 className="TextColorWhite CenterAlign">
                    Mmm... Parece que esta página no existe
                </h2>
                <Link to="/" className="ErrorButton">
                    Inicio
                </Link>
            </div>
        </div>
    );
}
