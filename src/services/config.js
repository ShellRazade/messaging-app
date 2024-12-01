import axios from "axios"

const baseUrl = import.meta.env.VITE_BASE_URL

export const apiClient = axios.create({
    baseURL: baseUrl,
});

apiClient.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});