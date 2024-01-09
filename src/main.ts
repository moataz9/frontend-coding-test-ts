import { createApp } from 'vue'
import './styles/main.css'
import axios, { type AxiosInstance } from 'axios'
import App from './App.vue'
import initializeRouter from './router'

const app = createApp(App)

const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_POKE_API,
})

initializeRouter(app)

app.provide('axios', axiosInstance).mount('#app')
