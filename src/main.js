import Vue from 'vue'
import App from './App.vue'

import '@/mock/mockServer.js'


import 'swiper/swiper-bundle.css'


// 引入 路由 配置
import router from '@/router'

// 引入全局组件 TypeNav
import TypeNav from '@/components/TypeNav'

//引入全局组件 轮播图 Carousel
import Carousel from '@/components/Carousel'

//引入全局组件 分页器
import Pagination from '@/components/pagination'

import { Button,MessageBox } from 'element-ui'
Vue.component(Button.name,Button)
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert

// 引入 vuex store
import store from '@/store'





Vue.config.productionTip = false

// 注册全局组件 （名字，组件）
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)


// import { getCategoryList } from '@/api/index'
// getCategoryList()

import * as API from '@/api'

// 引入表单校验插件
import "@/plugin/validate"



new Vue({
  render: h => h(App),
  //全局总线
  beforeCreate(){
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  //路由插件
  router,
  //vuex仓库插件
  store
}).$mount('#app')

