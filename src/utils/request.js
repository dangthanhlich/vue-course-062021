import axios from "axios"
import { Message } from 'element-plus'

const baseUrl = 'https://reqres.in/api'

const service = axios.create({
    baseURL: baseUrl,
    timeout: 3000,
})

console.log(service)

service.interceptors.request.use(
    res => {
        return res
    },
    error => {
        this.$message.error('Oops', 'Something went wrong')
        return Promise.reject(error)
    }
)

export default service