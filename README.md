## 项目配置

1. 关闭语法校验工具  vue.config.js 中加入 lintOnSave: false
2. 自动打开浏览器 package.json中 npm run serve --open
3. src目录别名 jsconfig.json中配置 @/* == src/*


4. npm install --save less less-loader@5
   lang='less'

 
## 路由分析
--pages 路由组件 
    Home 路由组件  
    Serch 路由组件
    Login 路由组件 不显示Footer
    Register 路由组件 不显示Footer

--普通组件
    Header 、
    Footer


--注册好路由后，所有组件都有都有
    $route 获取路由信息 query params path
    $router 编程式导航

--路由跳转(修改导航栏的地址)
    router-link
    $router 编程式导航  push replace  可以做其他的业务逻辑

--路由界面放在哪里
    router-view

--组件展示取决于路由，使用meta


--路由传参
    params 路径占位
    query



## 全局组件 三级联动组件 注册一次  可以在任意地方使用 不需要再次引入 全局组件放在components下
    Vue.component(component.name,component)


## 静态组件 : HTML + CSS + 图片资源


## 接口地址

http://gmall-h5-api.atguigu.cn/


## 二次封装 axios
    请求拦截器: 在请求之前处理一些事情
    响应拦截器： 在数据返回之后 可以处理一些逻辑

    发送网络请求  ：  xhr fetch jq axios


## 接口统一管理

    项目小： 在组件的 生命周期函数 中发送请求
    项目大： 


## 进度条 npm install --save nprogress


### vuex 插件： 状态管理库 集中式管理项目中组件公用的数据
    state actions mutations getters
    new VueX.Store({modules:{}})


## 防抖 debounce:
    前面的所有触发都被取消，最后一次触发会在规定的时间内触发
    用户操作频繁，但是只执行一次

## 节流 throttle：
    在规定的时间间隔内不会重复触发回调 把频繁触发变为少量触发
    用户操作频繁，但是把频繁的操作变为少量操作（给浏览器充足的时间解析代码）


## 三级联动组件 路由条件 和 传递参数
    点击1，2，3级分类的时候，从Home模块跳转到Search模块 传递参数包括： 产品名称 和 产品id

    router-link
    $router.push | replace 


## 过渡动画 只有使用 v-if v-show 的组件才能使用过渡动画 在该组件外面加 transition



## 轮播图 swiper
npm i swiper@5


## 模块开发
    静态页面 + 静态组件
    写 api 接口
    vuex 从api接口获取数据
    组件从vuex 仓库 获取数据， 动态展示数据



## 如果属性值为 空字符串 还是会带给服务器参数，如果属性值是 undefined,该字段不会带给服务器




## 页面数据怎么存储

[
    {
        attr: '颜色',
        attrValue: ['红色'，'橙色']
    },
    {
        attr: '爱好',
        attrValue: ['唱歌'，'跳舞']
    },
]


## assets 放置组件公用的静态资源

## css 中绝对路径简写： ~@/assets/images/logo.png


## 路由守卫
    1 全局路由守卫： 只要路由发生变化，就能监听到
    2 路由独享守卫： 只关心某一个路由  
        trade页面只可以从shopCart进入
        pay页面只可以从trade进入
    3 组件内守卫



## 项目打包上线

 npm run build




 






