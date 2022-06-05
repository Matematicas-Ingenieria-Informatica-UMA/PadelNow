import PartidoContext from "./PartidoContext";
import { useEffect, useState } from "react";
import api from "../../api";

export default function PartidoProvider({ children }) {
    const [partidos, setPartidos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get("/partidos").then(({ data }) => {
            setPartidos(data);
            setLoading(false);
        });
    }, []);

    if (loading) return null;

    return (
        <PartidoContext.Provider value={{ partidos }}>
            {children}
        </PartidoContext.Provider>
    );
}
