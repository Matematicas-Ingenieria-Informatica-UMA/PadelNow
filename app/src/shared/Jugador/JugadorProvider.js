import JugadorContext from "./JugadorContext";
import { useEffect, useState } from "react";
import api from "../../api";

export default function JugadorProvider({ children }) {
  const [jugadores, setJugadores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/jugadores").then(({ data }) => {
      setJugadores(data);
      setLoading(false);
    });
  }, []);

  if (loading) return null;

  return (
    <JugadorContext.Provider value={{ jugadores, setJugadores }}>
      {children}
    </JugadorContext.Provider>
  );
}
