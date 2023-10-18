import { getCartList,deletCart,modifyChecked } from '@/api'
const state = {
    cartList: []
}
const actions = {
    async getCartList({commit}){
        let res = await getCartList()
        console.log('cart list', res.data)
        if (res.code === 200){
            console.log('commit')
            commit('GETCARTLIST',res.data)
        }
    },
    async deletCart({commit},skuId){
        let  res = await deletCart(skuId)
        console.log(res)
        if (res.code === 200){
            console.log(200)
           return 'ok'
        }
        else{
            return 'fail'
        }
    },
    async modifyChecked({commit},{skuId,isChecked}){
        let res = await modifyChecked(skuId,isChecked)
        if (res.code === 200){
            return 'ok'
        }else{
            return 'fail'
        }
    },
    deleteCheckedCart({dispatch,getters},){
        let promiseAll = []
        getters.cartList.cartInfoList.forEach(elem => {
            if(elem.isChecked === 1){
                let promise = dispatch('deletCart',elem.skuId)
                promiseAll.push(promise)
            }
        });
        //只要都成功，返回成功， 如果有一个失败，即返回失败的结果
        return Promise.all(promiseAll)
    },
    updateAllChecked({dispatch,getters},checked){
        let promiseAll = []
        getters.cartList.cartInfoList.forEach(elem =>{
            if(elem.isChecked !== checked){
                let promise = dispatch('modifyChecked',{skuId: elem.skuId,isChecked: checked})
                promiseAll.push(promise)
            }
        })
        return Promise.all(promiseAll)
    }

}
const mutations = {
    GETCARTLIST(state,cartList){
        console.log('mutation',cartList)
        state.cartList = cartList
    }
}
const getters = {
    cartList(state){
        return state.cartList[0] || {}
    },
    // cartInfoList(state){
    //     return cartList.cartInfoList || []
    // }
}


export default {
    state,
    actions,
    mutations,
    getters
}