import axios from 'axios'


const api = axios.create({
    baseURL: 'http://localhost:8000/api/',
    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: 'X-CSRFToken'
})

api.interceptors.request.use(config => {
  let token = window.sessionStorage.getItem('token')
  if(token) {
    config.headers["Authorization"] = ` Token ${token}`
  }
  return config
}, error => {
  return Promise.reject(error)
})

export default api
