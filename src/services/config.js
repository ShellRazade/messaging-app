// const { default: axios } = require("axios")

import axios from "axios"


const baseUrl = import.meta.env.VITE_BASE_URL

const token = localStorage.getItem('token') //grabs the tokens from the local storage

if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    console.log("token--->", token)
}

export const apiClient = axios.create({
    baseURL: baseUrl,
});