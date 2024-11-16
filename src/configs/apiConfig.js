import axios from "axios";
//import { getCookie } from "utils/cookie";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});



export default api;
