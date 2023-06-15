import axios from "axios";

export const api = axios.create({
    baseURL: 'https://riverrockroofing.onrender.com/api',
    timeout: 10000
});
