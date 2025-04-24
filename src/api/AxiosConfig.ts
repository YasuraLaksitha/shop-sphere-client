import axios from 'axios'

export const productBaseURL = axios.create({
    baseURL: `${import.meta.env.VITE_SERVER_URL}/product`
})

export const categoryBaseURL = axios.create({
    baseURL: `${import.meta.env.VITE_SERVER_URL}/category`
})