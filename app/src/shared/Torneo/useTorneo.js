import { useContext } from "react";
import TorneoContext from "./TorneoContext";

const useTorneo = () => useContext(TorneoContext);

export default useTorneo;
