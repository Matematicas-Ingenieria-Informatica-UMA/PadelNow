import axios from "axios";

const api = axios.create({
    baseURL: "https://239f62af-8ef1-4e72-bde6-f0544c76dc4a.mock.pstmn.io",
});

export default api;
