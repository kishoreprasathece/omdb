import axios from "axios";

const baseUrl = "https://www.omdbapi.com/";

// create an instance of axios
const instance = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 5000,
});

export default instance;