<template>
    <div>
        <TypeNav />
        <ListContainer />
        <Recommend />
        <Rank />
        <Like />
        <Floor v-for="(floor,index) in floorList" :key="floor.id" :list="floor" />
        <Brand />
    </div>
</template>



<script>

import Brand from '@/pages/Home/Brand'
import Floor from '@/pages/Home/Floor'
import Like from '@/pages/Home/Like'
import ListContainer from '@/pages/Home/ListContainer'
import Rank from '@/pages/Home/Rank'
import Recommend from '@/pages/Home/Recommend'
import { mapState } from 'vuex'


export default {
    components:{
        Brand,
        Floor,
        Like,
        ListContainer,
        Rank,
        Recommend
    },
    mounted(){
        this.$store.dispatch('getFloorList')
    },
    computed:{
        ...mapState({
            floorList: state => state.home.floorList
        })
    }

}
</script>

<style>

</style>