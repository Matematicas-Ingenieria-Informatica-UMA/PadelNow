import NoticiaContext from "./NoticiaContext";
import { useEffect, useState } from "react";
import api from "../../api";

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
}
