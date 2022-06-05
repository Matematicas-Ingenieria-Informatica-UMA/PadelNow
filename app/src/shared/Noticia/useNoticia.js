import { useContext } from "react";
import NoticiaContext from "./NoticiaContext";

const useNoticia = () => useContext(NoticiaContext);

export default useNoticia;
