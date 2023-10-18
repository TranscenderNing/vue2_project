import axios  from "axios"
import nprogress from "nprogress"
import 'nprogress/nprogress.css'
import store from '@/store'

// 封装axios request就是配置后的axios
const requests = axios.create({
    // 基础路径， 发请求的时候，路径当中会出下 /api
    baseURL: '/api',
    // 代表请求的超时时间是 5s
    timeout: 5000,

})

//请求拦截器： 在请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
requests.interceptors.request.use((config)=>{
    //config: 配置对象，对象中 header请求头 属性很重要
    console.log(store)
    if (store.state.detail.uuidToken){
        config.headers.userTempId = store.state.detail.uuidToken
    }
    if (store.state.user.token){
        config.headers.token = store.state.user.token
    }
    nprogress.start()
    return config
})

//响应拦截器
requests.interceptors.response.use((res)=>{
    // 成功的回调函数，服务器响应数据回来后 响应拦截器可以检测到 可以做一些事情
    nprogress.done()
    return res.data
},(error)=>{
    // 响应失败的回调函数
    return Promise.reject(new Error('fail')) 
})


export default requests