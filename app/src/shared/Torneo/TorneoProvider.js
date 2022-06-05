import TorneoContext from "./TorneoContext";
import { useEffect, useState } from "react";
import api from "../../api";

export default function TorneoProvider({ children }) {
    const [torneos, setTorneos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get("/torneos").then(({ data }) => {
            setTorneos(data);
            setLoading(false);
        });
    }, []);

    if (loading) return null;

    return (
        <TorneoContext.Provider value={{ torneos }}>
            {children}
        </TorneoContext.Provider>
    );
}
