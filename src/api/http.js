import axios from 'axios';

const apiURL = import.meta.env.VITE_API_URL
const apiToken = import.meta.env.VITE_API_TOKEN
const instance = axios.create({baseURL: apiURL, apiKey: import.meta.env.VITE_API_KEY});
 
instance.interceptors.request.use(
    (config) => {
        config.headers.Authorization = `Bearer ${apiToken}`;
        
        return config;
    });

    export default instance;