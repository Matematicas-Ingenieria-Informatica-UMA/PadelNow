import ParejaContext from "./ParejaContext";
import { useEffect, useState } from "react";
import api from "../../api";

export default function ParejaProvider({ children }) {
    const [parejas, setParejas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get("/parejas").then(({ data }) => {
            setParejas(data);
            setLoading(false);
        });
    }, []);

    if (loading) return null;

    return (
        <ParejaContext.Provider value={{ parejas }}>
            {children}
        </ParejaContext.Provider>
    );
}
