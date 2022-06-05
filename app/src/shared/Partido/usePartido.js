import { useContext } from "react";
import PartidoContext from "./PartidoContext";

const usePartido = () => useContext(PartidoContext);

export default usePartido;
