<template>
  <div class="bodyimg">
    <div class="userFont">
      <div class="imgbox">
        <h1>Wing的博客</h1>
        <h2>在秃头的边缘试探</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bodyimg',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bodyimg{
  width: 100%;
  height: 548px;
  background: url("../assets/bgimg.png") no-repeat;
  background-size: 100%;
  /* 固定背景图不随滚动条移动 */
  background-attachment: fixed;
}
.bodyimg .userFont{
  padding-top: 70px;
  font-size: 40px;
}
.bodyimg .userFont h2{
  font-size: 30px;
}
@media only screen and (min-width: 450px) and (max-width: 800px) {
  .bodyimg{
    height: 300px;
    background-position-y: -100px;
  }
  .imgbox{
    background: rgba(96, 96, 96, 0.5);
    display: inline-block;
    padding: 10px;
  }
  .bodyimg .userFont{
    padding-top: 80px;
    font-size: 40px;
    color: white;
  }
  .bodyimg .userFont h2{
    font-size: 30px;
  }
}
@media only screen and (min-width: 350px) and (max-width: 450px) {
  .bodyimg{
    height: 200px;
  }
  .bodyimg .userFont{
    padding-top: 80px;
    font-size: 16px;
    color: white;
  }
  .bodyimg .userFont h2{
    font-size: 14px;
    background: rgba(96, 96, 96, 0.5);
  }
  .bodyimg .userFont h1{
    background: rgba(96, 96, 96, 0.5);
  }
}
</style>
