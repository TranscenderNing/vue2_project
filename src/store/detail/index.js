import { getDetailInfo,AddOrUpdateCart } from '@/api'
import { getUUID } from '@/utils/uuid_tokens.js'

const state = {
    detailList: {},
    uuidToken: getUUID()
}
const actions = {
    async getDetailInfo({commit},skiId){
        let res = await getDetailInfo(skiId)
        console.log(res.data)
        if (res.code === 200){
            commit('GETDETAILINFO',res.data)
        }
    },
    async AddOrUpdateCart({commit},{skuId,skuNum}){
        let res = await AddOrUpdateCart(skuId,skuNum)
        console.log(res.data)
        if (res.code === 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('fail'))
        }
    }
}
const mutations = {
    GETDETAILINFO(state,detailList){
        state.detailList = detailList
    }
}
const getters = {
    categoryView(state){
        return state.detailList.categoryView || {}
    },
    skuInfo(state){
        return state.detailList.skuInfo || {}
    },
    spuSaleAttrList(state){
        console.log('state.detailList.spuSaleAttrList',state.detailList.spuSaleAttrList)
        return state.detailList.spuSaleAttrList || []
    }
}



export default {
    state,
    actions,
    mutations,
    getters
}