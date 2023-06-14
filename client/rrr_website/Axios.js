import axios from "axios";

export const api = await axios.create({
    baseURL: 'http://localhost:3080/api',
    timeout: 10000
});
