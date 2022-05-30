import AuthContext from "./AuthContext";
import { useState } from "react";

export default function AuthProvider({ children }) {
    const [logged, setLogged] = useState(false);

    return <AuthContext.Provider>{children}</AuthContext.Provider>;
}
