import PartidoContext from "./PartidoContext";
import { useEffect, useState } from "react";
import { partidos as partidosBBDD } from "../../BBDD/PartidosBBDD";

export default function PartidoProvider({ children }) {
    const [partidos, setPartidos] = useState([]);

    useEffect(() => {
        setPartidos(partidosBBDD);
    }, []);

    return (
        <PartidoContext.Provider value={{ partidos }}>
            {children}
        </PartidoContext.Provider>
    );
}
