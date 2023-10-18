// 引入路由组件 
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
import MyOrder from '@/pages/Center/MyOrder'
import GroupOrder from '@/pages/Center/GroupOrder'

export default [
    {
        name: 'center',
        path: '/center',
        component: Center,
        meta:{
            showFooter: true
        },
        children:[
            {
                path: 'myOrder',
                component: MyOrder,
            },
            {
                path: 'groupOrder',
                component: GroupOrder,
            },
            {
                path: '/center',
                redirect: '/center/myOrder'
            }
        ]
    },
    {
        name: 'paySuccess',
        path: '/paySuccess',
        component: PaySuccess,
        meta:{
            showFooter: true
        }
    },
    {
        name: 'pay',
        path: '/pay',
        component: Pay,
        meta:{
            showFooter: true
        },
        beforeEnter: (to,from,next) => {
            if(from.path === '/trade'){
                console.log('next')
                next()
            }else{
                next(false)
            }
        }
    },
    {
        name: 'trade',
        path: '/trade',
        component: Trade,
        meta:{
            showFooter: true
        },
        beforeEnter: (to,from,next) => {
            if(from.path === '/shopCart'){
                next()
            }else{
                next(false)
            }
        }
    },
    {
        name: 'shopCart',
        path: '/shopCart',
        component: ShopCart,
        meta:{
            showFooter: true
        }
    },
    {
        name: 'addCartSuccess',
        path: '/addCartSuccess',
        component: AddCartSuccess,
        meta:{
            showFooter: true
        }
    },
    {
        path: '/detail/:skuid',
        component: Detail,
        meta:{
            showFooter: true
        }
    },
    {
        path: '/home',
        component: Home,
        meta:{
            showFooter: true
        }
    },
    {
        name: 'search',
        path: '/search/:keyword?',
        component: Search,
        meta:{
            showFooter: true
        }
    },
    {
        path: '/login',
        component: Login,
        meta:{
            showFooter: false
        }
    },
    {
        path: '/register',
        component: Register,
        meta:{
            showFooter: false
        }
    },
    // 刚打开页面的时候，重定向到home
    {
        path: '*',
        redirect: '/home'
    }
]