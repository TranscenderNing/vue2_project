import Vue from "vue"
import VueRouter from "vue-router"

import routes from "./routes"

import store from '@/store'

// 注册路由
Vue.use(VueRouter)

// router加了promise，需要重写push 和 replace
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function(location,resolve,reject){
    if (resolve && reject){
        originPush.call(this,location,resolve,reject)
    }
    else{
        originPush.call(this,location,()=>{},()=>{})
    }
}

VueRouter.prototype.replace = function(location,resolve,reject){
    if (resolve && reject){
        originReplace.call(this,location,resolve,reject)
    }
    else{
        originReplace.call(this,location,()=>{},()=>{})
    }
}

let router = new VueRouter({
    routes,
    scrollBehavior(to,from,savePossition){
        return {y: 0}
    }
})


router.beforeEach(async (to,from,next)=>{
    let token = store.state.user.token
    let name = store.state.user.userInfo.name
    if (token){
        // 用户已经登录, 不能再访问 登录 页面
        if( to.path === '/login' || to.path === '/register'){
            next('/home')
        }else{
            if(name){
                next()
            }
            else{
                // 没有用户信息了
                try{
                    let res = await store.dispatch('getUserInfoByToken')
                    next()
                }catch(err){
                    // token失效了
                    alert('获取用户信息失败')
                    store.dispatch('logout')
                    next('/home')
                }

            }
        }
    }else{
        // 未登录 不能去交易 支付 pay | paysuccess | center 
        if(to.path.indexOf('/trade') != -1 || to.path.indexOf('/pay') != -1 || to.path.indexOf('/center') != -1){
            next('/login?redirect=' + to.path)
        }else{
            next()
        }

    }
})

export default router 
