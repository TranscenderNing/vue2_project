import { getAddressInfo,getOrderInfo } from '@/api'

const state = {
    addressList: [],
    orderList: {}
}
const actions  = {
    async getAddressInfo({commit},){
        let res = await getAddressInfo()
        if (res.code === 200){
            console.log('address info',res.data)
            commit('GETADDRESS',res.data)
        }
    },
    async getOrderInfo({commit},){
        let res = await getOrderInfo()
        if (res.code === 200){
            console.log('order info',res.data)
            commit('GETORDER',res.data)
        }
    }
}
const mutations = {
    GETADDRESS(state,addressInfo){
        state.addressList = addressInfo
    },
    GETORDER(state,orderInfo){
        state.orderList = orderInfo
    }
}
const getters = {}


export default {
    state,
    actions,
    mutations,
    getters
}