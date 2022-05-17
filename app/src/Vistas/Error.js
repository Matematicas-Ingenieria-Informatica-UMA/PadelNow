import React from "react";
import { Link } from "wouter";

import "../style/Error.css";
import "../style/Global.css";

export default function Error() {
  return (
    <>
      <div className="Error">
        <h2 className="TextColorWhite CenterAlign">
          Mmm... Parece que esta página no existe
        </h2>
        <Link to="/">
          <button className="ErrorButton">Inicio</button>
        </Link>
      </div>
    </>
  );
}
