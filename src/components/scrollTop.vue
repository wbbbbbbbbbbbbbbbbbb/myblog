<template>
  <div class="scrollTop" @click="toTop"></div>
</template>

<script>
export default {
  name: 'scrollTop',
  props: {
    toBottom: {
        type: Number,
        default: 0
    }
  },
  methods: {
    toTop() {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
    }
  },
  mounted() {
    document.querySelector('.scrollTop').style.bottom = this.toBottom;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.scrollTop {
  width: 40px;
  height: 40px;
  display: block;
  background: url(../assets/top.png) no-repeat;
  background-size:100% 100%;
  position: fixed;
  top: 90%;
  right: 20px;
}
@media only screen and (max-width: 800px) {
  .scrollTop{
    display: none;
  }
}
</style>
