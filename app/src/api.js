import axios from "axios";

const api = axios.create({
  baseURL: "https://padel-now.herokuapp.com",
  //baseURL: "https://localhost:8080",
});

export default api;
