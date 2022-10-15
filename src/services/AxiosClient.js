import axios from 'axios'
const apiClient = axios.create({
  baseURL: 'http://3.92.50.228:8999',

  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
export default apiClient
