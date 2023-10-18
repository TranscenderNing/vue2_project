import { getCode,register,login,getUserInfoByToken,logout} from '@/api'
import { setToken, getToken, removeToken } from '@/utils/token.js'

const state = {
    code: '',
    token: getToken(),
    userInfo: {}
}
const actions = {
    //获取验证码
    async getCode({commit},phone){
        let res = await getCode(phone)
        if(res.code === 200){
            commit('GETCODE',res.data)
            return 'ok'
        }else{
            return 'fail'
        }
    },
    //用户注册
    async register({commit},user){
        console.log(user)
        let res = await register(user)
        if (res.code === 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('fail'))
        }
    },
    //用户登录
    async login({commit},user){
        let res = await login(user)
        if (res.code === 200){
            console.log('login res',res)
            // 登录成功后 将服务器返回的token 保存在仓库中
            commit('SAVELOGINTOKEN',res.data.token)
            // 持久化存储token
            // localStorage.setItem('TOKEN',res.data.token)
            setToken(res.data.token)
            return 'ok'
        }else{
            return Promise.reject(new Error('login fail'))
        }
    },
    //根据本地存储的token 向服务器发送请求 获取用户的详细信息  token防止请求头中
    async getUserInfoByToken({commit},){
        let res = await getUserInfoByToken()
        console.log(res)
        if (res.code === 200){
            commit('GETUSERINFO',res.data)
            return 'ok'
        }else{
            return Promise.reject(new Error('根据token获取用户信息失败'))
        }
   
    },
    //退出登录
    async logout({commit,dispatch,getters},){
        // 清除服务器 用户相关信息
        let res = await logout()
        console.log(res)
        if(res.code === 200){
            console.log('退出登录成功')
            commit('CLEARUSERINFO')
            return 'ok'
        }else{
            return Promise.reject(new Error('退出登录失败'))
        }
    }
}
const mutations = {
    GETCODE(state,code){
        state.code = code
    },
    SAVELOGINTOKEN(state,token){
        state.token = token
    },
    GETUSERINFO(state,userInfo){
        state.userInfo = userInfo
    },
    CLEARUSERINFO(state){
        // 清空本地仓库的用户数据
        state.token = ''
        state.userInfo = {}
        // 清楚本地持久化的 token
        removeToken()
        
    }
}
const getters = {
    userName(state){
        return state.userInfo.name
    }
}



export default {
    state,
    actions,
    mutations,
    getters
}