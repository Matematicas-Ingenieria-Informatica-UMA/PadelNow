import JugadorContext from "./JugadorContext";
import {useEffect, useState} from "react";
import {jugadores as jugadoresBBDD} from "../../BBDD/JugadoresBBDD";

export default function JugadorProvider({children}) {

    const [jugadores, setJugadores] = useState([]);

    useEffect(() => {
        setJugadores(jugadoresBBDD);
    }, [])

    return <JugadorContext.Provider value={{jugadores}}>
        {children}
    </JugadorContext.Provider>
}
