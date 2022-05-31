import AuthContext from "./AuthContext";
import {useEffect, useState} from "react";

export default function AuthProvider({children}) {
    const [logged, setLogged] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken) {
            setLogged(true);
        }
        setLoading(false);
    }, [])

    if (loading) return null;

    return <AuthContext.Provider value={{logged, setLogged}}>{children}</AuthContext.Provider>;
}
