// 真实向后端发送请求
import requests from "./request"
// mockjs 模拟向后端发送请求
import mockRequest from './mockRequest'
import { mock } from "mockjs"

// 获取三级列表内容
export const getCategoryList = ()=>{
    return requests({
        url: 'product/getBaseCategoryList',
        method: 'get'
    })
}


// 获取首页的轮播图接口
export const getBannerList = ()=> mockRequest.get('/banner')

// 获取 两个 footer 组件所需数据的接口
export const getFloorList = () => mockRequest.get('/floor')

// 获取 搜索模块 数据 请求方式 pos  带参数params至少是空对象
export const getSearchInfo = (params) => {
    return requests({
        url: 'list',
        method: 'post',
        data:params,
    })
}


// 获取产品详情的接口
export const getDetailInfo = (skuId) => requests({url: `/item/${skuId}`, method: 'get'})



//将产品加入到购物车中
export const AddOrUpdateCart = (skuId,skuNum) =>{
    return requests({
        url: `/cart/addToCart/${skuId}/${skuNum}`,
        method: 'post'
    })
}


// 获取购物车列表数据
export const getCartList = () => requests({url:'/cart/cartList',method:'get'})


// 删除商品
export const deletCart = (skuId) => requests({url:`/cart/deleteCart/${skuId}`,method: 'delete'})

// 修改商品选中状态的接口
export const modifyChecked = (skuId,isChecked)=>requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'})

// 注册发送验证码 接口
export const getCode = (phone) => requests({url: `/user/passport/sendCode/${phone}`,method:'get'})

// 用户注册 接口
export const register = (data)=>requests({url:`/user/passport/register`,data, method: 'post'})

// 用户登录 接口
export const login = (data) => requests({url: `user/passport/login`,data,method:'post'})

// 根据token 获取 用户信息
export const getUserInfoByToken = () => requests({url:`/user/passport/auth/getUserInfo`,method:'get'})

// 退出登录 接口
export const logout = () => requests({url:`/user/passport/logout`,method: 'get'})

// 获取用户地址信息
export const getAddressInfo = () => requests({url: `/user/userAddress/auth/findUserAddressList`,method:'get'})

// 获取 订单交易页 商品列表信息
export const getOrderInfo = () => requests({url:`/order/auth/trade`,method: 'get'})

// 提交订单 接口 返回订单号
export const getSubmitOrder = (tradeNo,data) => requests({url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method: 'post'})

// 根据 订单号 获取 需要支付的 金额
export const getPayInfo = (orderId) => requests({url: `/payment/weixin/createNative/${orderId}`,method: 'get'})

// 获取订单支付状态
export const getPayStatus = (orderId) => requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'})

// 获取个人中心数据
export const getMyOrderList = (page,limit) => requests({url : `/order/auth/${page}/${limit}`, method: 'get'})

    

