import axios from 'axios'

// //4.事实上，instance(config)本来就返回一个Promise实例。可以直接return。上述代码可简化为
export function request(config) {
    const instance =axios.create({
        // baseURL:'http://127.0.0.1:3000',
        baseURL:'http://152.136.185.210:7878/api/m5',
        timeout:5000
    })
    //拦截器
    instance.interceptors.response.use(
        res => res.data,err => err
    )
    return instance(config)
}