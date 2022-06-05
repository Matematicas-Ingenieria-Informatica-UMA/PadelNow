import { useContext } from "react";
import ParejaContext from "./PartidoContext";

const usePartido = () => useContext(ParejaContext);

export default usePartido;
