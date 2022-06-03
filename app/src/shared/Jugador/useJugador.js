import {useContext} from "react";
import JugadorContext from "./JugadorContext";

const useJugador = () => useContext(JugadorContext);

export default useJugador;
