import { getSearchInfo } from '@/api'

const state = {
    searchList: {}
}
const actions = {

    async getSearchInfo({commit},params={}){
        let result = await getSearchInfo(params)
        console.log('search info',result.data)
        if (result.code == 200){
            commit('GETSEARCHINFO',result.data)
        }
    }
}
const mutations = {
    GETSEARCHINFO(state,searchList){
        state.searchList = searchList
    }
}

// 计算属性 简化仓库中的数据
const getters = {
    attrsList(state){
        return state.searchList.attrsList || []
    },
    // 第一个参数是当前仓库的state
    goodsList(state){
        return state.searchList.goodsList || []
    },
    trademarkList(state){
        return state.searchList.trademarkList || []
    }
}


export default {
    state,
    actions,
    mutations,
    getters
}