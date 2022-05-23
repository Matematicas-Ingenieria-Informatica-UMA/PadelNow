import React from "react";

export default function BotonGenero(props) {
  const gender = props.clase;
  return (
    <>
      <img src={`/${gender}.svg`} />
      <h2>{gender === "Masc" ? "Masculino" : "Femenino"}</h2>
    </>
  );
}
