import ParejaContext from "./ParejaContext";
import {useEffect, useState} from "react";
import {parejas as parejasBBDD} from "../../BBDD/ParejasBBDD";

export default function ParejaProvider({children}) {

    const [parejas, setParejas] = useState([]);

    useEffect(() => {
        setParejas(parejasBBDD);
    }, [])

    return <ParejaContext.Provider value={{parejas}}>
        {children}
    </ParejaContext.Provider>
}
