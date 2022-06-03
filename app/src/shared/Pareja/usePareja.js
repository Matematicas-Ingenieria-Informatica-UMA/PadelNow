import {useContext} from "react";
import JugadorContext from "./ParejaContext";

const usePareja = () => useContext(JugadorContext);

export default usePareja;
