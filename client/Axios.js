import axios from "axios";

export const api = axios.create({
    baseURL: 'https://www.riverrockroofingid.com/api',
    timeout: 10000
});
