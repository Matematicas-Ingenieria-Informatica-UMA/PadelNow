import NoticiaContext from "./NoticiaContext";
import { useEffect, useState } from "react";
import api from "../../api";

<<<<<<< HEAD
export default function NoticiaProvider({ children }) {
    const [noticias, setNoticias] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get("/noticias").then(({ data }) => {
            setNoticias(data);
            setLoading(false);
        });
    }, []);

    if (loading) return null;

    return (
        <NoticiaContext.Provider value={{ noticias }}>
            {children}
        </NoticiaContext.Provider>
    );
=======
export default function JugadorProvider({ children }) {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/noticias").then(({ data }) => {
      setNoticias(data);
      setLoading(false);
    });
  }, []);

  if (loading) return null;

  return (
    <NoticiaContext.Provider value={{ noticias }}>
      {children}
    </NoticiaContext.Provider>
  );
>>>>>>> 0c883651cc13e48b8d47974146c2b5154e647b7a
}
