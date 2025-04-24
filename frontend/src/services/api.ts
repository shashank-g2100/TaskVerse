import axios from 'axios'

const api = axios.create({ baseURL: 'http://localhost:8000/api' })

export const register = (username: string, email: string, password: string) =>
  api.post('/register', { username, email, password })

export const login = (email: string, password: string) =>
  api.post('/login', { email, password })

export const getProfile = (token: string) =>
  api.get('/me', { headers: { Authorization: `Bearer ${token}` } })

export default api