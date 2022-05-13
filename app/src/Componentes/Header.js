import React from "react";
import "./Header.css";
import "./Global.css";
import Logo from "./Logo.js";

export default function Header() {
  return (
    <div className="Header">
      <div className="TitleHeader">
        <Logo></Logo>
        <h2 className="Title">PadelNow</h2>
      </div>
      <div className="Navigate">
        <div className="Search">
          <img src="/lense.svg" alt="Search" />
          <input type="text" id="Search" placeholder="Buscar..." />
        </div>
        <button>
          <img className="Menu" src="menuButton.svg"></img>
        </button>
      </div>
    </div>
  );
}
