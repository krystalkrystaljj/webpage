import axios from 'axios'
import { AXIOS_CONFIG as config } from '@/config/index'

const baseURL = process.env.NODE_ENV === 'development' ? config.baseURL.dev : config.baseURL.prod;
axios.defaults.withCredentials = true
export function request(config) {
  const http = axios.create({
    baseURL:baseURL,
    timeout:5000
  })
  

return http(config)
}