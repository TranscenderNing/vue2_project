import { getCategoryList,getBannerList,getFloorList } from "@/api"

const state = {
    // 三级列表数据
    categoryList: [],
    // 轮播图数据
    bannerList: [],
    // 底部数据
    floorList: []
}


const actions = {
    async getCategoryList(context,value){
        let result = await getCategoryList()
        console.log('&&&',result)
        if (result.code === 200){
            context.commit('GETCATEGORYLIST',result.data)
        }
    },
    async getBannerList({commit},value){
        let result = await getBannerList()
        console.log(result.data)
        if (result.code === 200){
            commit('GETBANNERLIST',result.data)
        }
    },
    async getFloorList({commit},value){
        let result = await getFloorList()
        console.log('floor list',result.data)
        if (result.code === 200){
            commit('GETFLOORLIST',result.data)
        }
    }
}
const mutations = {
    GETCATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList = bannerList
    },
    GETFLOORLIST(state,floorList){
        state.floorList = floorList
        console.log('flo',state.floorList)
    }
}
const getters = {}

export default {
    state,
    actions,
    mutations,
    getters
}