<template>
  <div id="app">
    <bodyimg></bodyimg>
    <div class="box">
      <blogHead></blogHead>
      <router-view></router-view>
      <scrollTop></scrollTop>
    </div>
  </div>
</template>

<script>
import blogHead from '@/components/blogHead.vue'
import scrollTop from '@/components/scrollTop.vue'
import bodyimg from '@/components/bodyimg.vue'

export default {
  name: 'App',
  components:{
    blogHead,
    scrollTop,
    bodyimg
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.box{
  background: #f7f8fa;
}
</style>
