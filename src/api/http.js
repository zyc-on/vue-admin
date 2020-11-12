import axios from 'axios'
import router from '../router'
import { Message } from 'element-ui'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    const token = sessionStorage.getItem('token')
    if (token) {
      config.headers.Authoration = token
    }
    return config
  },
  err => {
    console.log(err)
    return Promise.reject(err)
  }
)

service.interceptors.response.use(
  ({ status, data: { message } }) => {
    if (status >= 400 && status <= 599) {
      Message({
        message: message || 'Error',
        type: 'error',
        duration: 2500
      })
      if (status === 401) {
        router.push('/login')
      }
    } else {
      message &&
        Message({
          message,
          type: 'success',
          duration: 2500
        })
    }
  },
  err => {
    console.log('err' + err)
    Message({
      message: err.message,
      type: 'error',
      duration: 2500
    })
    return Promise.reject(err)
  }
)
export default service
