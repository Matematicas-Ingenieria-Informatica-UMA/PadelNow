import axios from "axios";

const api = axios.create({
    baseURL: "https://7eb2a716-d910-4458-b4ba-b89788927ef0.mock.pstmn.io",
});

export default api;
