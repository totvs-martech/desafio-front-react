import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  params: {
    ts: process.env.NEXT_PUBLIC_TIMESTAMP,
    apikey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
    hash: process.env.NEXT_PUBLIC_HASH_MD5
  }
})

export default api
