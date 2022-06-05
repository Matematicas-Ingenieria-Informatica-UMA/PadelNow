import axios from "axios";

const api = axios.create({
  baseURL: "https://ad56-62-87-103-137.eu.ngrok.io",
});

export default api;
