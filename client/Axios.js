import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:3080/api',
    timeout: 10000
});
