<template>
  <div class="container"> 
    <Header />
    <router-view></router-view>
    <Footer  v-if="$route.meta.showFooter" />
  </div>
</template>

<script>

import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data(){
    return  {

    }

  },
  methods:{
  },
  mounted(){
      // 通知Vuex发送网络请求， 存储在vuex store中
      this.$store.dispatch('getCategoryList')
  }


}
</script>

<style>

</style>
